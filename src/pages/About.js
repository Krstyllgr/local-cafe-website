import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>Brew & Bean Café | About Us</title>
        <meta name="description" content="Learn about the mission, story, and team behind Brew & Bean Café." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-cafe-dark-green d-flex align-items-center justify-content-center" style={{ minHeight: '40vh', position: 'relative' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--cafe-beige)' }}>Our Story Begins with a Cup</h1>
          <p className="lead mb-4" style={{ color: 'var(--cafe-beige)', maxWidth: 600, margin: '0 auto' }}>
            Brew & Wind Café is more than a coffee shop—it's a community hub where every cup is crafted with care, and every guest is family.
          </p>
          <a href="#contact" className="btn hero-btn bg-cafe-light-green px-4 py-2 fs-5">Visit Us</a>
        </div>
      </section>

      {/* Our Journey - Horizontal Timeline with Overlapping Cards */}
      <section className="py-5 bg-cafe-beige text-cafe-dark-green">
        <div className="container">
          <h2 className="mb-5 pb-3 text-center" style={{ paddingBottom: '2.5rem' }}>Our Journey</h2>
          <div className="position-relative" style={{ minHeight: 220, marginTop: '5.5rem' }}>
            {/* Timeline line */}
            <div className="d-none d-md-block position-absolute top-50 start-0 w-100" style={{ borderTop: '4px solid var(--cafe-light-green)', zIndex: 1, left: 0, right: 0, transform: 'translateY(-50%)' }}></div>
            <div className="row justify-content-center align-items-end g-0 position-relative" style={{ zIndex: 2 }}>
              {/* 2024 Card */}
              <div className="col-12 col-md-4 d-flex flex-column align-items-center" style={{ position: 'relative' }}>
                <div className="bg-cafe-beige card shadow-sm text-center px-2 py-4" style={{ minWidth: 220, maxWidth: 270, marginBottom: 24, zIndex: 2 }}>
                  <div style={{ fontSize: '2.2rem', color: 'var(--cafe-green)' }} role="img" aria-label="Founded">🏠</div>
                  <div className="fw-bold fs-5 mb-1 mt-2">2024</div>
                  <h6 className="mb-2 text-cafe-dark-green">Founded</h6>
                  <p className="mb-0 text-cafe-green small">Brew & Bean Café opens its doors, inspired by a love for specialty coffee and a dream to create a welcoming space for all.</p>
                </div>
                {/* Timeline dot */}
                <div className="d-none d-md-block position-absolute start-50 translate-middle-x" style={{ bottom: -12, width: 20, height: 20, background: 'var(--cafe-light-green)', borderRadius: '50%', border: '4px solid var(--cafe-beige)', zIndex: 3 }}></div>
              </div>
              {/* 2026 Card (center, larger, pops out) */}
              <div className="col-12 col-md-4 d-flex flex-column align-items-center" style={{ position: 'relative', zIndex: 4 }}>
                <div className="bg-cafe-beige card shadow-lg text-center px-3 py-5" style={{ minWidth: 260, maxWidth: 320, marginBottom: 40, marginTop: -30, transform: 'scale(1.12)', boxShadow: '0 8px 32px 0 rgba(62,123,39,0.18)' }}>
                  <div style={{ fontSize: '2.8rem', color: 'var(--cafe-green)' }} role="img" aria-label="Sustainability">🌱</div>
                  <div className="fw-bold fs-3 mb-1 mt-2">2026</div>
                  <h5 className="mb-2 text-cafe-dark-green">Sustainability Milestone</h5>
                  <p className="mb-0 text-cafe-green">Transitioned to 100% ethically sourced beans and eco-friendly packaging, deepening our commitment to the planet.</p>
                </div>
                {/* Timeline dot */}
                <div className="d-none d-md-block position-absolute start-50 translate-middle-x" style={{ bottom: -12, width: 24, height: 24, background: 'var(--cafe-light-green)', borderRadius: '50%', border: '5px solid var(--cafe-beige)', zIndex: 5 }}></div>
              </div>
              {/* 2025 Card */}
              <div className="col-12 col-md-4 d-flex flex-column align-items-center" style={{ position: 'relative' }}>
                <div className="bg-cafe-beige card shadow-sm text-center px-2 py-4" style={{ minWidth: 220, maxWidth: 270, marginBottom: 24, zIndex: 2 }}>
                  <div style={{ fontSize: '2.2rem', color: 'var(--cafe-green)' }} role="img" aria-label="Community">🎤</div>
                  <div className="fw-bold fs-5 mb-1 mt-2">2025</div>
                  <h6 className="mb-2 text-cafe-dark-green">Community First</h6>
                  <p className="mb-0 text-cafe-green small">We launch our first community event, supporting local artists and hosting open mic nights.</p>
                </div>
                {/* Timeline dot */}
                <div className="d-none d-md-block position-absolute start-50 translate-middle-x" style={{ bottom: -12, width: 20, height: 20, background: 'var(--cafe-light-green)', borderRadius: '50%', border: '4px solid var(--cafe-beige)', zIndex: 3 }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For - Paragraph and Coffee Illustration */}
      <section className="py-5 bg-cafe-green text-cafe-beige">
        <div className="container">
          <h2 className="mb-5 text-center">What We Stand For</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="fs-4 lh-sm mb-2" style={{ maxWidth: 480, letterSpacing: '-0.01em', lineHeight: 1.4 }}>
                At Brew & Wind Café, we are dedicated to quality in every cup, fostering a sense of community, and championing sustainability. We source the finest beans and ingredients, create a welcoming space for all, and care deeply for our planet and future generations.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={require("../assets/cafe.jpg")}
                alt="Brew & Bean Café interior"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 400, minHeight: 260, width: '100%', maxWidth: 520, objectFit: 'cover', transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)', cursor: 'zoom-in' }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.13)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider with more coffee-related emojis */}
      <div className="w-100 d-flex align-items-center justify-content-center">
        <hr className="flex-grow-1" style={{ borderTop: '2px solid var(--cafe-light-green)', opacity: 0.5 }} />
        {/* <span style={{ fontSize: '1.7rem' }} role="img" aria-label="Coffee">☕</span> */}
        <hr className="flex-grow-1" style={{ borderTop: '2px solid var(--cafe-light-green)', opacity: 0.5 }} />
      </div>
     
    </div>
  );
}

export default About; 