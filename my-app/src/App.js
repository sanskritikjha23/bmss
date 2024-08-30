import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateCategory from './components/CreatesCategory';
import Categories from './components/CreateCategory';
import UpdateCategory from './components/UpdateCategory';
import DeleteCategory from './components/DeleteCategory';
import ViewCategory from './components/ViewCategory';
import ExpenseReport from './components/ExpenseReport';
import ExpenseList from './components/ExpenseList';
import Signup from './components/signup';
import Logins from './components/Logins';

const App = () => {
  return (
      <Router>
        <div className="App">
          <nav>
            {/* <Link to="/">Home</Link> */}
            {/* <Link to="/signup">Signup</Link> */}
            <Link to="/logins">Logins</Link>
            {/* Other navigation links */}
          </nav>
          <Routes>
            <Route path="/" element={<h1>Budget Management App</h1>} />
            <Route path="/create-category" element={<CreateCategory />} />
            <Route path="/" element={<CreateCategory />} />
            <Route path="/update-category" element={<UpdateCategory />} />
            <Route path="/del-category" element={<DeleteCategory />} />
            <Route path="/get-category" element={<ViewCategory />} />
            <Route path="/report" element={<ExpenseReport />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logins" element={<Logins />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
