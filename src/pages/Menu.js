import React, { useContext } from "react";
import "./Menu.css";
import { ShopCont } from "./context/shop-context";

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: "Vegan Buddha Bowl",
      description: "A nutritious bowl of quinoa, chickpeas, avocado, and vegetables.",
      image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 12.99,
    },
    {
      id: 2,
      name: "Avocado Toast",
      description: "Toasted sourdough topped with creamy avocado and chili flakes.",
      image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 8.99,
    },
    {
      id: 3,
      name: "Vegan Sushi Rolls",
      description: "Fresh rolls filled with cucumber, avocado, and carrots.",
      image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 14.99,
    },
    {
      id: 4,
      name: "Grilled Vegetable Platter",
      description: "Seasonal vegetables grilled to perfection with a drizzle of olive oil.",
      image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 10.99,
    },
    {
      id: 5,
      name: "Lentil Soup",
      description: "A hearty and flavorful soup made with red lentils and spices.",
      image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 7.99,
    },
    {
      id: 6,
      name: "Vegan Pancakes",
      description: "Fluffy pancakes served with maple syrup and fresh berries.",
      image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 9.99,
    },
  ];

  const { addToCart, cartItem } = useContext(ShopCont);

  return (
    <div className="vegan-menu">
      <h1 className="vegan-menu-title">Our Menu</h1>
      <p className="vegan-menu-description">Discover our authentic Mediterranean dishes.</p>
      <div className="vegan-menu-container">
        {dishes.map((dish) => {
          const cartItemAmount = cartItem[dish.id] || 0;
          return (
            <div className="vegan-menu-card" key={dish.id}>
              <img className="vegan-menu-img" src={dish.image} alt={dish.name} />
              <h2 className="vegan-menu-card-title">{dish.name}</h2>
              <p className="vegan-menu-card-description">{dish.description}</p>
              <p className="vegan-menu-price">${dish.price.toFixed(2)}</p>
              <button
                className="addToCartBttn"
                onClick={() => addToCart(dish.id)}
              >
                Add to Cart
                {cartItemAmount > 0 && <> ({cartItemAmount})</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
