import { React, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const ContextApi = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //# Google Login :
  const googleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  //# Register :
  const register = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //# Login :
  const login = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //# Logout :
  const logout = () => {
    setLoading(false);
    return signOut(auth);
  };

  //# On Auth Change :
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
    });
    return () => unSub();
  }, []);

  const authInfo = { user, loading, googleLogin, register, login, logout };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextApi;