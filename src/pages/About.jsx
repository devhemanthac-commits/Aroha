import React from 'react';

export default function About() {
    return (
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
            <div className="space-y-12 animate-fade-in">
                <section className="text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">About Us</h1>
                    <p className="text-lg text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                        Aroha is more than just a marketplace; it's a bridge between the vibrant cultural heritage of Mysuru and the modern home.
                        We curate authentic, handcrafted items, supporting local artisans while providing you with high-quality essentials.
                    </p>
                </section>

                <section className="bg-white p-8 md:p-12 rounded shadow-sm border border-beige-200 animate-slide-in">
                    <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">Vidyavardhaka College of Engineering (VVCE)</h2>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                        Vidyavardhaka College of Engineering is one of the prestigious engineering colleges in Mysuru, Karnataka. Established in 1997, VVCE has grown to become a leading institution recognized for its robust academic framework, innovative programs, and deep commitment to student empowerment.
                    </p>
                    <p className="text-charcoal/70 leading-relaxed">
                        Students and faculty at VVCE strive to foster an ecosystem where technology meets societal needs, paving the way for digital initiatives like Aroha that celebrate and preserve local culture.
                    </p>
                </section>

                <section className="bg-sage-50 p-8 md:p-12 rounded shadow-sm border border-sage-200 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">The Inunity Initiative</h2>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                        "Inunity" stands as a symbol of collaboration and collective growth. Although primarily referring to a youth-focused initiative promoting community and capacity building, in the context of this project, it represents the unified effort of young minds at VVCE.
                    </p>
                    <p className="text-charcoal/70 leading-relaxed">
                        The Inunity spirit drives our mission to cohesively integrate traditional craftsmanship with cutting-edge web development, ensuring that the legacy of Mysuru artisans endures in the digital age.
                    </p>
                </section>
            </div>
        </main>
    );
}
