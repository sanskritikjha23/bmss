// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CategoryManagement from './components/CategoryManagement';
// import ExpenseManagement from './components/ExpenseManagement';
import ExpenseReport from './components/ExpenseReport';
import ExpenseList from './components/ExpenseList';
// import { AuthProvider } from './context/AuthContext'; // Ensure you use the AuthProvider

const App = () => {
  return (
   
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {/* Other navigation links */}
          </nav>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Budget Management App</h1>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<CategoryManagement />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/report" element={<ExpenseReport />} />
          </Routes>
        </div>
      </Router>
 
  );
};

export default App;
