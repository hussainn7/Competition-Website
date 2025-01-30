import React, { useContext } from "react";
import "./Menu.css";
import { ShopCont } from "./context/shop-context";

const Menu = () => {
  const DISHES = [
    {
      id: 1,
      name: "Falafel Bites",
      description: "Crispy chickpea fritters served with tahini dipping sauce.",
      image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 6.99,
    },
    {
      id: 2,
      name: "Falafel Bowl",
      description: "Healthy dinner bowls loaded with delicious falafel and Mediterranean flavor.",
      image: "https://images.unsplash.com/photo-1701688596783-231b3764ef67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 12.99,
    },
    {
      id: 3,
      name: "Hummus Platter",
      description: "Creamy chickpea dip drizzled with olive oil, served with warm pita bread and fresh veggies.",
      image: "https://images.unsplash.com/photo-1711469137073-f1790108f46d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 7.99,
    },
    {
      id: 4,
      name: "Halloumi Fries",
      description: "Crispy fried halloumi sticks served with a tangy yogurt dip.",
      image: "https://images.unsplash.com/photo-1689151132093-e76db98a9d89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 10.99,
    },
    {
      id: 5,
      name: "Halva Cheesecake",
      description: "A modern twist on traditional halva with a creamy cheesecake base.",
      image: "https://images.unsplash.com/photo-1591194782115-0335fc0e93a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbHZhJTIwY2hlZXNjYWtlfGVufDB8fDB8fHww",
      price: 7.99,
    },
    {
      id: 6,
      name: "Loukoumades",
      description: "Greek-style honey donuts sprinkled with cinnamon.",
      image: "https://plus.unsplash.com/premium_photo-1730973702380-e0f523710e01?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 9.99,
    },
    {
      id: 7,
      name: "Turkish Coffee",
      description: "Coffee brewed in traditional Turkish style.",
      image: "https://images.unsplash.com/photo-1506778020041-0ea35027d019?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVya2lzaCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 5.99,
    },
  ];

  const { addToCart, cartItem } = useContext(ShopCont);

  return (
    <div className="vegan-menu">
      <h1 className="vegan-menu-title">Our Menu</h1>
      <p className="vegan-menu-description">Discover our authentic Mediterranean dishes.</p>
      <div className="vegan-menu-container">
        {DISHES.map((dish) => {
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
