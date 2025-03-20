import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observe onAuth state');
            setUsers(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = { users, loading, createUser, signInUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;