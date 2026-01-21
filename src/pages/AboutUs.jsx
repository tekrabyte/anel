import React, { useState } from 'react';
import { Lightbox } from '../components/Lightbox';

const AboutUs = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryImages = [
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/720914a7-b941-45ea-b6ce-7da2fc826fb3-768x576.jpg',
      alt: 'Gallery Image 1'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/e834dd75-1106-4e33-92d1-076ac468d87d-768x576.jpg',
      alt: 'Gallery Image 2'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/b3334eef-f3aa-4632-8299-6f89c40cdd54-768x576.jpg',
      alt: 'Gallery Image 3'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/img-2-768x576.jpeg',
      alt: 'Gallery Image 4'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/ea5082b3-f8e1-4ae9-ad69-8b68c71a1907-768x576.jpg',
      alt: 'Gallery Image 5'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/IMG-20241014-WA0028-768x1024.jpg',
      alt: 'Gallery Image 6'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/1729057792780-768x813.jpg',
      alt: 'Gallery Image 7'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/82803349-5b79-41bd-8e1e-54a6b0ac3803.jpg',
      alt: 'Gallery Image 8'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/img-1-768x576.jpeg',
      alt: 'Gallery Image 9'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/img-4-768x576.jpg',
      alt: 'Gallery Image 10'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/img-5-768x576.jpg',
      alt: 'Gallery Image 11'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/img-3-768x576.jpg',
      alt: 'Gallery Image 12'
    },
    {
      src: 'https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/e674a990-ee75-4894-9771-dd9e61be7622-768x576.jpg',
      alt: 'Gallery Image 13'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#2CB6E9] via-[#0088C1] to-[#2CB6E9]">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 h-full relative z-10 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Artik Nova Lindo</h2>
            <p className="text-sm text-gray-500 mb-8">Our staff has a variety of industry-recognized</p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                ARTIK NOVA LINDO is a General Contractor stands out from the competition. The strong architectural background of our personnel sets us apart, and our 10 years of experience with new construction, renovation, expansion and tenant covers in industrial and commercial fields.
              </p>
              
              <p>
                ARTIK NOVA LINDO, our extensive experience enables us to provide the best quality while appreciating cost and time considerations. To ensure high quality, we have developed strong business relationships with our subcontractors, who are committed to delivering better results. In addition to our architectural specialties, we have developed expertise as consultants in the coordination of technical systems, such as H.V.A.C., Electrical, Plumbing, and Sprinkler systems. Our experience working in this field allows us to coordinate the various specialists involved effectively at all stages of project preparation and construction.
              </p>
              
              <p>
                The quality of ARTIK NOVA LINDO architecture is a priority. It's no secret that the construction site always has a surprise. Often, important decisions must be made quickly, both during the preparatory phase and the construction phase of a project. Most often the quality of project architecture is directly affected by this decision.
              </p>
              
              <p>
                That is why we consider it important that our team at ARTIK NOVA LINDO be particularly qualified to evaluate the impact of decisions on architectural intentions at the core of your project. We analyze rapidly and effectively the pros and cons of each situation. Then, working with all the professionals involved, we take the most appropriate action to minimize delays and maximize quality.
              </p>
              
              <p>
                Because our staff are specialized in architecture, we are very qualified to help you realize your current concept and develop your future projects. We believe that you will be impressed by our professionalism and reasonable service cost, and we will be very glad to have the opportunity to cooperate with you in the near future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Management</h2>
          <div className="w-24 h-1 bg-[#2CB6E9] mb-12"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="">
                  <img
                    src="https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/1729056409881.jpg"
                    alt="Nanang Yulianto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nanang Yulianto</h3>
                  <p className="text-[#2CB6E9] font-semibold mb-6 text-lg">Director</p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="font-semibold text-lg">Main responsibilities are:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Responsible for the control, monitoring and administration of the company's Management system.</li>
                      <li>To ensure compliance to the company's policy members of their various Department.</li>
                      <li>To ensure they are kept informed on incidents impacting on the management and Steps being taken to minimize or eliminate hazards to the company.</li>
                      <li>To set personal example in demonstrating concern for the company matters.</li>
                      <li>To establish the company's management policy and to promote its Implementation.</li>
                      <li>To ensure that adequate resource are made available within the company to meet Current and future environmental management and training needs.</li>
                      <li>To cascade to all employees under their control company management Information from monthly reports, safety bulletins and seminars.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Our History</h2>
                <div className="w-24 h-1 bg-[#2CB6E9]"></div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Artik Nova Lindo (ANL) is fully committed to ensure that all projects are completed on time with the operation carried out in smooth and cost effective manner.
                  </p>
                  
                  <p>
                    ANL manual and provision and procedures outlined there in describe the organizational structure and how the policy is implemented. An ultimate responsibility for the company management is rested with the Managing Director, who is responsible for the effective implementation of this policy:
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/ea5082b3-f8e1-4ae9-ad69-8b68c71a1907-1024x768.jpg"
                  alt="Company History"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Photos Gallery</h2>
          <div className="w-24 h-1 bg-[#2CB6E9] mb-12"></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUs;