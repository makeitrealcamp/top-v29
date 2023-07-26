import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import RegisterPage from './pages/Register';


function App() {

  return (
    <div className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
