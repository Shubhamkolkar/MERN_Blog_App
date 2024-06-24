// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d1efb.firebaseapp.com",
  projectId: "mern-blog-d1efb",
  storageBucket: "mern-blog-d1efb.appspot.com",
  messagingSenderId: "574381979756",
  appId: "1:574381979756:web:3827ce7f2b1e6017058049"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);