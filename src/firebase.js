// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBYSGuBtcBPPWHaQnHc7E5mU10c30qw3-A",
    authDomain: "midlab-d1574.firebaseapp.com",
    projectId: "midlab-d1574",
    storageBucket: "midlab-d1574.firebasestorage.app",
    messagingSenderId: "526290666429",
    appId: "1:526290666429:web:ece4f90e21ff802db0c8d4",
    measurementId: "G-XEYB1S6FZ8"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
