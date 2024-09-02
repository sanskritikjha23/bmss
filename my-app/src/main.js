import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import CreatesCategory from './components/CreatesCategory';
import UpdateCategory from './components/UpdateCategory';
import DeleteCategory from './components/DeleteCategory';
import ViewCategory from './components/ViewCategory';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseReport from './components/ExpenseReport';
import Signup from './components/signup';
import Logins from './components/Logins';
import Categories from './components/CreateCategory';
import './App.css';
const Main = () => {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<h1></h1>} />
              <Route path="/create-category" element={<CreatesCategory />} />
              <Route path="/update-category" element={<UpdateCategory />} />
              <Route path="/del-category" element={<DeleteCategory />} />
              <Route path="/get-category" element={<ViewCategory />} />
              <Route path="/expense-form" element={<ExpenseForm />} />
              <Route path="/expenses" element={<ExpenseList />} />
              <Route path="/generate-report" element={<ExpenseReport />} />
              <Route path="/export-report/pdf" element={<ExpenseReport />} />
              <Route path="/export-report/csv" element={<ExpenseReport />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logins" element={<Logins />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  };
export default Main() 