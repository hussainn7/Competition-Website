import React, { createContext, useState } from 'react';
import PRODUCTS from '../products';

export const ShopCont = createContext(null);

const getDefautlCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContext = (props) => {
    const [cartItem, setCartItem] = useState(getDefautlCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItem[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const clearCart = () => {
        setCartItem(getDefautlCart());
    };

    const contextValue = {
        cartItem,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        clearCart, // Add clearCart to the context
    };

    console.log(cartItem);
    return <ShopCont.Provider value={contextValue}>{props.children}</ShopCont.Provider>;
};

export default ShopContext;
