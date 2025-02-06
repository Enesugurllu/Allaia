'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Kaydol.css';

type UserType = 'private' | 'company';

const Kaydol: React.FC = () => {
  const [userType, setUserType] = useState<UserType>('private');

  const handleUserTypeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserType(e.target.value as UserType);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Form gönderme işlemleri burada yapılacak
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email*" 
          className="form-input"
          required
        />
        
        <input 
          type="password" 
          placeholder="Password*" 
          className="form-input"
          required
        />

        <div className="user-type">
          <label className="radio-label">
            <input
              type="radio"
              name="userType"
              value="private"
              checked={userType === 'private'}
              onChange={handleUserTypeChange}
            />
            Private
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="userType"
              value="company"
              checked={userType === 'company'}
              onChange={handleUserTypeChange}
            />
            Company
          </label>
        </div>

        <div className="name-container">
          <input 
            type="text" 
            placeholder="Name*" 
            className="form-input half-width"
            required
          />
          <input 
            type="text" 
            placeholder="Last Name*" 
            className="form-input half-width"
            required
          />
        </div>

        <input 
          type="text" 
          placeholder="Full Address*" 
          className="form-input"
          required
        />

        <div className="location-container">
          <input 
            type="text" 
            placeholder="City*" 
            className="form-input half-width"
            required
          />
          <input 
            type="text" 
            placeholder="Postal Code*" 
            className="form-input half-width"
            required
          />
        </div>

        <div className="contact-container">
          <select className="form-input half-width" required>
            <option value="">Country*</option>
            <optgroup label="Europe">
              <option value="TR">Turkey</option>
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="ES">Spain</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="CN">China</option>
              <option value="JP">Japan</option>
              <option value="KR">South Korea</option>
              <option value="IN">India</option>
              <option value="SG">Singapore</option>
            </optgroup>
            <optgroup label="North America">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">Mexico</option>
            </optgroup>
          </select>

          <input 
            type="tel" 
            placeholder="Telephone *" 
            className="form-input half-width"
            required
          />
        </div>

        <div className="terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            Accept <a href="#">Terms and conditions</a>
          </label>
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Kaydol;
