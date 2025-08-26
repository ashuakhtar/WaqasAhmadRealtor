"use client";

import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">WA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Waqas Ahmad</h1>
                <p className="text-gray-500 text-sm font-medium">Real Estate Consultant</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200">Home</a>
              <a href="/properties" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">Properties</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">Contact</a>
            </nav>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 p-2 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              <button
                onClick={scrollToHome}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
              >
                Home
              </button>
              <a
                href="/properties"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
              >
                Properties
              </a>
              <button
                onClick={scrollToAbout}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={scrollToContact}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative text-white min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/backgroudCover.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Find Your Dream Home in
                  <span className="text-blue-400"> Lower Mainland</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Your trusted real estate partner in British Columbia's most vibrant region. 
                  Let me help you navigate the Lower Mainland real estate market with confidence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToProperties}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Properties
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Search</h3>
                <div className="space-y-4">
                  <select className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Property Type</option>
                    <option>Single Family</option>
                    <option>Townhouse</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                  </select>
                  <select className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Price Range</option>
                    <option>$500K - $750K</option>
                    <option>$750K - $1M</option>
                    <option>$1M - $1.5M</option>
                    <option>$1.5M+</option>
                  </select>
                  <select className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Bedrooms</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                  <button className="w-full bg-white text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover exceptional homes in Lower Mainland's most desirable neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  New Listing
                </div>
                <div className="absolute top-4 right-4 bg-white/95 text-gray-900 px-4 py-2 rounded-full text-lg font-bold">
                  $899,000
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Family Home</h3>
                <p className="text-gray-600 mb-6 text-lg">Fleetwood, Lower Mainland, BC</p>
                <div className="flex justify-between text-gray-500 mb-6 text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    4 beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    3 baths
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    2,200 sqft
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
                  View Details
                </button>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 relative">
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Open House
                </div>
                <div className="absolute top-4 right-4 bg-white/95 text-gray-900 px-4 py-2 rounded-full text-lg font-bold">
                  $1,250,000
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Luxury Townhouse</h3>
                <p className="text-gray-600 mb-6 text-lg">South Surrey, Lower Mainland, BC</p>
                <div className="flex justify-between text-gray-500 mb-6 text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    3 beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2.5 baths
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    1,800 sqft
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
                  View Details
                </button>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Just Sold
                </div>
                <div className="absolute top-4 right-4 bg-white/95 text-gray-900 px-4 py-2 rounded-full text-lg font-bold">
                  $675,000
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cozy Condo</h3>
                <p className="text-gray-600 mb-6 text-lg">Guildford, Lower Mainland, BC</p>
                <div className="flex justify-between text-gray-500 mb-6 text-lg">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    2 beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2 baths
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    1,100 sqft
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Waqas Ahmad</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  With over 8 years of experience in the Lower Mainland real estate market, I specialize in helping families 
                  find their perfect home in British Columbia's most vibrant region. My deep knowledge of local 
                  neighborhoods, market trends, and community amenities ensures you make informed decisions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">Licensed Real Estate Professional</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">Lower Mainland Market Specialist</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">Multilingual Service (English, Punjabi, Urdu)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">24/7 Client Support</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Why Choose Lower Mainland?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Fastest Growing Region</h4>
                    <p className="text-blue-100 text-lg leading-relaxed">BC's most dynamic region with excellent growth potential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Excellent Schools</h4>
                    <p className="text-blue-100 text-lg leading-relaxed">Top-rated public and private schools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Excellent Transportation</h4>
                    <p className="text-blue-100 text-lg leading-relaxed">SkyTrain, buses, ferries, and major highways</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Diverse Community</h4>
                    <p className="text-blue-100 text-lg leading-relaxed">Welcoming multicultural environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to find your dream home? Let's connect!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Phone</p>
                    <p className="text-lg text-gray-600">(604) 613-3056</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Email</p>
                    <p className="text-lg text-gray-600">realtorwaqas@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Office</p>
                    <p className="text-lg text-gray-600">12992 76 Ave, Surrey, BC, V3W 2V6</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">WA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Waqas Ahmad</h3>
                  <p className="text-gray-400">Real Estate Consultant</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your trusted partner in Lower Mainland real estate. Let me help you find your perfect home.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="/properties" className="hover:text-white transition-colors duration-200">Properties</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>Buying</li>
                <li>Selling</li>
                <li>Renting</li>
                <li>Property Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Waqas Ahmad Real Estate. All rights reserved. | Serving Lower Mainland, British Columbia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
