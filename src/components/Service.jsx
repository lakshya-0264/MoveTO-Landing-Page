import React from 'react';
import { Plane, Home, Briefcase, Car } from 'lucide-react';
import DeliveryGoods from "../assets/DeliveryGoods.png";

const Service = () => {
  return (
    <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute top-8 left-8 bg-white rounded-xl p-5 shadow-xl z-10">
                <div className="text-4xl font-bold text-orange-500 mb-1">4.8</div>
                <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                <div className="text-xs text-gray-600 leading-tight">From Google<br />Business</div>
              </div>
            <img
                src={DeliveryGoods}
                alt="Service"
                className="w-full h-108 object-cover rounded-xl shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            </div>

            {/* Text Side */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Professional Service Ready For Your Moving Plan
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Our experienced team provides comprehensive moving solutions tailored to your needs. From packing to transportation, we handle every detail with care and professionalism to ensure a smooth relocation experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">International Moves</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Global relocation services with customs clearance and secure international shipping solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Domestic Moves</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Reliable local and long-distance moving services across the country with full insurance coverage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Office Moves</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Minimize downtime with our efficient commercial relocation and office furniture setup services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Vehicle Transfer</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Safe and secure vehicle transportation with door-to-door delivery and real-time tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Service
