// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbr7C93vl6zH-5XImG8KD1_r5HQ7ki9kU",
  authDomain: "dungntn.firebaseapp.com",
  projectId: "dungntn",
  storageBucket: "dungntn.appspot.com",
  messagingSenderId: "1050362410874",
  appId: "1:1050362410874:web:1ad10ea864ed4c6b5688c3",
  measurementId: "G-N7ZYCW7V5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);