import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerStyle = {
    maxWidth: '500px',
    margin: '60px auto',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    border: '1px solid #eee',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  };

  const buttonStyle = {
    display: 'inline-block',

    
    margin: '10px',
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const signupBtnStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Home Page</h1>
      

      <div>
        <Link to="/signup" style={signupBtnStyle}>
          Sign Up First
        </Link>
        <Link to="/login" style={buttonStyle}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Hero;
