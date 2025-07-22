import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>Brew & Bean Café | About Us</title>
        <meta name="description" content="Learn about the mission, story, and team behind Brew & Bean Café." />
      </Helmet>
      <section className="py-5 bg-cafe-dark-green text-cafe-beige">
        <div className="container">
          <h1 className="mb-4">About Us</h1>
          <p className="lead">At Brew & Bean Café, our mission is to bring people together over great coffee and fresh pastries in a welcoming, cozy space.</p>
          <p>Founded in 2024, we are passionate about quality, community, and sustainability. Our beans are ethically sourced, and our pastries are baked fresh daily by our talented team.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-cafe-dark-green">Meet the Team</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center shadow-sm bg-cafe-beige">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Owner" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title text-cafe-green">Alex Brewster</h5>
                  <p className="card-text text-cafe-light-green">Owner & Head Barista</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center shadow-sm bg-cafe-beige">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Pastry Chef" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title text-cafe-green">Jamie Bean</h5>
                  <p className="card-text text-cafe-light-green">Pastry Chef</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center shadow-sm bg-cafe-beige">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Manager" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title text-cafe-green">Sam Roaster</h5>
                  <p className="card-text text-cafe-light-green">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 