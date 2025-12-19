// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCISg3rEbe01MgG7dd8GnpjNzFejGOWMVc",
  authDomain: "ecommercereact-13438.firebaseapp.com",
  projectId: "ecommercereact-13438",
  storageBucket: "ecommercereact-13438.firebasestorage.app",
  messagingSenderId: "516220070442",
  appId: "1:516220070442:web:953fea95a324c303503153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)