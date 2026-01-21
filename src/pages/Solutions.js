import React from 'react';

const Solutions = () => {
  return (
    <div className="min-h-screen" data-testid="solutions-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions We Provide</h1>
            <p className="text-xl text-blue-100">Even the biggest success Starts with a first step</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              ARTIK NOVA LINDO carry out all aspects of general building, renovation and refurbishment work. Our consistently high levels of repeat business and referrals are down to the fact that we are construction professionals who care about build quality and client satisfaction. Our objective is to consistently deliver a friendly and approachable service and professional project management. We have developed a strong network of architects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services Column */}
            <div className="bg-white rounded-lg shadow-lg p-8" data-testid="services-column">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
              <p className="text-gray-700 mb-4">
                New build in residential, commercial and industrial development:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Refurbishment of existing buildings and structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Demolition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Civil Engineering projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Reinforced concrete and steelwork</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Office and commercial "fit outs"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Waterproofing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Landscaping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Concrete Coring</span>
                </li>
              </ul>
              <a 
                href="mailto:info@anl.co.id" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Mail Now
              </a>
            </div>

            {/* Engineering Column */}
            <div className="bg-white rounded-lg shadow-lg p-8" data-testid="engineering-column">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Engineering</h2>
              <p className="text-gray-700 mb-4">
                Engineers and quantity surveyors, planning supervisors and specialist sub contractors enabling us to deliver a seamless construction service. Our services include:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Excavations and Trenching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Building Maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Mechanical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Carpentry, dry lining and plastering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Decoration and cladding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Steel frame building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Interior</span>
                </li>
              </ul>
              <a 
                href="mailto:technical@anl.co.id" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Support Now
              </a>
            </div>

            {/* Labor & Equipment Column */}
            <div className="bg-white rounded-lg shadow-lg p-8" data-testid="labor-equipment-column">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Labor & Equipment</h2>
              <p className="text-gray-700 mb-4">
                Therefore it is equipped with and/or can provide the following facilities and services:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Labor – operators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Riggers, welders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Electricians, Mechanics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Crane 30 T to 250 T cranes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Forklifts, 10 T to 100</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>T trailers, boom lift</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Generators, water pumps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">※</span>
                  <span>Coring equipment</span>
                </li>
              </ul>
              <a 
                href="mailto:info@anl.co.id" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;