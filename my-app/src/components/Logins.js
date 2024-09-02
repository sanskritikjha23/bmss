// src/Logins.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logins.css'; // Ensure this file has the necessary custom styles

const Logins = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example validation and login logic
    if (username && password) {
      // Simulate a login
      // You should replace this with actual authentication logic
      console.log('Logged in with', username);

      // Redirect to the Categories component after successful login
      navigate('/categories'); // Redirect to the Categories page
    } else {
      console.log('Please enter username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button-custom">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Logins;
