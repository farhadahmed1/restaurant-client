import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(email, password); //
  };

  const logOutUser = () => {
    setUser(null);
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log("current user", currentUser);
      }
      // } else {
      //   setError(error);
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError,
    createUser,
    singInUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
