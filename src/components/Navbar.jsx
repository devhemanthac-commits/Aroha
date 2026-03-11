import React, { useEffect, useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';

export default function Navbar() {
    const { toggleCart, cartCount } = useCart();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-beige-100/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
                }`}
        >
            <div className="flex items-center gap-4">
                {/* Mobile Menu Trigger (Visual only for now) */}
                <button className="md:hidden text-charcoal hover:text-sage-600">
                    <Menu className="w-6 h-6" />
                </button>

                <Link to="/" className="text-2xl font-serif font-bold text-charcoal tracking-tight">
                    Aroha<span className="text-sage-500">.</span>
                </Link>
            </div>

            <div className="flex items-center gap-6">
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal/80">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-sage-600 transition-colors" : "hover:text-sage-600 transition-colors"}>Home</NavLink></li>
                    <li><NavLink to="/explore" className={({ isActive }) => isActive ? "text-sage-600 transition-colors" : "hover:text-sage-600 transition-colors"}>Explore</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-sage-600 transition-colors" : "hover:text-sage-600 transition-colors"}>About</NavLink></li>
                </ul>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleCart}
                    className="relative text-charcoal hover:bg-beige-200 rounded-full"
                    aria-label="Open Cart"
                >
                    <ShoppingBag className="w-5 h-5" />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-sage-500 text-white text-[10px] font-bold flex items-center justify-center animate-fade-in">
                            {cartCount}
                        </span>
                    )}
                </Button>
            </div>
        </nav>
    );
}
