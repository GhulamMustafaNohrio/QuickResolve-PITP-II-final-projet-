import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3 text-dark-brand">
              <i className="bi bi-shield-check me-2"></i>QuickResolve
            </h5>
            <p className="mb-3">
              Empowering organizations with streamlined complaint resolution and efficient management solutions.
            </p>
            <div className="d-flex">
              <a href="#" className="text-white me-3 fs-4" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-3 fs-4" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white me-3 fs-4" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-4" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about-us" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/support" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Support
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <p className="mb-2">
              <i className="bi bi-envelope me-2"></i>support@complaintsystem.com
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone me-2"></i>+1 (555) 123-4567
            </p>
            <p className="mb-0">
              <i className="bi bi-geo-alt me-2"></i>123 Complaint St, Resolution City, RC 12345
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Complaint Management System. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">Developed by <strong>Mustafa Nohrio</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;