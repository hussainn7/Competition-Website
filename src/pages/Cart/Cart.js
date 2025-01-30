import React, { useContext, useState } from 'react';
import PRODUCTS from '../products';
import { ShopCont } from '../context/shop-context';
import { CartItem } from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const DISHES = [
        {
          id: 1,
          name: "Falafel Bites",
          description: "A nutritious bowl of quinoa, chickpeas, avocado, and vegetables.",
          image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 6.99,
        },
        {
          id: 2,
          name: "Falafel Bowl",
          description: "Toasted sourdough topped with creamy avocado and chili flakes.",
          image: "https://unsplash.com/photos/FFqNATH27EM/download?w=1080",
          price: 12.99,
        },
        {
          id: 3,
          name: "Hummus Platter",
          description: "Seasonal vegetables grilled to perfection with a drizzle of olive oil.",
          image: "https://unsplash.com/photos/Lq1zv9qAJls/download?w=1080",
          price: 7.99,
        },
        {
          id: 4,
          name: "Muhammara",
          description: "Fresh rolls filled with cucumber, avocado, and carrots.",
          image: "https://unsplash.com/photos/6UxD0NzDywI/download?w=1080",
          price: 10.99,
        },
        {
          id: 5,
          name: "Halva Cheesecake",
          description: "Fluffy pancakes served with maple syrup and fresh berries.",
          image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 7.99,
        },
        {
          id: 6,
          name: "Loukoumades",
          description: "Fluffy pancakes served with maple syrup and fresh berries.",
          image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 9.99,
        },
        {
          id: 7,
          name: "Kunafa",
          description: "A hearty and flavorful soup made with red lentils and spices.",
          image: "https://unsplash.com/photos/KGw62KtHzxA/download?w=1080",
          price: 8.99,
        },
        {
          id: 8,
          name: "Sahlab",
          description: "Fluffy pancakes served with maple syrup and fresh berries.",
          image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 5.99,
        },
        {
          id: 9,
          name: "Fresh Pomegranate Juice",
          description: "Fluffy pancakes served with maple syrup and fresh berries.",
          image: "https://images.unsplash.com/photo-1675092789086-4bd2b93ffc69?q=80&w=3489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 4.99,
        },
      ];
    
    const { cartItem, getTotalCartAmount, clearCart } = useContext(ShopCont);
    const [showAnimation, setShowAnimation] = useState(false);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
            clearCart(); // Clear the cart after the animation ends
        }, 3000);
    };

    return (
        <div className="cart">
            <div>
                <h1 className='farm-title'>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItem[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />;
                    }
                    return null;
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/menu')}>Continue Shopping</button>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            ) : (
                <div className="empty-cart">
                <h1>Your Cart is Empty</h1>
                <p>Looks like you haven't added anything yet. Let's fix that!</p>
                <button 
                    className="shop-now-btn" 
                    onClick={() => navigate('/menu')}
                >
                    Shop Now
                </button>
                <div className="suggestions">
                    <h2 className='h2h2h2'>You Might Like</h2>
                    <div className="suggested-products">
                        {DISHES.slice(0, 4).map((dish) => (
                            <div key={dish.id} className="suggested-product">
                                <img src={dish.image} alt={dish.name} />
                                <p>{dish.name}</p>
                                <button 
                                    className="add-to-cart-btn" 
                                    onClick={() => navigate(`/menu`)}
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            )}

            {showAnimation && (
                <div className="payment-done">
                    <h2>Payment Done!</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
