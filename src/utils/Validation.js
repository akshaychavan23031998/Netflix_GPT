// export const checkValidateData = (name, email, password) => {
//     const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
//     const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
//     const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

//     if(!isNameValid) return "Name Is Not Valid";
//     if(!isEmailValid) return "Email ID Is Not Valid";
//     if(!isPasswordValid) return "Password Is Not Valid";

//     return null;
// }

export const checkValidateData = (name, email, password, isSignInForm) => {
    let errorMsg = "";

    if (isSignInForm) {
        // Validation for Sign In form
        const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
        const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

        if (!isEmailValid) errorMsg = "Email ID Is Not Valid";
        else if (!isPasswordValid) errorMsg = "Password Is Not Valid";
    } else {
        // Validation for Sign Up form
        const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
        const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
        const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

        if (!isNameValid) errorMsg = "Name Is Not Valid";
        else if (!isEmailValid) errorMsg = "Email ID Is Not Valid";
        else if (!isPasswordValid) errorMsg = "Password Is Not Valid";
    }

    return errorMsg;
};
