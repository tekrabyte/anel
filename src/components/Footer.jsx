import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Solutions */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">Solutions</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Together with our professional team, we work to provide excellence for our customers.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">INDOFURNISHING</h3>
              <h4 className="text-lg font-semibold text-gray-300">Indofurnishing Creations</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                At INDOFURNISHING we examine production stages even more stringent than industry standards, 
                and we will only offer approved elements to the market if they meet our quality and safety standards.
              </p>
            </div>
          </div>

          {/* Right Section - Logo & CTA */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center mb-4">
              <img
                src="/logo-anl.png"
                alt="PT ARTIK NOVA LINDO"
                className="h-16 w-auto brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="flex items-center" style={{ display: 'none' }}>
                <div className="text-2xl font-bold text-white">PT ARTIK NOVA LINDO</div>
              </div>
            </div>
            <Link
              to="/contact-us"
              className="bg-[#2CB6E9] text-white px-8 py-3 rounded-md hover:bg-[#0088C1] transition-colors font-semibold text-lg"
            >
              Consultation Schedule
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">
              Copyright © 2024 PT ARTIK NOVA LINDO
            </p>
            <div className="flex items-center space-x-2">
              <span>GENERAL SUPPLIER</span>
              <span>│</span>
              <span>CONTRACTOR</span>
              <span>│</span>
              <span>CONSTRUCTION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#2CB6E9] text-white p-3 rounded-full shadow-lg hover:bg-[#0088C1] transition-colors z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;