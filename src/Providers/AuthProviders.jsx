import React, { createContext, useEffect, useState } from 'react';
import app from '../fire/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)
export {getAuth} from 'firebase/auth'

const AuthProviders = ({children}) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscriber =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })

         return ()=>{
            unSubscriber()
         }
    },[])

    const userInfo = {
        user,
        createUser,
        signIn,
        logOut
    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;