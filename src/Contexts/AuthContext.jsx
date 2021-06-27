import React, {useState, useEffect, createContext, useContext} from 'react';
// import firebase from 'firebase' //! If error, this is the cause.
import { getFirebase } from '../firebase';
import { getFirestore } from '../firebase';
export const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider = ({children}) =>{
    const firebase = getFirebase();
    const[currentUser, setCurrentUser] = useState("")
    const db = getFirestore();
    // const usersCollection = db.collection('users') //! If error, this is the cause.
useEffect(()=>{
    firebase.auth().onAuthStateChanged(setCurrentUser) 
},[])

const updateUserData = (info) =>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName:`${info.surname}, ${info.name}`,
        surname:info.surname,
        phoneNumber: info.phone,

    }).then((res)=>{
    }).catch((err)=>console.log(err))
}

const resetPassword = (email) =>{
    const auth = firebase.auth();
    let emailAddress = email;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
        alert('An Email has been sent to reset your password. Check your inbox!')
    }).catch(function(error) {
        console.log(error)
    });
}

return<AuthContext.Provider value={{currentUser, setCurrentUser, updateUserData, resetPassword}}>
{children}
</AuthContext.Provider>
}