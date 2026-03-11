import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (product) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsOpen(true);
    };

    const removeFromCart = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = Math.max(0, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            }).filter((item) => item.quantity > 0)
        );
    };

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    const cartCount = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);
    const cartTotal = useMemo(() => items.reduce((acc, item) => acc + item.price * item.quantity, 0), [items]);

    // Prototype GST Calculation (18%)
    const gstRate = 0.18;
    const gstAmount = cartTotal * gstRate;
    const finalTotal = cartTotal + gstAmount;

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, isOpen, toggleCart, closeCart, cartCount, cartTotal, gstAmount, finalTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
