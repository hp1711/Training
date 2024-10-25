// AuthForm.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Make sure AuthContext is exported from the context file
import './AuthForm.css';

const AuthForm = ({ isLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { signup, login } = useContext(AuthContext); // Access the signup and login functions from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isLogin) {
                const result = await login(email, password);
                if (result) {
                    console.log("Login successful");
                } else {
                    throw new Error("Login failed. Please check your credentials.");
                }
            } else {
                const result = await signup(email, password);
                if (result) {
                    console.log("Sign Up successful");
                } else {
                    throw new Error("Sign Up failed. Please try again.");
                }
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setEmail("");
            setPassword("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            {error && <p className="error-message">{error}</p>}
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            <button type="submit" disabled={loading}>
                {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
            </button>
        </form>
    );
};

export default AuthForm;
