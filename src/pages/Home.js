import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import latteImg from '../assets/latte.jpg';
import croissantImg from '../assets/croissant.jpg';
import coldBrewImg from '../assets/cold-brew.jpg';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Brew & Wind Café | Home</title>
        <meta name="description" content="Welcome to Brew & Wind Café. Enjoy our finest coffee and pastries in a cozy atmosphere." />
      </Helmet>
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Welcome to Brew & Wind Café</h1>
          <p className="lead mb-4">Your neighborhood spot for specialty coffee, fresh pastries, and good vibes.</p>
          <button className="hero-btn bg-cafe-green text-cafe-beige border-0 p-2 rounded" onClick={() => { document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }); }}>See Our Menu</button>
        </div>
      </section>
      <section className="py-5 bg-cafe-beige">
        <div className="container">
          <h2 className="mb-4 text-cafe-dark-green">Featured Items</h2>
          <div className="row">
            {/* Replace with dynamic featured items later */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 bg-cafe-beige cafe-shadow">
                <img src={latteImg} className="card-img-top" alt="Latte" />
                <div className="card-body">
                  <h5 className="card-title text-cafe-green">Signature Latte</h5>
                  <p className="card-text">Rich espresso with steamed milk and a touch of art.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 bg-cafe-beige cafe-shadow">
                <img src={croissantImg} className="card-img-top" alt="Croissant" />
                <div className="card-body">
                  <h5 className="card-title text-cafe-green">Fresh Croissant</h5>
                  <p className="card-text">Flaky, buttery, and baked fresh every morning.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 bg-cafe-beige cafe-shadow">
                <img src={coldBrewImg} className="card-img-top" alt="Cold Brew" />
                <div className="card-body">
                  <h5 className="card-title text-cafe-green">Cold Brew</h5>
                  <p className="card-text">Smooth, bold, and served over ice for a refreshing kick.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 