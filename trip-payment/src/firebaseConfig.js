import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Hgu-BbBvR9HuhvQI_u6az-ikW3KSPQk",
  authDomain: "trip-payment.firebaseapp.com",
  projectId: "trip-payment",
  storageBucket: "trip-payment.appspot.com",
  messagingSenderId: "466569723967",
  appId: "1:466569723967:web:bba80d880c27706673788a",
  measurementId: "G-Y40YCPC441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
