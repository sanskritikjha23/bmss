import { Link } from 'react-router-dom';
import './CSS/Header.css'; // Ensure this file has the necessary custom styles
import { FaBox, FaPlusCircle, FaChartBar } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="welcome">
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 font-weight-bold mb-4">Welcome to the Budget Management System</h1>
                    <p className="lead mb-4">Efficiently manage your budget with style and ease.</p>
                    <div className="mb-4">
                        <Link to="/login" className="btn btn-light btn-lg custom-btn me-3">Sign In</Link>
                        <Link to="/register" className="btn btn-light btn-lg custom-btn me-3">Register</Link>
                    </div>
                </div>
            </header>

            <main className="container text-center my-5">
                <h2 className="mb-5 text-uppercase font-weight-bold">Features</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg border-0 feature-card">
                            <div className="card-body text-center">
                                <FaBox className="feature-icon mb-3 text-primary" size="3x" />
                                <h5 className="card-title mt-3 font-weight-bold">Track Budget and Expenses</h5>
                                <p className="card-text">Monitor and manage your Budget and Expense levels with ease.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg border-0 feature-card">
                            <div className="card-body text-center">
                                <FaPlusCircle className="feature-icon mb-3 text-success" size="3x" />
                                <h5 className="card-title mt-3 font-weight-bold">Add New Items</h5>
                                <p className="card-text">Quickly add new Categories to your Budget and Expense.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg border-0 feature-card">
                            <div className="card-body text-center">
                                <FaChartBar className="feature-icon mb-3 text-warning" size="3x" />
                                <h5 className="card-title mt-3 font-weight-bold">Generate Reports</h5>
                                <p className="card-text">Create detailed reports to analyze your Expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-dark text-white text-center py-4">
                <p className="mb-0">&copy; 2024 Budget Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Header;
