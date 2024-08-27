import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CategoryManagement from './components/CategoryManagement';
import ExpenseManagement from './components/ExpenseManagement';
import ExpenseReport from './components/ExpenseReport';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/categories">Categories</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to the User Management App</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<CategoryManagement />} />
          <Route path="/expenses" element={<ExpenseManagement />} />
          <Route path="/report" element={<ExpenseReport />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
