import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKEL_F4z1df9VivuBboUJi8-hZPETJqU",
  authDomain: "first-ef48a.firebaseapp.com",
  projectId: "first-ef48a",
  storageBucket: "first-ef48a.appspot.com",
  messagingSenderId: "235545905373",
  appId: "1:235545905373:web:3d655c1d7dc64be61a3334",
  measurementId: "G-9YGRY2DBPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
