import React, {useState, useEffect, createContext, useContext} from 'react';
import firebase from 'firebase'
import { getFirebase } from '../../firebase';
export const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);


export const AuthProvider = ({children}) =>{
    const firebase = getFirebase();
    const[currentUser, setCurrentUser] = useState("")

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
        console.log(user.displayName);
    }).catch((err)=>console.log(err))
}

currentUser && console.log(currentUser.phoneNumber);


return<AuthContext.Provider value={{currentUser, setCurrentUser, updateUserData}}>
{children}
</AuthContext.Provider>
}