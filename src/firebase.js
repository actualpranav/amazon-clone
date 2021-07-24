import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX-wK8En4meSomLo_ZTY5cJmoJBP_Id7Y",
  authDomain: "challenge-629de.firebaseapp.com",
  projectId: "challenge-629de",
  storageBucket: "challenge-629de.appspot.com",
  messagingSenderId: "257758449803",
  appId: "1:257758449803:web:53c6e2895a1385a15b048e",
  measurementId: "G-Y78EP98YEJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

//export { auth };

export { db, auth };
