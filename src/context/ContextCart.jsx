// ContextCart.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProduct = state.find(product => product.id === action.payload.id);
            if (existingProduct) {
                return state.map(product => 
                    product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':
            const productToRemove = state.find(product => product.id === action.payload.id);
            if (productToRemove.quantity === 1) {
                return state.filter(product => product.id !== action.payload.id);
            } else {
                return state.map(product => 
                    product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product
                );
            }
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
