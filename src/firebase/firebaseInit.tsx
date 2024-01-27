import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//creating the firebase database
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.APPID,

  projectId: process.env.AUTHDOMAIN,
  storageBucket: process.env.MASSAGINGSENDERID,
  messagingSenderId: process.env.STORAGEBUCKET,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);