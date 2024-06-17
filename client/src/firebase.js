// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-405ee.firebaseapp.com",
  projectId: "mern-blog-405ee",
  storageBucket: "mern-blog-405ee.appspot.com",
  messagingSenderId: "344603111782",
  appId: "1:344603111782:web:b33426ffe6271bc69018a7"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);