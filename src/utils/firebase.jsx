// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe_w8GXHfHBfNugyC4T0WEiEODYnrW0TU",
  authDomain: "astrogpt-1aaae.firebaseapp.com",
  projectId: "astrogpt-1aaae",
  storageBucket: "astrogpt-1aaae.appspot.com",
  messagingSenderId: "414375149018",
  appId: "1:414375149018:web:86664eb2207c53568954e3",
  measurementId: "G-91R73BRPJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();