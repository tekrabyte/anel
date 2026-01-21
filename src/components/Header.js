import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top border */}
      <div className="h-1 bg-gradient-to-r from-teal-600 to-teal-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/logo-anl.png" 
              alt="PT ARTIK NOVA LINDO" 
              className="h-12 sm:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about-us') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/solutions" 
              className={`text-sm font-medium transition-colors ${
                isActive('/solutions') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/partners" 
              className={`text-sm font-medium transition-colors ${
                isActive('/partners') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Partners
            </Link>
            <Link 
              to="/contact-us" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact-us') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Side - Technical Support, Phone & Login */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="mailto:technical@anl.co.id" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center"
            >
              Technical Support <span className="ml-1">→</span>
            </a>
            <a 
              href="tel:+6281177659000" 
              className="text-sm font-semibold text-gray-900"
            >
              +62 811 7765 900
            </a>
            <a 
              href="https://anl.co.id/webmail" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            data-testid="mobile-menu-button"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about-us" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive('/about-us') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/solutions" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive('/solutions') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Solutions
              </Link>
              <Link 
                to="/partners" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive('/partners') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Partners
              </Link>
              <Link 
                to="/contact-us" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive('/contact-us') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Contact Us
              </Link>
              <div className="pt-3 border-t border-gray-200 space-y-3">
                <a 
                  href="mailto:technical@anl.co.id" 
                  className="block text-sm text-gray-700 py-2"
                >
                  Technical Support →
                </a>
                <a 
                  href="tel:+6281177659000" 
                  className="block text-sm font-semibold text-gray-900 py-2"
                >
                  +62 811 7765 900
                </a>
                <a 
                  href="https://anl.co.id/webmail" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-600 transition-colors"
                >
                  Login
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Bottom border */}
      <div className="h-px bg-gray-200"></div>
    </header>
  );
};

export default Header;