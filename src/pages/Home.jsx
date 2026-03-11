import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
    // Let's show only the first 3 products as a preview
    const featuredProducts = products.slice(0, 3);

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-6">
            {/* Hero / Header Section */}
            <header className="py-12 md:py-20 text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal tracking-tight animate-slide-in">
                    Curated Essentials
                </h1>
                <p className="text-charcoal/60 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Elevate your space with our handpicked collection of authentic Mysuru arts and craftsmanship.
                </p>
            </header>

            {/* Product Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
                {featuredProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </section>

            <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a href="/explore" className="inline-block bg-charcoal text-white px-8 py-3 rounded hover:bg-sage-600 transition-colors">
                    View Entire Collection
                </a>
            </div>
        </main>
    );
}
