import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGy4mSIXyvs-hKcG1GakHTeFervBg7GtM",
    authDomain: "clone-d8477.firebaseapp.com",
    databaseURL: "https://clone-d8477.firebaseio.com",
    projectId: "clone-d8477",
    storageBucket: "clone-d8477.appspot.com",
    messagingSenderId: "441115657805",
    appId: "1:441115657805:web:432deedd30f9cb72ce7e04",
    measurementId: "G-N7CC45LR31"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


export{db, auth};
