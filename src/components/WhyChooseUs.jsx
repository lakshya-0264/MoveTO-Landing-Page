import React from 'react';
import { Medal, Shield, MessageCircle, Lightbulb } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24 px-4">
    <div className="max-w-7xl mx-auto">
        {/* Header Section Split into Two Columns */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
        {/* Left Side - Heading */}
        <div>
            <div className="flex items-center gap-3 text-orange-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            WHY CHOOSE US
            </div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Client Satisfaction Is Our<br />Primary Focus
            </h2>
        </div>

        {/* Right Side - Description */}
        <div>
            <p className="text-gray-600 leading-relaxed">
            We understand that moving is more than just transporting belongings. It's about trust,
            reliability, and peace of mind. Our dedicated team works tirelessly to ensure every relocation
            is smooth, stress-free, and exceeds your expectations from start to finish.
            </p>
        </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <Medal className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quality &<br />Satisfaction</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
            Top-rated service with 98% customer satisfaction rate and commitment to excellence in every move.
            </p>
        </div>

        <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Security &<br />Reliability</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
            Fully insured and licensed services with advanced tracking systems for complete peace of mind.
            </p>
        </div>

        <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Flexibility &<br />Advice</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
            Customized moving plans with expert consultation to match your schedule and budget perfectly.
            </p>
        </div>

        <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Cutting-edge<br />Solution</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
            Modern equipment and innovative techniques ensuring efficient, eco-friendly moving solutions.
            </p>
        </div>
        </div>
    </div>
    </section>
  )
}

export default WhyChooseUs
