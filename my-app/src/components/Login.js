import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import your CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const handleLoginChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/Login', formData);
            alert(response.data.message);
        } catch (err) {
            console.log('Error response:', err.response); // Log for debugging
            const errorMessage = err.response?.data?.error || 'Something went wrong';
            setError(errorMessage);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/Register', registerData);
            alert(response.data.message);
            setIsRegister(false); // Switch back to login form
        } catch (err) {
            console.log('Error response:', err.response); // Log for debugging
            const errorMessage = err.response?.data?.error || 'Something went wrong';
            setError(errorMessage);
        }
    };

    return (
        <div className="form-container">
            {isRegister ? (
                <div>
                    <h2>Register</h2>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleRegisterSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={registerData.username}
                            onChange={handleRegisterChange}
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleLoginSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleLoginChange}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleLoginChange}
                            required
                        />
                        <button type="submit">Login</button>
                        <p>
                            Don't have an account?{' '}
                            <button type="button" onClick={() => setIsRegister(true)}>Register</button>
                        </p>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
