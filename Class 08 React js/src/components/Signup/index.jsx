import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>
        <p className="redirect-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
