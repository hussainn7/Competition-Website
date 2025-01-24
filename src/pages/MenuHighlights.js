import React from "react";
import { motion } from "framer-motion";
import "./MenuHighlights.css";

const menuItems = [
  {
    id: 1,
    name: "Ultra Vegie Bowl",
    description:
      "Crispy falafel served on fresh greens with tomatoes, cucumbers, and olives.",
    image: "/dish.png",
    price: "12.99",
  },
  {
    id: 2,
    name: "Veggie Bowl",
    description:
      "Crispy falafel served on fresh greens with tomatoes, cucumbers, and olives.",
    image: "/dish2.png",
    price: "10.99",
  },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="menu-title"
        >
          Menu Highlights
        </motion.h2>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="menu-card"
            >
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-image"
                />
              </div>
              <div className="menu-card-content">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-footer">
                  <span className="menu-item-price">${item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="menu-button"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
