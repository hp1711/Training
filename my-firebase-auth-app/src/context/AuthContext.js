// AuthContext.js
import React, { createContext } from "react";
import { auth } from "../firebase/firebase"; // Updated Firebase import
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthProvider = ({ children }) => {
    const signup = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Sign up error:", error);
            throw error;
        }
    };
    
    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };
    
    return (
        <AuthContext.Provider value={{ signup, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthContext = createContext();