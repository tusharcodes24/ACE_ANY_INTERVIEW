import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA42xkRY6X7b6WUmjm0VCPtaETlARIP-Zc",
  authDomain: "aceanyinterview-8cebe.firebaseapp.com",
  projectId: "aceanyinterview-8cebe",
  storageBucket: "aceanyinterview-8cebe.firebasestorage.app",
  messagingSenderId: "986625884239",
  appId: "1:986625884239:web:b4ee49ed07d1b85415aa3a",
  measurementId: "G-9YWC9HHBSY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
 