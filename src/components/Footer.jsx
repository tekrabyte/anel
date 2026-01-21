import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 70 L50 30 L80 70 Z" fill="#00A8E1"/>
                <path d="M30 70 L50 45 L70 70 Z" fill="#0088C1"/>
              </svg>
              <div className="ml-2">
                <div className="text-xl font-bold">ANL</div>
                <div className="text-xs text-gray-400">ARTIK NOVA LINDO</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              PT ARTIK NOVA LINDO is a General Contractor specializing in construction and installation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-[#00A8E1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-sm text-gray-400 hover:text-[#00A8E1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-gray-400 hover:text-[#00A8E1] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-gray-400 hover:text-[#00A8E1] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm text-gray-400 hover:text-[#00A8E1] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">Construction Services</li>
              <li className="text-sm text-gray-400">Civil Engineering</li>
              <li className="text-sm text-gray-400">Building Maintenance</li>
              <li className="text-sm text-gray-400">Design & Consultant</li>
              <li className="text-sm text-gray-400">Waterproofing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Hang Jebat, Batu Besar Batam 29122 Kepulauan Riau</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+62 778 4804 900</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+62 811 7765 900</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@artik.co.id" className="hover:text-[#00A8E1] transition-colors">
                  info@artik.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 PT ARTIK NOVA LINDO. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-sm text-gray-400 hover:text-[#00A8E1] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
