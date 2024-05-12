// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAO64vcG4tPC7JRMnw2csnnAEs6YJUyI8",
  authDomain: "netflix-gpt-e8356.firebaseapp.com",
  projectId: "netflix-gpt-e8356",
  storageBucket: "netflix-gpt-e8356.appspot.com",
  messagingSenderId: "785358092602",
  appId: "1:785358092602:web:b897001b51de4eb0cbf803",
  measurementId: "G-LSR9ZFKB60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();