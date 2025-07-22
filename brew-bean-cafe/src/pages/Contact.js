import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      setErrors(errs);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Brew & Bean Café | Contact</title>
        <meta name="description" content="Contact Brew & Bean Café. Find our location, business hours, and send us a message." />
      </Helmet>
      <section className="py-5 bg-cafe-dark-green">
        <div className="container">
          <h1 className="mb-4 text-cafe-beige">Contact Us</h1>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-cafe-beige shadow-sm p-4 contact-form text-cafe-beige">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className={`form-control${errors.name ? ' is-invalid' : ''}`} id="name" name="name" value={form.name} onChange={handleChange} />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className={`form-control${errors.email ? ' is-invalid' : ''}`} id="email" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className={`form-control${errors.message ? ' is-invalid' : ''}`} id="message" name="message" rows="4" value={form.message} onChange={handleChange}></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn bg-cafe-light-green text-cafe-beige border-0 hero-btn">Send Message</button>
                  {submitted && <div className="alert alert-success mt-3 bg-cafe-green text-cafe-dark-green">Thank you for contacting us!</div>}
                </form>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-cafe-beige shadow-sm p-4 mb-3">
                <iframe
                  title="Cafe Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6e8e1%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Hometown%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <h5 className="text-cafe-beige">Business Hours</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-cafe-beige">Mon-Fri: 7:00am - 6:00pm</li>
                  <li className="text-cafe-beige">Sat-Sun: 8:00am - 4:00pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 