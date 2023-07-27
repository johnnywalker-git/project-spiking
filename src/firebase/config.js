// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSicK_05inX84POf-BAe-mk26xkcSi0ec",
  authDomain: "dream-team-app-8b1a8.firebaseapp.com",
  projectId: "dream-team-app-8b1a8",
  storageBucket: "dream-team-app-8b1a8.appspot.com",
  messagingSenderId: "1098205094900",
  appId: "1:1098205094900:web:a96217fc8e36ff40648fa1"
};

// Initialize Firebase app
export const firebase_app = initializeApp(firebaseConfig);
export const database = getFirestore(firebase_app) // set the db and store in database

 