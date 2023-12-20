// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD26anXGwhTHVqiHKZzjebuqZTDVOcn5l4",
  authDomain: "suspicious-fe7bb.firebaseapp.com",
  projectId: "suspicious-fe7bb",
  storageBucket: "suspicious-fe7bb.appspot.com",
  messagingSenderId: "222651112174",
  appId: "1:222651112174:web:1474f6b1361412cd9431ff",
  measurementId: "G-C6DR512Z2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);