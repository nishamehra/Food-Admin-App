// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQLyJwc3IJ81-y06teA4V3A-QZORTdr-U",
    authDomain: "food-admin-app-96e7d.firebaseapp.com",
    projectId: "food-admin-app-96e7d",
    storageBucket: "food-admin-app-96e7d.appspot.com",
    messagingSenderId: "684297712808",
    appId: "1:684297712808:web:04020b44b80e4668cf3e9d",
    measurementId: "G-YRGPN3YSPE"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;