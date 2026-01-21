import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services, newsArticles, strategicPartners } from '../mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Construction and<br />Installation Services
              </h1>
              <p className="text-lg text-gray-600">
                Take charge of your business continuity with innovative solutions.
              </p>
              <Link
                to="/solutions"
                className="inline-block bg-[#00A8E1] text-white px-8 py-3 rounded-md hover:bg-[#0088C1] transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Construction Building"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">WHAT WE DO</p>
            <h2 className="text-4xl font-bold text-gray-900">Services</h2>
            <div className="w-24 h-1 bg-[#00A8E1] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              New build in residential, commercial and industrial development:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{service.title}</h3>
                <a
                  href={service.link}
                  className="text-[#00A8E1] hover:text-[#0088C1] inline-flex items-center text-sm font-medium transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="mailto:info@artik.co.id"
              className="inline-block bg-[#00A8E1] text-white px-8 py-3 rounded-md hover:bg-[#0088C1] transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">News Headlines</p>
            <h2 className="text-4xl font-bold text-gray-900">News Headlines</h2>
            <div className="w-24 h-1 bg-[#00A8E1] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-3">
                    {article.title}
                  </h3>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A8E1] hover:text-[#0088C1] inline-flex items-center text-sm font-medium transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Partners</p>
            <h2 className="text-4xl font-bold text-gray-900">Recognized by the best</h2>
            <div className="w-24 h-1 bg-[#00A8E1] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
            </p>
          </div>

          {/* Strategic Partners Carousel */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll">
              {[...strategicPartners, ...strategicPartners, ...strategicPartners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-48 h-32 mx-4 bg-white rounded-lg shadow-md flex items-center justify-center p-6"
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

          <div className="text-center mt-8">
            <Link
              to="/partners"
              className="inline-block bg-[#00A8E1] text-white px-8 py-3 rounded-md hover:bg-[#0088C1] transition-colors"
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
