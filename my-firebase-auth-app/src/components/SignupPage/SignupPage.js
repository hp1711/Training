import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./SignupPage.css"; // Add your styles specific to the signup page

const SignupPage = () => {
    return (
        <div className="signup-page">
            <div className="signup-container">
                
                <AuthForm isLogin={false} />
            </div>
        </div>
    );
};

export default SignupPage;
