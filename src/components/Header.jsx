import React, { useState } from 'react';
import { ChevronDown, Facebook, Twitter, Instagram, Youtube, Menu, X } from 'lucide-react';
import logo from "../assets/logoRem.png";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Moveto Logo"
              className="w-9 h-9 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-800 cursor-pointer">MoveTO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#home" className="text-gray-600 hover:text-orange-500 transition text-md font-medium">Home</a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-600 hover:text-orange-500 transition text-md font-medium flex items-center gap-1"
              >
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                  <a href="#residential" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Residential Moving</a>
                  <a href="#commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Commercial Moving</a>
                  <a href="#international" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">International Moving</a>
                  <a href="#packing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Packing Services</a>
                  <a href="#storage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Storage Solutions</a>
                </div>
              )}
            </div>

            {/* Moving Planner Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('planner')}
                className="text-gray-600 hover:text-orange-500 transition text-md font-medium flex items-center gap-1"
              >
                Moving Planner <ChevronDown className="w-3 h-3" />
              </button>
              {openDropdown === 'planner' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                  <a href="#checklist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Moving Checklist</a>
                  <a href="#calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Cost Calculator</a>
                  <a href="#tips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Moving Tips & Guides</a>
                </div>
              )}
            </div>

            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition text-md font-medium">Contact</a>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('pages')}
                className="text-gray-600 hover:text-orange-500 transition text-md font-medium flex items-center gap-1"
              >
                Pages <ChevronDown className="w-3 h-3" />
              </button>
              {openDropdown === 'pages' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                  <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">About Us</a>
                  <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Testimonials</a>
                  <a href="#faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">FAQ</a>
                  <a href="#blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition">Blog</a>
                </div>
              )}
            </div>
          </nav>

          {/* Social & CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition"><Youtube className="w-4 h-4" /></a>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition">
              GET A QUOTE
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition font-medium">Home</a>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full text-left text-gray-700 hover:text-orange-500 flex justify-between items-center"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#residential" className="block text-sm text-gray-600 hover:text-orange-500">Residential Moving</a>
                  <a href="#commercial" className="block text-sm text-gray-600 hover:text-orange-500">Commercial Moving</a>
                  <a href="#international" className="block text-sm text-gray-600 hover:text-orange-500">International Moving</a>
                  <a href="#packing" className="block text-sm text-gray-600 hover:text-orange-500">Packing Services</a>
                  <a href="#storage" className="block text-sm text-gray-600 hover:text-orange-500">Storage Solutions</a>
                </div>
              )}
            </div>

            {/* Planner Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('planner')}
                className="w-full text-left text-gray-700 hover:text-orange-500 flex justify-between items-center"
              >
                Moving Planner <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'planner' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'planner' && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#checklist" className="block text-sm text-gray-600 hover:text-orange-500">Moving Checklist</a>
                  <a href="#calculator" className="block text-sm text-gray-600 hover:text-orange-500">Cost Calculator</a>
                  <a href="#tips" className="block text-sm text-gray-600 hover:text-orange-500">Moving Tips & Guides</a>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('pages')}
                className="w-full text-left text-gray-700 hover:text-orange-500 flex justify-between items-center"
              >
                Pages <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'pages' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'pages' && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#about" className="block text-sm text-gray-600 hover:text-orange-500">About Us</a>
                  <a href="#testimonials" className="block text-sm text-gray-600 hover:text-orange-500">Testimonials</a>
                  <a href="#faq" className="block text-sm text-gray-600 hover:text-orange-500">FAQ</a>
                  <a href="#blog" className="block text-sm text-gray-600 hover:text-orange-500">Blog</a>
                </div>
              )}
            </div>

            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition font-medium">Contact</a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <a href="#" className="text-gray-600 hover:text-orange-500"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Youtube className="w-4 h-4" /></a>
            </div>

            <button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition">
              GET A QUOTE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
