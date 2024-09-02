import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreatesCategory from './components/CreatesCategory';
import UpdateCategory from './components/UpdateCategory';
import DeleteCategory from './components/DeleteCategory';
import ViewCategory from './components/ViewCategory';
import ExpenseForm from './components/ExpenseForm'; // Import ExpenseForm component
import ExpenseList from './components/ExpenseList'; // Import ExpenseList component
import ExpenseReport from './components/ExpenseReport';
import Signup from './components/signup';
import Logins from './components/Logins';
import Categories from './components/CreateCategory'; // Correct import name
import './App.css';

const Header = () => (
  <div className="header">
    <h1>Budget Management</h1>
    <h3>Adhering to a budget helps you maintain control over your finances, prevent overspending, and achieve long-term financial stability and growth. A well-structured budget provides clarity on your income and expenses, enabling you to make informed financial decisions and allocate resources effectively.</h3>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">.
        <Header />
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/logins">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link> {/* Link to Categories page */}
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h1>Welcome to the Budget Management App</h1>} />
            <Route path="/create-category" element={<CreatesCategory />} />
            <Route path="/update-category" element={<UpdateCategory />} />
            <Route path="/del-category" element={<DeleteCategory />} />
            <Route path="/get-category" element={<ViewCategory />} />
            <Route path="/expense-form/:expenseId?" element={<ExpenseForm />} /> {/* Route for ExpenseForm with optional ID */}
            <Route path="/expenses" element={<ExpenseList />} /> {/* Route for ExpenseList */}
            <Route path="/generate-report" element={<ExpenseReport />} />
            <Route path="/export-report/pdf" element={<ExpenseReport />} />
            <Route path="/export-report/csv" element={<ExpenseReport />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logins" element={<Logins />} />
            <Route path="/categories" element={<Categories />} /> {/* Route for Categories */}
          </Routes>
        </main>
        <div className="bottom-buttons">
          <Link to="/signup" className="button-custom">Sign Up</Link>
          <Link to="/logins" className="button-custom">Log In</Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
