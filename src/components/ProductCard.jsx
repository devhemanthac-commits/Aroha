import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="group relative flex flex-col gap-3">
            {/* Image Container with Hover Effect */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-beige-200">
                <img
                    src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                    loading="lazy"
                />

                {/* Quick Add Button showing on hover (or always on mobile) */}
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button
                        size="icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
                        className="rounded-full shadow-lg bg-white text-charcoal hover:bg-sage-500 hover:text-white"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <Plus className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-medium text-charcoal group-hover:text-sage-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-charcoal/60">{product.category}</p>
                </div>
                <span className="font-semibold text-charcoal font-serif">
                    ${product.price}
                </span>
            </div>
        </div>
    );
}
