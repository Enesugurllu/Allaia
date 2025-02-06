'use client'
import React, { useState, FormEvent } from 'react';
import './Giris.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Giris: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Form gönderme işlemleri burada yapılacak
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="giris-container">
      <div className="social-login">
        <button type="button" className="facebook-btn">
          <FaFacebook className="social-icon" />
          Login with Facebook
        </button>
        <button type="button" className="google-btn">
          <FaGoogle className="social-icon" />
          Login with Google
        </button>
      </div>

      <div className="divider">Or</div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email*" 
          required 
        />
        <input 
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password*" 
          required 
        />
        
        <div className="form-footer">
          <label className="remember-me">
            <input 
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
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
