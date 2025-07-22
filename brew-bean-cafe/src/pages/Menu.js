import React from 'react';
import { Helmet } from 'react-helmet';
import "../App.css";

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
      <section className="py-5 bg-cafe-dark-green">
        <div className="container">
          <h1 className="mb-4 text-cafe-beige">Our Menu</h1>
          <div className="row">
            {menuData.map((cat) => (
              <div className="col-md-4 mb-4" key={cat.category}>
                <div className="card h-100 shadow-sm bg-cafe-beige">
                  <div className="card-body">
                    <h5 className="card-title text-cafe-green">{cat.category}</h5>
                    <ul className="list-unstyled mb-0">
                      {cat.items.map((item) => (
                        <li key={item.name} className="d-flex justify-content-between py-1 menu-list-item">
                          <span>{item.name}</span>
                          <span className="fw-bold text-cafe-light-green">{item.price}</span>
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