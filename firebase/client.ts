import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBFZG8CMEwOuFYU8a2yqtExewcE1ZyMmYM",
  authDomain: "mockai-7f2e6.firebaseapp.com",
  projectId: "mockai-7f2e6",
  storageBucket: "mockai-7f2e6.firebasestorage.app",
  messagingSenderId: "477398244716",
  appId: "1:477398244716:web:0579686fefcefb46c4e749",
  measurementId: "G-YT4C3J32W3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);