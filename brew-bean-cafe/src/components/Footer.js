import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mb-md-0">
          <span className="fw-bold">Brew & Wind Café</span> &copy; {new Date().getFullYear()}<br />
          123 Main St, Hometown, USA
        </div>
        <div>
          <a href="https://facebook.com" className="text-light me-3" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook fs-4"></i></a>
          <a href="https://instagram.com" className="text-light me-3" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram fs-4"></i></a>
          <a href="https://twitter.com" className="text-light" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter fs-4"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 