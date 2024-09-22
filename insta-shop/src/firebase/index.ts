import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instashop-d2313.firebaseapp.com",
  projectId: "instashop-d2313",
  storageBucket: "instashop-d2313.appspot.com",
  messagingSenderId: "576891998532",
  appId: "1:576891998532:web:72ab559c31385a480a4711"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);