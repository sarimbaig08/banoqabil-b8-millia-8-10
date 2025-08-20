// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "new-practice-e55a8.firebaseapp.com",
  projectId: "new-practice-e55a8",
  storageBucket: "new-practice-e55a8.firebasestorage.app",
  messagingSenderId: "9890297479",
  appId: "1:9890297479:web:ac7c4511d17035102e6a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);