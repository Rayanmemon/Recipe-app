// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, collection, getDocs } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLyqq6pohi5DxoXrus9K3zhlgOgjxTzgg",
  authDomain: "react-recipeapp-4d24d.firebaseapp.com",
  projectId: "react-recipeapp-4d24d",
  storageBucket: "react-recipeapp-4d24d.firebasestorage.app",
  messagingSenderId: "880871465606",
  appId: "1:880871465606:web:936ae9f9e3c4a85465a707",
  measurementId: "G-KYFG8ZZG1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
// const analytics = getAnalytics(app);