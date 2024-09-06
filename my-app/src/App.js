// App.js
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatesCategory from './components/CreatesCategory';
import UpdateCategory from './components/UpdateCategory';
import DeleteCategory from './components/DeleteCategory';
import ViewCategory from './components/ViewCategory';
import ExpenseForm from './components/ExpenseForm'; 
import ExpenseList from './components/ExpenseList'; 
import ExpenseReport from './components/ExpenseReport';
import Signup from './components/signup.js'; 
import Logins from './components/Logins';
import Categories from './components/CreateCategory'; // Ensure correct path
import './App.css';
import Header from './components/Header.js';


const App = () => {
  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/create-category" element={<CreatesCategory />} />
        <Route path="/update-category" element={<UpdateCategory />} />
        <Route path="/del-category" element={<DeleteCategory />} />
        <Route path="/get-category" element={<ViewCategory />} />
        <Route path="/create-expense" element={<ExpenseForm />} /> 
        
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/expense-form/:id?" element={<ExpenseForm />} />
        <Route path="/generate-report" element={<ExpenseReport />} />       
        <Route path="/signup" element={<Signup />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/categories" element={<Categories />} />
        
      </Routes>
    </Router>
  );
};

export default App;
