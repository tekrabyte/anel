import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formElement = e.target;
    const formDataToSend = new FormData(formElement);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        window.location.href = 'https://anl.co.id/thankspage.html';
      } else {
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">We're Here To Help</h1>
            <p className="text-xl text-blue-100">
              Contact us immediately and get our best service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                PT ARTIK NOVA LINDO is always open for communication on whatever questions you may have. So in case you do have questions (as we assume) just go ahead and complete the form below to let us know.
              </p>

              <form onSubmit={handleSubmit} id="form1" data-testid="contact-form">
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="88f86e36-57b7-4440-8ab9-5dd6146f7d10"
                />
                <input 
                  type="hidden" 
                  name="redirect" 
                  value="https://anl.co.id/thankspage.html"
                />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      data-testid="input-fullname"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      data-testid="input-email"
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
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      data-testid="input-title"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      data-testid="input-message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                    data-testid="submit-button"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm">
                      Failed to submit form. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Workshop Call */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Workshop a Call</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex">
                    <span className="font-semibold w-32">Phone:</span>
                    <a href="tel:+6277848049000" className="text-blue-600 hover:text-blue-700">
                      +62 778 4804 900
                    </a>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">Technical:</span>
                    <a href="tel:+6281177659000" className="text-blue-600 hover:text-blue-700">
                      +62 811 7765 900
                    </a>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">Batam:</span>
                    <span>Jl. Hang Jebat, Batu Besar Batam 29122 Kepulauan Riau.</span>
                  </div>
                </div>
              </div>

              {/* Batam Offices */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Batam Offices</h3>
                <p className="text-gray-700 mb-4">
                  Jl. Tj. Buntung 2 Blk. A5 No.18-19,<br />
                  Kec. Bengkong, Kota Batam, Kepulauan Riau 29432
                </p>
                <a 
                  href="https://maps.app.goo.gl/uhcUuGVCYtze1M8c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Maps
                </a>
              </div>

              {/* Alternative Contact Way */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Alternative Contact Way</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex">
                    <span className="font-semibold w-40">Info:</span>
                    <a href="mailto:rfq@anl.co.id" className="text-blue-600 hover:text-blue-700">
                      rfq@anl.co.id
                    </a>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-40">Email:</span>
                    <a href="mailto:nyulianto@anl.co.id" className="text-blue-600 hover:text-blue-700">
                      email@anl.co.id
                    </a>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-40">Technical Support:</span>
                    <a href="mailto:technical@anl.co.id" className="text-blue-600 hover:text-blue-700">
                      technical@anl.co.id
                    </a>
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
