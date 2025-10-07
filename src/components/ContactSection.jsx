import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {

    const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: 'I want to shift my home from ... to ...'
  });

      // Reset form -> We can also add toast notification and EmailJS here but it costs us charge, so i will integrate it later.
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-3 text-orange-500 text-xs font-semibold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-orange-500"></div>
                GET IN TOUCH
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Ready to Make Your Move?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact our team today for a free consultation and personalized moving quote. We're here to answer all your questions and make your relocation experience seamless and stress-free.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                    <p className="text-gray-600">Moving Street, Suite 45/2<br />Jaipur, Rajasthan</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">(+91) 6350490033<br />(+91) 6350490033</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@moveto.com<br />support@moveto.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat - Sun: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="Lakshya Singhal"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="lakshyasinghal2320@gmail.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    placeholder="(+91) 6350490033"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                  <select
                    required
                    value={contactForm.service}
                    onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a service</option>
                    <option value="international">International Moves</option>
                    <option value="domestic">Domestic Moves</option>
                    <option value="office">Office Moves</option>
                    <option value="vehicle">Vehicle Transfer</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows="4"
                    placeholder="Tell us about your moving needs..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactSection
