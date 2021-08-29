import firebase from "firebase/app";

import "firebase/firestore"

const config = {
    apiKey: "AIzaSyCMRQyDPwJNiXLfI5gYDtrfmR1d6lCTk1I",
    authDomain: "fir-tailwind-83dec.firebaseapp.com",
    projectId: "fir-tailwind-83dec",
    storageBucket: "fir-tailwind-83dec.appspot.com",
    messagingSenderId: "570958202640",
    appId: "1:570958202640:web:6f6f725bcf117a6549c795"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  if(!firebase.app.length){
      firebase.initializeApp(config)
  }

  const firestore = firebase.firestore();
  export {firestore};