// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqYogjAvvz0TetZf8AyMG7-iUafbERZOM",
  authDomain: "my-react-app-49cc0.firebaseapp.com",
  projectId: "my-react-app-49cc0",
  storageBucket: "my-react-app-49cc0.firebasestorage.app",
  messagingSenderId: "138867827778",
  appId: "1:138867827778:web:aeb9166e4ab3f1f3c879db",
  measurementId: "G-HWN5BD6QY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);