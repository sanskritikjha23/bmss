import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Logins.css';
import usersicon from "../Assets/usersicon.png";
import passwordicon from "../Assets/passwordicon.png";
import axios from 'axios';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/Login', formData);
            if (response.status === 200) {
                console.log(response.data);
                navigate('/categories');
            } else {
                setError('Failed to log in.');
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                setError(error.response.data.error || 'Failed to log in.');
            } else if (error.request) {
                // Request was made but no response received
                setError('No response from server.');
            } else {
                // Something else happened
                setError('Error: ' + error.message);
            }
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input"></div>
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
                    <div className="input"></div>
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
