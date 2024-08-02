import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
            console.log("Login successful!");
            // Handle login logic here
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {emailError && <p style={{color: 'red'}}>{emailError}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <span onClick={() => navigate('/register')} style={{color: 'blue', cursor: 'pointer'}}>Register</span></p>
        </div>
    );
};

export default LoginPage;
