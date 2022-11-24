import { React, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const ContextApi = ({ children }) => {
  //# Google Login :
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //# Register :
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //# Login :
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //# Logout :
  const logout = () => {
    return signOut(auth);
  };
  const authInfo = { googleLogin, register, login, logout };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextApi;
