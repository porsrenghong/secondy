// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ49q1oF0DIBy1AMwHZeuZH8NrnFNSClw",
  authDomain: "secondy-store.firebaseapp.com",
  projectId: "secondy-store",
  storageBucket: "secondy-store.appspot.com",
  messagingSenderId: "785761122912",
  appId: "1:785761122912:web:a420bd939e88fde98f2105",
  measurementId: "G-639BQ6YDJT",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, storage, auth };
