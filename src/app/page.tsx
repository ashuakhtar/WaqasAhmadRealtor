"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';

const ParagonIDX = dynamic(() => import("../components/ParagonIDX"), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-gray-500">Loading search...</div></div>
});

const NewListings = dynamic(() => import("../components/NewListings"), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-gray-500">Loading listings...</div></div>
});

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
      <header className="bg-gray-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/logo/waLogo.jpeg" 
                  alt="Waqas Ahmad Real Estate Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Waqas Ahmad</h1>
                <p className="text-blue-100 text-sm font-medium">Real Estate Consultant</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</a>
              <a href="/properties" className="text-blue-100 hover:text-white font-medium transition-colors duration-200">Properties</a>
              <a href="#about" className="text-blue-100 hover:text-white font-medium transition-colors duration-200">About</a>
              <a href="#contact" className="text-blue-100 hover:text-white font-medium transition-colors duration-200">Contact</a>
            </nav>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-200 p-2 transition-colors duration-200"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t shadow-lg">
              <button
                onClick={scrollToHome}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded-md font-medium transition-colors duration-200"
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
                  Your trusted real estate partner in British Columbia&apos;s most vibrant region. 
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
              <ParagonIDX searchType="basic" showResults={false} />
            </div>
          </div>
        </div>
      </section>

      {/* New Listings */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewListings height="700px" title="Latest New Listings" />
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
                  find their perfect home in British Columbia&apos;s most vibrant region. My deep knowledge of local 
                  neighborhoods, market trends, and community amenities ensures you make informed decisions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full shadow-sm"></div>
                  <span className="text-lg text-gray-700 font-medium">Licensed Real Estate Professional</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full shadow-sm"></div>
                  <span className="text-lg text-gray-700 font-medium">Lower Mainland Market Specialist</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full shadow-sm"></div>
                  <span className="text-lg text-gray-700 font-medium">Multilingual Service (English, Punjabi, Urdu)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full shadow-sm"></div>
                  <span className="text-lg text-gray-700 font-medium">24/7 Client Support</span>
                </div>
              </div>
            </div>
            {/* <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-2xl"> */}
            <div className="bg-gray-900 rounded-3xl p-10 text-white shadow-2xl"> 

              <h3 className="text-3xl font-bold mb-8">Why Choose Lower Mainland?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Fastest Growing Region</h4>
                    <p className="text-blue-100 text-lg leading-relaxed">BC&apos;s most dynamic region with excellent growth potential</p>
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
            <p className="text-xl text-gray-600">Ready to find your dream home? Let&apos;s connect!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
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
                  <div className="w-14 h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
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
                  <div className="w-14 h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
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
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg resize-none placeholder-gray-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <img 
                    src="/logo/waLogo.jpeg" 
                    alt="Waqas Ahmad Real Estate Logo" 
                    className="w-full h-full object-cover"
                  />
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
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2025 Waqas Ahmad Real Estate. All rights reserved. | Serving Lower Mainland, British Columbia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
