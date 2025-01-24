import React, { useContext, useState } from 'react';
import PRODUCTS from '../products';
import { ShopCont } from '../context/shop-context';
import { CartItem } from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
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
                <h1>Your Cart Items</h1>
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
                <h1>Your Cart is Empty</h1>
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
