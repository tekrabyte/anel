import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { partners, strategicPartners } from '../mockData';

const Partners = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Partners</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proud to be a Partner</h2>
            <p className="text-gray-600 mb-4">We let our quality work and commitment to customer satisfaction.</p>
            <p className="text-gray-700 leading-relaxed">
              We believe technology should enable every organisation to be the best at what they do. ANL commitment to using technology as a solution makes ANL a partner for Clients satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-full p-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{partner.name}</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Strategic Partnerships</h2>
          
          <div className="overflow-hidden relative">
            <div
              ref={scrollRef}
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {[...strategicPartners, ...strategicPartners, ...strategicPartners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="inline-flex flex-shrink-0 w-64 h-40 mx-4 bg-white rounded-lg shadow-md items-center justify-center p-8 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-lg mb-8 opacity-90">Join our network of trusted partners and grow together</p>
          <Link
            to="/contact-us"
            className="inline-block bg-white text-[#00A8E1] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;
