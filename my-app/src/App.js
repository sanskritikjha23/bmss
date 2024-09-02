import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './components/signup';
import Logins from './components/Logins';
import Categories from './components/CreateCategory';
import CreateCategory from './components/CreateCategory';
import UpdateCategory from './components/UpdateCategory';
import GetCategory from './components/ViewCategory';
import DelCategory from './components/DeleteCategory';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='main-content'>
      <div className="header">
        <h1>BUDGET TODAY FOR BETTER TOMORROW</h1>
      </div>
      <div className="header-buttons">
        <button className="button-custom" onClick={() => navigate('/logins')}>Login</button>
        <button className="button-custom" onClick={() => navigate('/signup')}>Signup</button>
      </div> 
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/logins" element={<Logins />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/update-category" element={<UpdateCategory />} />
        <Route path="/get-category" element={<GetCategory />} />
        <Route path="/del-category" element={<DelCategory />} />
        <Route path="/expense-form" element={<ExpenseForm />} />
        <Route 
          path="/*" 
          element={
            <>
              <Header />
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
