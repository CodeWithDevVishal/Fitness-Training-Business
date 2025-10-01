import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#e60023' : '#f0f0f0',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '8px 20px',
    transition: 'color 0.3s ease',
  });

  return (
    <nav className="navbar-dark-theme  py-3">
      <ul className="d-flex list-unstyled align-items-center fs-5 m-0">
        <li className="flex-grow-1 d-flex align-items-center">
          <NavLink to="/" className="brand-link text-decoration-none d-flex align-items-center">
            <img
              src="/img/logo.svg"
              alt="logo"
              className="img-fluid rounded me-2"
              style={{ height: '45px' }}
            />
            <span className="fw-bold fs-4 brand-text">Fitness Trainer</span>
          </NavLink>
        </li>

        <li><NavLink to="/" style={navLinkStyles}>Home</NavLink></li>
        <li><NavLink to="/programs" style={navLinkStyles}>Programs</NavLink></li>
        <li><NavLink to="/blog" style={navLinkStyles}>Blog</NavLink></li>
        <li><NavLink to="/contact" style={navLinkStyles}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
