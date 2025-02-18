import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

import { AuthContextType } from "@/types";
import { auth, db } from "@/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    () => subscribe();
  }, [user, setIsAuthenticated]);

  async function signUp(email: string, password: string, name: string) {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        uid: userCredential.user.uid,
      });

      return { success: true, message: "User registered successfully" };
    } catch (error: any) {
      console.log(error);
      return { success: false, message: "Feiled to register user" };
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      return { success: true };
    } catch (error: any) {
      console.log(error);
      return { success: false, message: "Feiled to login" };
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {}

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, signUp, user, isloading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
