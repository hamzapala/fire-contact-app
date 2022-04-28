// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsF6vCvwfIbFpsnbroS3EegXPheyOpvfE",
  authDomain: "fire-contact-app-20cc3.firebaseapp.com",
  databaseURL: "https://fire-contact-app-20cc3-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-20cc3",
  storageBucket: "fire-contact-app-20cc3.appspot.com",
  messagingSenderId: "811364558146",
  appId: "1:811364558146:web:0cfad1d0d01a56adc2d4db",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
