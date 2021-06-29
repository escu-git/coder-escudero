import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "deco-etcetera.firebaseapp.com",
    projectId: "deco-etcetera",
    storageBucket: "deco-etcetera.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
    appId: process.env.REACT_APP_API_ID
  };

  export const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase =()=>app;
  export const getFirestore =()=> firebase.firestore(app)
