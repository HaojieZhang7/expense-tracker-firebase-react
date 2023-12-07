// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEc3lRrLGUOn4R5HJWIqq5JW8S47g9IR8",
  authDomain: "expense-tracker1-38abe.firebaseapp.com",
  projectId: "expense-tracker1-38abe",
  storageBucket: "expense-tracker1-38abe.appspot.com",
  messagingSenderId: "876934110628",
  appId: "1:876934110628:web:62909d439bf51a21c1f531",
  measurementId: "G-GTYH3EBWE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login

// firebase init

// firebase deploy