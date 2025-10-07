import React from 'react';
import DeliverySign from "../assets/DeliverySign.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-600 py-32 px-4">
       <div className="absolute inset-0 bg-black/30">
          <img 
            src={DeliverySign}
            alt="Moving team helping customers"
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Move Smarter<br />With MoveTO!
            </h1>
            <p className="text-white/90 text-base mb-8 leading-relaxed">
              Are you ready to revolutionize the way you move? <br/> 
              Whether you're relocating, managing logistics, or simply optimizing your workflow, MoveTO is here to make your journey smarter, faster, and more efficient.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase transition">
              Discover More
            </button>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
