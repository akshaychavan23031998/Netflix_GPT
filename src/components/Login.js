import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { Background_url } from "../utils/constants";

const Login = () => {   

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    
    const [errorMsg, seterrorMsg] = useState();
    const[isSignInForm, setisSignInForm] = useState(true);

    const hangleButtonClick = () => {
        if (email.current && password.current) { // Check if email and password refs are not null
            const msg = checkValidateData(
                name.current ? name.current.value : null,
                email.current.value,
                password.current.value,
                isSignInForm
            );
            seterrorMsg(msg);
            if(msg) return;
            //signin / signup logic.
            if(!isSignInForm) {
                //signup logic.
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/111384131?v=4"
                          }).then(() => {
                            // Profile updated!
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser ({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                          }).catch((error) => {
                            // An error occurred
                            seterrorMsg(error.message);
                          });
                        // console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        seterrorMsg(errorCode +"-"+errorMessage);
                    });
            }
            else {
                //sign in logic.
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        // console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        seterrorMsg(errorCode +"-"+errorMessage);
                    });
            }
        } else {
            console.error("Email or password ref is null");
        }
    }
    
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={Background_url} alt="logo"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 my-28 mx-auto right-0 left-0 rounded-md bg-black bg-opacity-80 text-white">
                <h1 className="p-2 m-2 text-3xl font-bold ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="rounded-md p-2 m-2 w-full bg-gray-700 bg-opacity-50"/>}
                <input ref={email} type="text" placeholder="Email ID" className="rounded-md p-2 m-2 w-full bg-gray-700 bg-opacity-50"/>
                <input ref={password} type="password" placeholder="Password" className="rounded-md p-2 m-2 w-full bg-gray-700 bg-opacity-50"/>
                <p className="text-red-600 font-bold">{errorMsg}</p>
                <button onClick={hangleButtonClick} className="px-10 py-2 m-2 w-full bg-[#C11119] rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <h3 className="p-2 m-2 flex justify-center">OR</h3>
                <p className="py-5 flex justify-center cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up now" : "Already a User ? Sign In here"}</p>
            </form>
        </div>        
    );
}
export default Login;