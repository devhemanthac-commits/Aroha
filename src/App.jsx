import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-20 pb-10">
      <Navbar />
      <CartSidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="mt-20 py-8 text-center text-charcoal/40 text-sm border-t border-charcoal/5">
        <p className="mb-2">&copy; {new Date().getFullYear()} Aroha Shop. Designed for serenity.</p>
        <p>
          Contact us at: <a href="mailto:vvce25cseaiml0034@vvce.ac.in" className="text-sage-600 hover:text-charcoal transition-colors">vvce25cseaiml0034@vvce.ac.in</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
