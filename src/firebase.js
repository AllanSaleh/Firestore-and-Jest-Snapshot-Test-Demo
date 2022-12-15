import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtSddJv0wAhYJMKdRYYIohIcLsqITfZYE",
  authDomain: "fir-85c67.firebaseapp.com",
  projectId: "fir-85c67",
  storageBucket: "fir-85c67.appspot.com",
  messagingSenderId: "289505178158",
  appId: "1:289505178158:web:a1ec8f01ab8ca94b3165bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
