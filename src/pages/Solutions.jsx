import React from 'react';
import { Mail } from 'lucide-react';
import { solutionsServices, engineeringServices, laborEquipment } from '../mockData';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Solutions</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions We Provide</h2>
            <p className="text-gray-600 italic">Even the biggest success Starts with a first step</p>
            <div className="mt-8 text-gray-700 leading-relaxed text-left">
              <p>
                ARTIK NOVA LINDO carry out all aspects of general building, renovation and refurbishment work. Our consistently high levels of repeat business and referrals are down to the fact that we are construction professionals who care about build quality and client satisfaction. Our objective is to consistently deliver a friendly and approachable service and professional project management. We have developed a strong network of architects.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Services */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Services</h3>
              <p className="text-gray-600 mb-4 text-sm">
                New build in residential, commercial and industrial development:
              </p>
              <ul className="space-y-3 mb-8">
                {solutionsServices.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-700 text-sm">
                    <span className="text-[#00A8E1] mr-2 flex-shrink-0">※</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#00A8E1] text-white px-6 py-3 rounded-md hover:bg-[#0088C1] transition-colors">
                Mail Now
              </button>
            </div>

            {/* Engineering */}
            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Engineering</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Engineers and quantity surveyors, planning supervisors and specialist sub contractors enabling us to deliver a seamless construction service. Our services include:
              </p>
              <ul className="space-y-3 mb-8">
                {engineeringServices.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-700 text-sm">
                    <span className="text-[#00A8E1] mr-2 flex-shrink-0">※</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#00A8E1] text-white px-6 py-3 rounded-md hover:bg-[#0088C1] transition-colors">
                Support Now
              </button>
            </div>

            {/* Labor & Equipment */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Labor & Equipment</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Therefore it is equipped with and/or can provide the following facilities and services:
              </p>
              <ul className="space-y-3 mb-8">
                {laborEquipment.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 text-sm">
                    <span className="text-[#00A8E1] mr-2 flex-shrink-0">※</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#00A8E1] text-white px-6 py-3 rounded-md hover:bg-[#0088C1] transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">Get in touch with us today for a consultation</p>
          <a
            href="mailto:info@artik.co.id"
            className="inline-flex items-center bg-white text-[#00A8E1] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
