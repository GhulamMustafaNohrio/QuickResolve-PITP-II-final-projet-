import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!token) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center text-dark-brand" to="/">
            <i className="bi bi-shield-check me-2"></i>
            QuickResolve
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  <i className="bi bi-info-circle me-1"></i>About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  <i className="bi bi-gear me-1"></i>Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  <i className="bi bi-question-circle me-1"></i>Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="bi bi-envelope me-1"></i>Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="bi bi-box-arrow-in-right me-1"></i>Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="bi bi-person-plus me-1"></i>Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-dark-brand" to="/dashboard">
          <i className="bi bi-shield-check me-2"></i>
          Complaint System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="bi bi-house-door me-1"></i>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/complaint-form">
                <i className="bi bi-plus-circle me-1"></i>Add Complaint
              </Link>
            </li>
            {user && user.role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <i className="bi bi-gear me-1"></i>Admin Panel
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-1"></i>{user ? user.name : 'User'}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-1"></i>Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;