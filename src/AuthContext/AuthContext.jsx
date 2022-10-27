import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init'
import { useState } from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githunProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    //this is for common file categoory replace.
    const [category, setCategory] = useState();
    const [id, setId] = useState(1);

    const handelGoogleSingIn = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider)
    }


    const handelGithubSingIn = () => {
        setLoading(true)
        return signInWithPopup(Auth, githunProvider)
    }


    const handelSignUpWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const handelLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const handelLogOut = () => {
        return signOut(Auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const AuthInfo = {
        handelGoogleSingIn,
        user, category,
        setCategory, loading,
        setLoading, handelLogIn,
        handelLogOut, handelGithubSingIn,
        handelSignUpWithEmail,
        id, setId,

    }

    return (
        <div>
            <UserContext.Provider value={AuthInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthContext;