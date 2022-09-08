import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { getFirestore } from 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTeg32v2eM8lUIshTYd9wkwMwRzL3f0DE",
  authDomain: "firechat-9c0e8.firebaseapp.com",
  projectId: "firechat-9c0e8",
  storageBucket: "firechat-9c0e8.appspot.com",
  messagingSenderId: "308266506133",
  appId: "1:308266506133:web:271e3ee0e360413e30889c",
  measurementId: "G-XBEY1WYCLY"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
//const db = getFirestore(firebaseApp);

export { db, auth };
