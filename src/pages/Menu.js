import React from 'react';
import { Helmet } from 'react-helmet';
import "../App.css";
import leafBg from '../assets/leaf-bg.jpg';

const categoryIcons = {
  Coffee: '☕',
  Tea: '🫖',
  Pastries: '🥐',
  Sandwiches: '🥪',
  Salads: '🥗',
  Desserts: '🍰',
};

const menuData = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: '$3' },
      { name: 'Americano', price: '$3.5' },
      { name: 'Latte', price: '$4' },
      { name: 'Cappuccino', price: '$4' },
      { name: 'Mocha', price: '$4.5' },
      { name: 'Flat White', price: '$4' },
      { name: 'Macchiato', price: '$3.5' },
    ],
  },
  {
    category: 'Tea',
    items: [
      { name: 'Green Tea', price: '$3' },
      { name: 'Chai Latte', price: '$3.5' },
      { name: 'Earl Grey', price: '$3' },
      { name: 'Herbal Tea', price: '$3' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: '$2.5' },
      { name: 'Muffin', price: '$2' },
      { name: 'Scone', price: '$2.5' },
      { name: 'Cinnamon Roll', price: '$3' },
      { name: 'Banana Bread', price: '$2.5' },
    ],
  },
  {
    category: 'Sandwiches',
    items: [
      { name: 'Ham & Cheese', price: '$5' },
      { name: 'Turkey Club', price: '$5.5' },
      { name: 'Veggie Delight', price: '$4.5' },
      { name: 'Chicken Pesto', price: '$5.5' },
    ],
  },
  {
    category: 'Salads',
    items: [
      { name: 'Caesar Salad', price: '$4.5' },
      { name: 'Greek Salad', price: '$4.5' },
      { name: 'Quinoa Bowl', price: '$5' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Cheesecake', price: '$4' },
      { name: 'Chocolate Brownie', price: '$3.5' },
      { name: 'Lemon Tart', price: '$3.5' },
    ],
  },
];

function Menu() {
  return (
    <div>
      <Helmet>
        <title>Brew & Bean Café | Menu</title>
        <meta name="description" content="Explore our menu of specialty coffee, pastries, and teas at Brew & Bean Café." />
      </Helmet>
      {/* Combined Hero + Menu Section */}
      <section
        className="py-5 menu-section position-relative"
        style={{
          backgroundImage: `url(${leafBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="menu-section-overlay position-absolute w-100 h-100" style={{background: 'rgba(34, 49, 46, 0.85)', top: 0, left: 0, zIndex: 1}}></div>
        <div className="container position-relative" style={{zIndex: 2}}>
          {/* Hero Text */}
          <div className="text-center text-cafe-beige mb-5">
            <h1 className="display-4 fw-bold mb-2">Our Menu</h1>
            <p className="lead mb-0">Freshly brewed, baked, and made with love.</p>
          </div>
          {/* Menu Cards */}
          <div className="row g-4">
            {menuData.map((cat) => (
              <div className="col-md-4" key={cat.category}>
                <div className="card h-100 shadow menu-card position-relative">
                  <div className="card-body pb-3">
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2 fs-2" aria-label={cat.category}>{categoryIcons[cat.category]}</span>
                      <h5 className="card-title text-cafe-green mb-0 fw-bold">{cat.category}</h5>
                    </div>
                    <div className="menu-divider mb-3" style={{height: '3px', background: 'linear-gradient(90deg, #b6c7a7 0%, #e6e2d3 100%)', borderRadius: '2px'}}></div>
                    <ul className="list-unstyled mb-0">
                      {cat.items.map((item) => (
                        <li key={item.name} className="d-flex justify-content-between align-items-center py-2 menu-list-item">
                          <span className="menu-item-name">{item.name}</span>
                          <span className="fw-bold text-cafe-light-green menu-item-price">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu; 