// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlZxQWSpmYbNrH7uwlsTBWiWh8AaCf2w",
  authDomain: "ema-john-simple-aaf77.firebaseapp.com",
  projectId: "ema-john-simple-aaf77",
  storageBucket: "ema-john-simple-aaf77.appspot.com",
  messagingSenderId: "380075129794",
  appId: "1:380075129794:web:9b44e6f7bb0e14cde7345b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;