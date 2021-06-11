import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCU1XSG7SViY9oYPD3aHPYbKuYtIcUeKIA",
    authDomain: "deco-etcetera.firebaseapp.com",
    projectId: "deco-etcetera",
    storageBucket: "deco-etcetera.appspot.com",
    messagingSenderId: "139259702212",
    appId: "1:139259702212:web:b4f2ba3ba406c2160d9291"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase =()=>app;
  export const getFirestore =()=> firebase.firestore(app)