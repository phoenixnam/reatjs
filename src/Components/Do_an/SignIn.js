import React, { useState } from 'react';
import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div id="wrapper">
      <form id="form-login" onSubmit={handleSubmit}>
        <h2>FIB</h2>
        <h6>Welcome back, you've been missed!</h6>
        <h1 className="form-heading">Sign In</h1>
        <div className="form-group">
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} className="fa-icon" />
            <input
              type="text"
              className="form-input"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-icon">
            <FontAwesomeIcon icon={faLock} className="fa-icon" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="form-input password-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="eye" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon
                icon={passwordVisible ? faEye : faEyeSlash}
                className="far fa-eye"
              />
            </div>
          </div>
        </div>
        <div className="form-group"> {/* Add a new class for the enclosing div */}
          <span>
            <input type="checkbox" value="Remember me" />Remember me
          </span>
          <span id='forgot'>
            Forgot password?
          </span>
        </div>
        <button type="submit" className="form-submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
