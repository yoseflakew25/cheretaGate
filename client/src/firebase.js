// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cheretagate.firebaseapp.com",
  projectId: "cheretagate",
  storageBucket: "cheretagate.appspot.com",
  messagingSenderId: "574851143815",
  appId: "1:574851143815:web:b6ca8ee92ce7415df4c022"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);