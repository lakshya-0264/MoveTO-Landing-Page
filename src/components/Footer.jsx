import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

import logo from "../assets/logoRem.png";

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src={logo}
                  alt="Moveto Logo" 
                  className="w-9 h-9 object-contain rounded-lg"
                />
                <span className="text-2xl font-bold text-white">MoveTO</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted moving partner for over 17 years. We deliver excellence in every move, ensuring your belongings reach their destination safely and on time.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-orange-500 transition">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Our Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Moving Tips</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Residential Moving</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Commercial Moving</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">International Moving</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Packing Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Storage Solutions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">Vehicle Transport</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>123 Moving Street, Suite 100<br />Jaipur, Rajasthan</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <a href="tel:+15551234567" className="hover:text-orange-500 transition">(+91) 6350490033</a>
                    <br />
                    <a href="tel:+15559876543" className="hover:text-orange-500 transition">(+91) 6350490033</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <a href="mailto:info@moveto.com" className="hover:text-orange-500 transition">info@moveto.com</a>
                    <br />
                    <a href="mailto:support@moveto.com" className="hover:text-orange-500 transition">support@moveto.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Lakshya Singhal. All rights reserved. Designed with excellence.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
                <a href="#" className="hover:text-orange-500 transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
