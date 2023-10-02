// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4f7fc.firebaseapp.com",
  projectId: "real-estate-4f7fc",
  storageBucket: "real-estate-4f7fc.appspot.com",
  messagingSenderId: "955921819752",
  appId: "1:955921819752:web:2be84b9433cd18c76533dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);