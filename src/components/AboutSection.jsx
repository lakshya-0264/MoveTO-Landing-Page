import React from 'react';
import DeliveryService from "../assets/DeliveryService.png";
import { Globe, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-500 rounded-full flex flex-col items-center justify-center text-white shadow-xl z-10">
                <div className="text-4xl font-bold">17+</div>
                <div className="text-xs text-center leading-tight">Years of<br/>Experience</div>
              </div>
              <img
                src={DeliveryService}
                alt="About Us"
                className="w-full h-96 object-cover rounded-xl shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Text Side */}
            <div>
              <div className="flex items-center gap-3 text-orange-500 text-xs font-semibold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-orange-500"></div>
                WHO WE ARE
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                We Are Leader In Moving Company
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 17 years of excellence in the moving industry, we've successfully helped thousands of families and businesses relocate with confidence. Our commitment to quality service and customer satisfaction sets us apart as the leading choice for all your moving needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Broad Reach</h3>
                    <p className="text-sm text-gray-500">Nationwide coverage with international moving capabilities to serve you anywhere.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Fast, Neat and Safe</h3>
                    <p className="text-sm text-gray-500">Professional packing and secure transportation ensuring your belongings arrive intact.</p>
                  </div>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold uppercase text-xs transition">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
