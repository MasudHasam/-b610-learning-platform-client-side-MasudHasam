import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.init'

export const UserContext = createContext();
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githunProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
    const user = { name: 'masud' };

    const handelGoogleSingIn = () => {
        return signInWithPopup(Auth, googleProvider)
    }


    const handelGithubSingIn = () => {
        return signInWithPopup(Auth, githunProvider)
    }


    const handelSignUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const AuthInfo = { handelGoogleSingIn, handelGithubSingIn, handelSignUpWithEmail }

    return (
        <div>
            <UserContext.Provider value={AuthInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthContext;