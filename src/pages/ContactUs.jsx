import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Mock submission - in real app, this would send to backend
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      title: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We're Here To Help</h2>
            <p className="text-gray-600">Contact us immediately and get our best service</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <p className="text-gray-600 mb-6 text-sm">
                PT ARTIK NOVA LINDO is always open for communication on whatever questions you may have. So in case you do have questions (as we assume) just go ahead and complete the form below to let us know.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A8E1] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A8E1] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A8E1] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A8E1] focus:border-transparent outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00A8E1] text-white px-6 py-3 rounded-md hover:bg-[#0088C1] transition-colors flex items-center justify-center font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Workshop Call */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Workshop a Call</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Phone:</p>
                      <p className="font-semibold text-gray-900">+62 778 4804 900</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Technical:</p>
                      <p className="font-semibold text-gray-900">+62 811 7765 900</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Batam:</p>
                      <p className="font-semibold text-gray-900">
                        Jl. Hang Jebat, Batu Besar Batam 29122 Kepulauan Riau.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Batam Offices */}
              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Batam Offices</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Jl. Tj. Buntung 2 Blk. A5 No.18-19,<br />
                        Kec. Bengkong, Kota Batam, Kepulauan Riau 29432
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/uhcUuGVCYtze1M8c8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00A8E1] text-white px-6 py-2 rounded-md hover:bg-[#0088C1] transition-colors text-sm font-semibold"
                  >
                    View Maps
                  </a>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Alternative Contact Way</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Info:</p>
                      <a href="mailto:rfq@anl.co.id" className="font-semibold text-[#00A8E1] hover:underline">
                        rfq@anl.co.id
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Email:</p>
                      <a href="mailto:email@anl.co.id" className="font-semibold text-[#00A8E1] hover:underline">
                        email@anl.co.id
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#00A8E1] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Technical Support:</p>
                      <a href="mailto:technical@anl.co.id" className="font-semibold text-[#00A8E1] hover:underline">
                        technical@anl.co.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
