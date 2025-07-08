// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP5eYSuhf4ihowVTlzgmeQIFNKn7sARmA",
  authDomain: "coderhouse-react-777.firebaseapp.com",
  projectId: "coderhouse-react-777",
  storageBucket: "coderhouse-react-777.firebasestorage.app",
  messagingSenderId: "538147969943",
  appId: "1:538147969943:web:0cee2b3f68c51fadda82d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)