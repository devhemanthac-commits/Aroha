import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Explore() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Derive categories from products
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
            <header className="mb-12 text-center animate-fade-in">
                <h1 className="text-4xl font-serif font-bold text-charcoal mb-4">Explore Our Collection</h1>
                <p className="text-charcoal/60">Discover the rich heritage of Mysuru through our authentic local products.</p>
            </header>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-charcoal text-white'
                                    : 'bg-beige-200 text-charcoal/80 hover:bg-beige-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="w-full md:w-auto min-w-[300px]">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded border border-beige-300 bg-white focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all text-charcoal"
                    />
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="animate-fade-in"
                            style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </section>
            ) : (
                <div className="text-center py-20 animate-fade-in">
                    <p className="text-charcoal/50 text-xl">No products matched your search.</p>
                    <button
                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                        className="mt-4 text-sage-600 hover:text-charcoal transition-colors underline"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </main>
    );
}
