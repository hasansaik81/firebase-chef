// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log('environment variable',import.meta.env.VITE_apikey)
// console.log("variable imprt", import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY ,
  authDomain:import.meta.env. VITE_AUTHDOMAIN,
  projectId:import.meta. env.VITE_PROJECTID,
  storageBucket:import.meta.env. VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env. VITE_MESSAGINGSENDERID,
  appId: import.meta.env. VITE_APPID,
  measurementId: "G-83R3FMD4BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;