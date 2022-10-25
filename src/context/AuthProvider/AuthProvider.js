import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // google Sign in
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    // email password create user
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email password sign in
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    // log out
    const logOut = () =>{
        return signOut(auth);
    }

    // check user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state', currentUser);
            setUser(currentUser);
            
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {user, providerLogin, createUser, signIn, logOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;