 import React, { useState } from "react";
import "./LoginSingnup.css"
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Create Account"}</h2>

      <form className="auth-form">
        {!isLogin && <input type="text" placeholder="Full Name" />}

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>

      <p className="switch-text">
        {isLogin
          ? "Don't have an account?"
          : "Already have an account?"}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Signup" : " Login"}
        </span>
      </p>
    </div>
  );
};

export default LoginSignup;
