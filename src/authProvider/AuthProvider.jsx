import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase-confic';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,onAuthStateChanged} from 'firebase/auth';


const auth=getAuth(app);
export const Authcontex=createContext(null)

const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    const authInfo = {
        createUser,
        signIn,
        loading,
        user,
        logOut,
    }

    useEffect(() => {
        const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscirbe()
        }
    }, [])


    return (
        <Authcontex.Provider value={authInfo}>
            {children}
        </Authcontex.Provider>
    );
};

export default AuthProvider;