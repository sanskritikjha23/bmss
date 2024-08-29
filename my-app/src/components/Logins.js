// Logins.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Logins.css';
import usersicon from "../Assets/usersicon.png";
import passwordicon from "../Assets/passwordicon.png";

function Logins() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        axios.post('http://localhost:5000/user/Login', formData)
            .then(response => {
                console.log('Login response:', response);
                navigate('/create-category');
                if (response.status === 200) {
                    console.log('Redirecting to /create-category');
                     // Redirect to Create Category page
                }
            })
            .catch(error => {
                console.error('Login error:', error);
                if (error.response && error.response.status === 401) {
                    setError('Unauthorized: Invalid email or password.');
                } else {
                    setError('Failed to log in. Please try again.');
                }
            });
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <img src={usersicon} alt="Usericon"/>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <img src={passwordicon} alt="Password"/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="forgot-password">Forgot Password? <span>Click here!</span></div>
                {error && <p className="error">{error}</p>}
                <div className="submit-container">
                    <button type="submit" className="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Logins;
