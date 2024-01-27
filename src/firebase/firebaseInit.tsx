import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//creating the firebase database
const firebaseConfig = {
  apiKey: "AIzaSyBD78oz0Iya4yl0x5YltmLowLkbUDqOspA",
  authDomain: "chatte-50f4b.firebaseapp.com",
  projectId: "chatte-50f4b",
  storageBucket: "chatte-50f4b.appspot.com",
  messagingSenderId: "771669625767",
  appId: "1:771669625767:web:37e6fad96b4160eaca8482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);