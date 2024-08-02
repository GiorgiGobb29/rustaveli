import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./register.css"
import logo from '../assets/rustavelilogo.jpg'


const Register = () => {

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();


  const validateEmail = (email) => {
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const checkPasswordStrength = (password) => {
    let strength = "Weak";
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6) {
        strength = "Medium";
    }
    return strength;
  }



  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
        setEmailError("Invalid email address");
    } else {
        setEmailError("");
    }

    const strength = checkPasswordStrength(password);
    setPasswordStrength(strength);

    if (validateEmail(email) && strength === "Strong") {
        if (type === 'Wholesale') {
            navigate('/Wholesale');
        } else if (type === 'Retail') {
            navigate('/retail');
        }
    }
};



return (
    <div className='container'>
        <div className='form-wrapper'>
        <img src={logo} className='logo'></img>
        <h2 className='header'>RUSTAVELI Registration</h2>
        <form onSubmit={handleRegister}>
            <div>
                <label>Nickname: </label>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
            </div>
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
                {password && <p>Password strength: {passwordStrength}</p>}
            </div>
            <div>
                <label>Purchase Type </label>
                <input
                    type="radio"
                    value="Wholesale"
                    checked={type === 'Wholesale'}
                    onChange={(e) => setType(e.target.value)}
                /> Wholesale
                <input
                    type="radio"
                    value="Retail"
                    checked={type === 'Retail'}
                    onChange={(e) => setType(e.target.value)}
                /> Retail
            </div>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate('/login')} style={{color: 'blue', cursor: 'pointer'}}>Log In</span></p>
        </div>
       
    </div>
  );
};

export default Register
