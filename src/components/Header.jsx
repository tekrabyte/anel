import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 70 L50 30 L80 70 Z" fill="#00A8E1"/>
                <path d="M30 70 L50 45 L70 70 Z" fill="#0088C1"/>
              </svg>
              <div className="ml-2">
                <div className="text-2xl font-bold text-gray-900">ANL</div>
                <div className="text-xs text-gray-600">ARTIK NOVA LINDO</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#00A8E1] ${
                  isActive(item.path) ? 'text-[#00A8E1]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">Technical Support →</span>
              <Phone className="w-4 h-4 mr-1" />
              <span className="font-semibold">+62 811 7765 900</span>
            </div>
            <button className="bg-[#00A8E1] text-white px-6 py-2 rounded-md hover:bg-[#0088C1] transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#00A8E1] ${
                    isActive(item.path) ? 'text-[#00A8E1]' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center text-sm text-gray-600 pt-4 border-t">
                <Phone className="w-4 h-4 mr-2" />
                <span>+62 811 7765 900</span>
              </div>
              <button className="bg-[#00A8E1] text-white px-6 py-2 rounded-md hover:bg-[#0088C1] transition-colors w-full">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
