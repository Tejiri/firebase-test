import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVRFfMdZe4lDLbdInNtb5D4Weu8uBu5G8",
  authDomain: "react-fire-a49de.firebaseapp.com",
  projectId: "react-fire-a49de",
  storageBucket: "react-fire-a49de.appspot.com",
  messagingSenderId: "468250167782",
  appId: "1:468250167782:web:e2655dace179ad0ca4ee27",
  measurementId: "G-T0L1ZXE4LJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, firebaseApp,provider };
