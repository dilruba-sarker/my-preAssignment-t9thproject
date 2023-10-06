import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import auth from '../Firebase/Firebase.confiq';
import { GoogleAuthProvider } from "firebase/auth";

const goggleprovider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signGoo=()=>{
        return signInWithPopup(auth,goggleprovider)
    }

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth, (currentUser=>{
 setUser(currentUser)
 setLoading(false)
 console.log("change value of onAuthChange", currentUser);
    }))
    
    return()=>{unSubscribe()}
    
},[])
    const infoAuth={signIn,loading,
        user,signGoo,
        createUser,
        logOut}
    return (
        <AuthContext.Provider value={infoAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
