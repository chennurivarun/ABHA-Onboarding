// Import the Firebase functions that you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Optional: Import authentication if you're using it
import { getFirestore } from "firebase/firestore"; // Optional: Import Firestore for database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCORvtgDS2P8Ak-97yKkHJSoW9hpIFLGQg",
  authDomain: "abha-pro.firebaseapp.com",
  projectId: "abha-pro",
  storageBucket: "abha-pro.appspot.com",
  messagingSenderId: "84348841126",
  appId: "1:84348841126:web:4b3b9daafdb14139a75867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services if you need them (like Auth or Firestore)
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firebase Firestore

export { app, auth, db };
