

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCp3t39T-DE5Ey9WESE2BmWk2z5h3YEXE",
  authDomain: "mis-autitos.firebaseapp.com",
  projectId: "mis-autitos",
  storageBucket: "mis-autitos.appspot.com",
  messagingSenderId: "719516574785",
  appId: "1:719516574785:web:112b1abe603e6c5df412c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)