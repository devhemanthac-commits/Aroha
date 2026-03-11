import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';

export default function CartSidebar() {
    const { isOpen, closeCart, items, removeFromCart, updateQuantity, cartTotal, gstAmount, finalTotal } = useCart();
    const sidebarRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeCart();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, closeCart]);

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* Drawer */}
            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-beige-100 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-beige-300">
                        <h2 className="text-2xl font-serif font-bold text-charcoal">Your Cart</h2>
                        <button onClick={closeCart} className="p-2 text-charcoal/60 hover:text-charcoal transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                <p className="text-charcoal/50 text-lg">Your cart is empty.</p>
                                <Button variant="outline" onClick={closeCart}>
                                    Continue Shopping
                                </Button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md bg-beige-200">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="font-medium text-charcoal">{item.name}</h3>
                                                <p className="text-sm text-charcoal/60">{item.category}</p>
                                            </div>
                                            <p className="font-semibold text-charcoal">${item.price * item.quantity}</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 border border-beige-300 rounded-full px-2 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 hover:text-sage-600 disabled:opacity-30"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 hover:text-sage-600"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-charcoal/40 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t border-beige-300 p-6 space-y-4 bg-beige-100">
                            <div className="flex justify-between items-center text-base">
                                <span className="text-charcoal/80">Subtotal</span>
                                <span className="font-medium">${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-charcoal/60">
                                <span>GST (18%)</span>
                                <span>${gstAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-medium pt-2 border-t border-beige-300 border-dashed">
                                <span className="text-charcoal">Total Bill</span>
                                <span className="font-serif font-bold">${finalTotal.toFixed(2)}</span>
                            </div>
                            <Button className="w-full h-14 text-lg group bg-charcoal text-white hover:bg-sage-600 mt-2">
                                Checkout
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
