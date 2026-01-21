import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen" data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Artik Nova Lindo</h2>
            <p className="text-xl text-gray-600">Our staff has a variety of industry-recognized</p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              ARTIK NOVA LINDO is a General Contractor stands out from the competition. The strong architectural background of our personnel sets us apart, and our 10 years of experience with new construction, renovation, expansion and tenant covers in industrial and commercial fields.
            </p>

            <p className="text-gray-700 mb-6">
              ARTIK NOVA LINDO, our extensive experience enables us to provide the best quality while appreciating cost and time considerations. To ensure high quality, we have developed strong business relationships with our subcontractors, who are committed to delivering better results. In addition to our architectural specialties, we have developed expertise as consultants in the coordination of technical systems, such as H.V.A.C., Electrical, Plumbing, and Sprinkler systems. Our experience working in this field allows us to coordinate the various specialists involved effectively at all stages of project preparation and construction.
            </p>

            <p className="text-gray-700 mb-6">
              The quality of ARTIK NOVA LINDO architecture is a priority. It's no secret that the construction site always has a surprise. Often, important decisions must be made quickly, both during the preparatory phase and the construction phase of a project. Most often the quality of project architecture is directly affected by this decision.
            </p>

            <p className="text-gray-700 mb-6">
              That is why we consider it important that our team at ARTIK NOVA LINDO be particularly qualified to evaluate the impact of decisions on architectural intentions at the core of your project. We analyze rapidly and effectively the pros and cons of each situation. Then, working with all the professionals involved, we take the most appropriate action to minimize delays and maximize quality.
            </p>

            <p className="text-gray-700">
              Because our staff are specialized in architecture, we are very qualified to help you realize your current concept and develop your future projects. We believe that you will be impressed by our professionalism and reasonable service cost, and we will be very glad to have the opportunity to cooperate with you in the near future.
            </p>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Management</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/10/1729056409881.jpg" 
                  alt="Nanang Yulianto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nanang Yulianto</h3>
                <p className="text-blue-600 font-semibold mb-4">Director</p>
                
                <p className="text-gray-700 font-semibold mb-4">Main responsibilities are:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>– Responsible for the control, monitoring and administration of the company's Management system.</li>
                  <li>– To ensure compliance to the company's policy members of their various Department.</li>
                  <li>– To ensure they are kept informed on incidents impacting on the management and Steps being taken to minimize or eliminate hazards to the company.</li>
                  <li>– To set personal example in demonstrating concern for the company matters.</li>
                  <li>– To establish the company's management policy and to promote its Implementation.</li>
                  <li>– To ensure that adequate resource are made available within the company to meet Current and future environmental management and training needs.</li>
                  <li>– To cascade to all employees under their control company management Information from monthly reports, safety bulletins and seminars.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our History</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Artik Nova Lindo (ANL) is fully committed to ensure that all projects are completed on time with the operation carried out in smooth and cost effective manner.
            </p>
            
            <p className="text-gray-700 mb-8">
              ANL manual and provision and procedures outlined there in describe the organizational structure and how the policy is implemented. An ultimate responsibility for the company management is rested with the Managing Director, who is responsible for the effective implementation of this policy:
            </p>

            <img 
              src="https://czone.tekrabyte.id/ANL/wp-content/uploads/2024/09/ea5082b3-f8e1-4ae9-ad69-8b68c71a1907-1024x768.jpg" 
              alt="Company History"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Photos Gallery</h2>
          <p className="text-center text-gray-600">Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;