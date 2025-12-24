import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
      <p className="text-lg mb-6">This is a basic landing page built with React + Vite.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
