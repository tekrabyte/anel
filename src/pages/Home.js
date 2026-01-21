import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Refurbishment of existing buildings and structures',
      icon: '🏗️',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Demolition',
      icon: '🔨',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Civil Engineering projects',
      icon: '🏛️',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Reinforced concrete and steelwork',
      icon: '🏗️',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Office and commercial "fit outs"',
      icon: '🏢',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Waterproofing',
      icon: '💧',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Landscaping',
      icon: '🌳',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Building Maintenance',
      icon: '🔧',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Steel frame building',
      icon: '🏗️',
      link: 'mailto:info@artik.co.id'
    },
    {
      title: 'Design & Consultant',
      icon: '📐',
      link: 'mailto:info@artik.co.id'
    }
  ];

  const newsItems = [
    {
      title: 'DEWALT® designs and optimizes professional workhorse solutions – tools, accessories and service.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/dewalt.jpg',
      link: 'https://czone.tekrabyte.id/ANL/2023/03/20/dewalt-designs-and-optimizes-professional-workhorse-solutions-tools-accessories-and-service/'
    },
    {
      title: 'Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/avip.jpg',
      link: 'https://czone.tekrabyte.id/ANL/2023/03/20/maximizing-efficiency-with-proper-technology-implementation-coffee-success-story/'
    },
    {
      title: 'Concrete Repair: Sika provides a full range of solutions for different repair works and specific requirements.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/sika.jpg',
      link: 'https://czone.tekrabyte.id/ANL/2023/03/20/concrete-repair-sika-provides-a-full-range-of-solutions-for-different-repair-works-and-specific-requirements/'
    },
    {
      title: 'Interior support with preferential price.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2023/03/sd-1024x1024.jpg',
      link: 'https://czone.tekrabyte.id/ANL/2023/03/20/interior-support-with-preferential-price/'
    }
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Construction and Installation Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Take charge of your business continuity with innovative solutions.
            </p>
            <Link 
              to="/solutions" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
              data-testid="learn-more-btn"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              New build in residential, commercial and industrial development:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
                data-testid={`service-card-${index}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <a 
                  href={service.link} 
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn more 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Headlines Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News Headlines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((news, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                data-testid={`news-card-${index}`}
              >
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3">
                    {news.title}
                  </h3>
                  <a 
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn more 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recognized by the best</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
            </p>
          </div>

          <div className="text-center">
            <Link 
              to="/partners" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              data-testid="view-partners-btn"
            >
              View All Partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;