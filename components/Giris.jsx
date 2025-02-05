import React from 'react';
import './Giris.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Giris = () => {
  return (
    <div className="giris-container">
      <div className="social-login">
        <button className="facebook-btn">
          <FaFacebook className="social-icon" />
          Login with Facebook
        </button>
        <button className="google-btn">
          <FaGoogle className="social-icon" />
          Login with Google
        </button>
      </div>

      <div className="divider">Or</div>

      <form className="login-form">
        <input type="email" placeholder="Email*" required />
        <input type="password" placeholder="Password*" required />
        
        <div className="form-footer">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="forgot-password">Lost Password?</a>
        </div>

        <button type="submit" className="login-btn">Log In</button>
      </form>
    </div>
  );
};

export default Giris;
