import React, {useState, useEffect, createContext, useContext} from 'react';
import firebase from 'firebase'
import { getFirebase } from '../../firebase';
export const AuthContext = createContext();
export const useAuth = ()=> useContext(AuthContext);


export const AuthProvider = ({children}) =>{
    const firebase = getFirebase();
    const[currentUser, setCurrentUser] = useState(null)

useEffect(()=>{
    firebase.auth().onAuthStateChanged(setCurrentUser)
},[])

console.log(currentUser)
return<AuthContext.Provider value={{currentUser}}>
{children}
</AuthContext.Provider>
}