import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CreatesCategory from './components/CreatesCategory';
import UpdateCategory from './components/UpdateCategory';
import DeleteCategory from './components/DeleteCategory';
import ViewCategory from './components/ViewCategory';
import ExpenseForm from './components/ExpenseForm'; 
import ExpenseList from './components/ExpenseList'; 
import ExpenseReport from './components/ExpenseReport';
import Signup from './components/signup'; // Fixed: Capitalized the file name
import Logins from './components/Logins';
import Categories from './components/CreateCategory'; 
import './App.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='main-content'>
      <div className='header'>
        <h1>BUDGET TODAY FOR BETTER TOMORROW</h1>
      </div>
      <div className="header-buttons">
          <button className="button-custom" onClick={() => navigate('/signup')}> Register</button>
          <button className="button-custom" onClick={() => navigate('/logins')}>Log In</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-category" element={<CreatesCategory />} />
        <Route path="/update-category" element={<UpdateCategory />} />
        <Route path="/del-category" element={<DeleteCategory />} />
        <Route path="/get-category" element={<ViewCategory />} />
        <Route path="/create-expense" element={<ExpenseForm />} /> 
        <Route path="/expenses" element={<ExpenseList />} /> {/* Fixed the duplicate route */}
        <Route path="/generate-report" element={<ExpenseReport />} />
        <Route path="/add-expense" element={<ExpenseForm />} />
        <Route path="/export-report/pdf" element={<ExpenseReport />} />
        <Route path="/export-report/csv" element={<ExpenseReport />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<Header />} /> {/* Default route for unmatched paths */}
      </Routes>
    </Router>
  );
};

export default App;
