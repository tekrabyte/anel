import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

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
            <img
              src="/logo-anl.png"
              alt="PT ARTIK NOVA LINDO"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="flex items-center" style={{ display: 'none' }}>
              <div className="flex flex-col items-center justify-center w-12 h-12 bg-gradient-to-br from-[#2CB6E9] to-[#0088C1] rounded-lg">
                <div className="w-8 h-1 bg-white mb-1 transform -rotate-45"></div>
                <div className="w-8 h-1 bg-white transform rotate-45"></div>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-900">PT ARTIK NOVA LINDO</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#2CB6E9] ${
                  isActive(item.path) ? 'text-[#2CB6E9]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-md">
              <span className="mr-2 font-medium">Technical Support</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-[#2CB6E9]" />
              <span className="font-semibold text-gray-900">+62 811 7765 900</span>
            </div>
            <button className="bg-[#2CB6E9] text-white px-6 py-2 rounded-md hover:bg-[#0088C1] transition-colors font-medium">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#2CB6E9] ${
                    isActive(item.path) ? 'text-[#2CB6E9]' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center text-sm text-gray-600 pt-4 border-t">
                <Phone className="w-4 h-4 mr-2 text-[#2CB6E9]" />
                <span>+62 811 7765 900</span>
              </div>
              <button className="bg-[#2CB6E9] text-white px-6 py-2 rounded-md hover:bg-[#0088C1] transition-colors w-full">
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