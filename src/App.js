import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-flex">
      <Navbar />
      <div className="flex-grow-1">
        <section id="home"><Home /></section>
        <section id="menu"><Menu /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
