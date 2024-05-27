import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'; 

const HomePage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="home-page">
      <h2>Welcome to the Student Management System!!</h2>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToSignup}>Signup</button>
    </div>
  );
};

export default HomePage;