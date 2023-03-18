// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, initializeFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt4FVtLdGdoY6KoQYHPEa3x6z8yql2Y5A",
  authDomain: "noobpower-e9627.firebaseapp.com",
  projectId: "noobpower-e9627",
  storageBucket: "noobpower-e9627.appspot.com",
  messagingSenderId: "323344879470",
  appId: "1:323344879470:web:2f694ef5e905d9009d7b7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);