import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

           <div className="input-group">
            <label>Role</label>
            <input type="text" placeholder="Enter your role" required />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
        <p className="redirect-text">
          Don’t have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
