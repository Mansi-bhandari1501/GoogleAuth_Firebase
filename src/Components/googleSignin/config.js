// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDARl78pSsf3kkLxwi6Zd4TjFXFYuOuRI",
  authDomain: "login-9a2e4.firebaseapp.com",
  projectId: "login-9a2e4",
  storageBucket: "login-9a2e4.appspot.com",
  messagingSenderId: "283915732080",
  appId: "1:283915732080:web:a3f73b929ac4c518d5a0b5",
  measurementId: "G-JS8FD7XLM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};