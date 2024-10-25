import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./LoginPage.css"; // Import the CSS for the login page

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to Your Account</h2>
                <AuthForm isLogin={true} />
            </div>
        </div>
    );
};

export default LoginPage;
