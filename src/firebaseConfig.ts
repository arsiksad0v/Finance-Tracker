import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLU1a70sKyhPY5WXZdZYLK0zPN0Gohk4s",
    authDomain: "finance-tracker-93303.firebaseapp.com",
    projectId: "finance-tracker-93303",
    storageBucket: "finance-tracker-93303.appspot.com",
    messagingSenderId: "527351281201",
    appId: "1:527351281201:web:842622af5752a0d32a4710",
    measurementId: "G-CXG2GS37FF"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };