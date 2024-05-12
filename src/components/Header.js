import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_url, Profile_url, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // sign in/ sign up
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser ({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
        });
        //unsubscribe when the component unmount.
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        // Toggle GPT Search ==>> create a new slice to for making toggle features.
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute items-center flex justify-between w-full px-10 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44" src={LOGO_url} alt="logo"/>

            {user && (
                <div className="flex justify-center">
                    {showGptSearch && <select className="p-2 m-4 bg-gray-800 text-white" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select>}
                    <button className="py-2 px-4 m-4 bg-violet-700 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "GPT Search"}</button>
                    <img className="w-10 h-10 mt-3" alt="usericon" src={Profile_url} />
                    <button onClick={handleSignOut} className="font-bold text-white"> (Sign Out) </button>
                </div>
            )}
        </div>
    )
}
export default Header;