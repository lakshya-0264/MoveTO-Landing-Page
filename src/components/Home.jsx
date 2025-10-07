import React, { useState } from 'react';
import { Truck, Globe, CheckCircle, Medal, Shield, MessageCircle, Lightbulb, Plane, Home, Briefcase, Car, ChevronDown, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';


import Header from './Header';
import Footer from './Footer';
import ContactSection from './ContactSection';
import WhyChooseUs from './WhyChooseUs';
import Service from './Service';
import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import QuoteForm from './QuoteForm';

export default function MovetoWebsite() {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Quote Form */}
      <QuoteForm />

      {/* About Section */}
      <AboutSection/>

      {/* Why Choose us? Section */}
      <WhyChooseUs/>

      {/* Professional Service Section */}
      <Service/>

      {/* Contact Form Section */}
      <ContactSection/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}