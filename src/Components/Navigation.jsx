import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#ff6b00' : '#ffffffcc',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '8px 16px',
    transition: 'color 0.3s ease',
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2 ">
      <div className="container-fluid rounded rounded-3">
        {/* Brand */}
        <NavLink to="/Fitness-Training-Business/" className="navbar-brand d-flex align-items-center">
          <img
            src="./img/logo.svg"
            alt="logo"
            className="img-fluid me-2"
            style={{ height: '40px' }}
          />
          <span className="fw-bold">Fitness Trainer</span>
        </NavLink>

        {/* Toggler */}
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

        {/* Collapsible Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/Fitness-Training-Business/" className="nav-link" style={navLinkStyles}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Fitness-Training-Business/programs" className="nav-link" style={navLinkStyles}>
                Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Fitness-Training-Business/blog" className="nav-link" style={navLinkStyles}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Fitness-Training-Business/contact" className="nav-link" style={navLinkStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
