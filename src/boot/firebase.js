import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJRUe3i3-DFBgdUcQgcl0w9PJMBPNHcvc",
  authDomain: "temp-3e004.firebaseapp.com",
  databaseURL: "https://temp-3e004-default-rtdb.firebaseio.com",
  projectId: "temp-3e004",
  storageBucket: "temp-3e004.appspot.com",
  messagingSenderId: "357762466701",
  appId: "1:357762466701:web:8475970e5488eeb4dab3c4",
  measurementId: "G-04Z0SS3K1L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
