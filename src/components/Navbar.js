import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-cafe-dark-green shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <span className="fs-4 fw-bold text-cafe-beige">☕ Brew & Wind Café</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#home" className="nav-link text-cafe-beige">Home</a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav-link text-cafe-beige">Menu</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-cafe-beige">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-cafe-beige">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 