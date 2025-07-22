import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-cafe-dark-green shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fs-4 fw-bold text-cafe-beige">☕ Brew & Wind Café</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => 'nav-link text-cafe-beige' + (isActive ? ' active' : '')} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/menu" className={({ isActive }) => 'nav-link text-cafe-beige' + (isActive ? ' active' : '')}>Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => 'nav-link text-cafe-beige' + (isActive ? ' active' : '')}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => 'nav-link text-cafe-beige' + (isActive ? ' active' : '')}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 