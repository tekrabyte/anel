import React, { useEffect, useState } from 'react';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    {
      name: 'PT. Dehardware Sarana Furnindo',
      description: 'We specialized in furniture hardware & plywood. We carry varities of building hardware materials, all kinds of plywood and High Pressure Laminates (HPL). Product quality has always been our priority. We strive to exceed our customers\' expectations and delight them with our services.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/PT-Dehardware-Sarana-Furnindo-150x150.jpg'
    },
    {
      name: 'PT. Asean Milenium Motor',
      description: 'Your profitability depends on more than just outstanding paint products. Every part of the bodyshop needs to operate as efficiently as possible, to create an optimal flow of repairs through your workshop. Therefore, our services help you to improve every aspect of your business.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/PT-Asean-Milenium-Motor-150x150.jpg'
    },
    {
      name: 'PT. Finartindo Kriya Abadi',
      description: 'PT. Firnatindo Kriya Abadi is a leading plywood and hardware supplier in Bekasi',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/PT.-Finartindo-Kriya-Abadi-150x150.jpg'
    },
    {
      name: 'Deco Glass',
      description: 'Window decoration with glass film and custom window glass film. Glass film installs on windows to add privacy without blocking natural light.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/DECO-GLASS-150x150.jpg'
    },
    {
      name: 'PT. Kimson Harapan Tri Putra',
      description: 'PT. Kimson Harapan Tri Putra is a leading plywood and hardware supplier in the Batam.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/PT.Kimson-Harapan-Tri-Putra-150x150.jpg'
    },
    {
      name: 'PT. Fikatama Kriya Abadi',
      description: 'Distributor of plywood and furniture material in Batam',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/FIKATAMA.jpg'
    },
    {
      name: 'Blumotion',
      description: 'Creating furniture fittings for a better quality of life is one of our main goals. We produce up-opening systems, hinges, pulls, and pocket systems for furniture and provide complete assembly services and tools.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-19-at-09.52.25-150x150.jpeg'
    },
    {
      name: 'Sonoff',
      description: 'Explore the innovative world of SONOFF, learn and chose about various smart home products, define your smart home, your smart choice!',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-19-at-09.51.14-150x150.jpeg'
    },
    {
      name: 'Ezviz',
      description: 'EZVIZ, a global smart home security brand, creates a safe, convenient and smart life for users through its smart devices and cloud-based platform.',
      image: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/78b4847f-5544-49f2-953c-2c633aa41b66-150x150.jpg'
    }
  ];

  const strategicPartners = [
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/TDK-1.png',
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/MCDERMOTT-1.png',
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/VAN-OORD.png',
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/FINARTINDO-1.png',
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/EPPCONINDO.png',
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/DNV-1.png',
    'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/CITRA.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(strategicPartners.length / 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [strategicPartners.length]);

  return (
    <div className="min-h-screen" data-testid="partners-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Proud to be a Partner</h1>
            <p className="text-xl text-blue-100">
              We let our quality work and commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe technology should enable every organisation to be the best at what they do. ANL commitment to using technology as a solution makes ANL a partner for Clients satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                data-testid={`partner-card-${index}`}
              >
                <div className="p-6 text-center">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Strategic Partnerships
          </h2>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array(3).fill(strategicPartners).flat().map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-1/2 md:w-1/4 p-4"
                >
                  <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32">
                    <img 
                      src={logo} 
                      alt={`Partner ${index}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;