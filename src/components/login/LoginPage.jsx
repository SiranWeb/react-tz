import React from "react";
import './style.css';
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div>
      <h1 className="login_title">Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage;