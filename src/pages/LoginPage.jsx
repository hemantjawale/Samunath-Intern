import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan login logic handle karo
    console.log('Login:', { email, password });
    alert('Login functionality would happen here!');
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-80 p-6 bg-white dark:bg-gray-800 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition cursor-pointer">
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
      </p>
      <Link to="/" className="mt-2 text-gray-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default LoginPage;
