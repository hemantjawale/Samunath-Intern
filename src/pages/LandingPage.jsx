import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Landing Page</h1>
      <p>This is a basic landing page built with React + Vite.</p>
      <div style={styles.links}>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/signup" style={styles.button}>Signup</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  links: {
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  }
};

export default LandingPage;
