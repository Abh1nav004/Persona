// client/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900/70 backdrop-blur-lg py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Brain className="w-8 h-8 text-pink-500 mr-2" />
          <span className="text-xl font-bold text-white">PERSONA</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h14"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/70 backdrop-blur-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>About</Link>
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Pricing</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;