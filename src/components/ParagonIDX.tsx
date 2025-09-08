"use client";

import { useEffect, useState } from 'react';
import { paragonIDXService, SearchParams } from '../services/paragonIDX';

interface ParagonIDXProps {
  searchType?: 'basic' | 'advanced';
  showResults?: boolean;
  height?: string;
  displayType?: 'search' | 'featured' | 'newListings';
}

export default function ParagonIDX({ searchType = 'basic', showResults = true, height = '800px', displayType = 'search' }: ParagonIDXProps) {
  const [idxUrl, setIdxUrl] = useState<string>('https://bcres.paragonrels.com/ParagonLS/Default.mvc/idx.aspx?Mls=BCRES&Subscriber=545a2e4d-99ec-4e55-bdd5-0035dd322b1c');
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [searchParams, setSearchParams] = useState({
    propertyType: '',
    priceMin: '',
    priceMax: '',
    beds: '',
    city: '',
    status: 'Active'
  });

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    
    // Initialize the service and get the appropriate IDX URL based on display type
    const initializeService = async () => {
      try {
        await paragonIDXService.initialize();
        let defaultUrl: string;
        
        switch (displayType) {
          case 'featured':
            defaultUrl = await paragonIDXService.getFeaturedProperties();
            break;
          case 'newListings':
            defaultUrl = await paragonIDXService.getNewListings();
            break;
          case 'search':
          default:
            defaultUrl = paragonIDXService.getSearchURL();
            break;
        }
        
        setIdxUrl(defaultUrl);
      } catch (error) {
        console.error('Failed to initialize IDX service:', error);
        // Fallback to the original working URL structure
        setIdxUrl('https://bcres.paragonrels.com/ParagonLS/Default.mvc/idx.aspx?Mls=BCRES&Subscriber=545a2e4d-99ec-4e55-bdd5-0035dd322b1c');
      } finally {
        setLoading(false);
      }
    };

    initializeService();
  }, [displayType]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Convert search params to service format
      const serviceParams: SearchParams = {
        propertyType: searchParams.propertyType || undefined,
        priceMin: searchParams.priceMin ? parseInt(searchParams.priceMin.replace(/[^0-9]/g, '')) : undefined,
        priceMax: searchParams.priceMax ? parseInt(searchParams.priceMax.replace(/[^0-9]/g, '')) : undefined,
        beds: searchParams.beds ? parseInt(searchParams.beds) : undefined,
        city: searchParams.city || undefined,
        status: searchParams.status || undefined
      };

      // Get the IDX URL with search parameters
      const searchUrl = await paragonIDXService.searchProperties(serviceParams);
      setIdxUrl(searchUrl);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = async () => {
    let defaultUrl: string;
    
    switch (displayType) {
      case 'featured':
        defaultUrl = await paragonIDXService.getFeaturedProperties();
        break;
      case 'newListings':
        defaultUrl = await paragonIDXService.getNewListings();
        break;
      case 'search':
      default:
        defaultUrl = paragonIDXService.getSearchURL();
        break;
    }
    
    setIdxUrl(defaultUrl);
    setSearchParams({
      propertyType: '',
      priceMin: '',
      priceMax: '',
      beds: '',
      city: '',
      status: 'Active'
    });
  };

  if (searchType === 'basic') {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 text-white">
          {displayType === 'newListings' ? 'New Listings' : 
           displayType === 'featured' ? 'Featured Properties' : 
           'Quick Property Search'}
        </h3>
        <form onSubmit={handleSearch} className="space-y-4 mb-6">
          <select 
            name="propertyType"
            value={searchParams.propertyType}
            onChange={handleInputChange}
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Property Type</option>
            <option value="Single Family">Single Family</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>
          
          <select 
            name="priceMax"
            value={searchParams.priceMax}
            onChange={handleInputChange}
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Price Range</option>
            <option value="$500K - $750K">$500K - $750K</option>
            <option value="$750K - $1M">$750K - $1M</option>
            <option value="$1M - $1.5M">$1M - $1.5M</option>
            <option value="$1.5M+">$1.5M+</option>
          </select>
          
          <select 
            name="beds"
            value={searchParams.beds}
            onChange={handleInputChange}
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          
          <div className="flex gap-4">
            <button 
              type="submit"
              disabled={loading}
              className="flex-1 bg-white text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search Properties'}
            </button>
            <button 
              type="button"
              onClick={handleReset}
              className="px-6 py-4 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-colors duration-300"
            >
              Reset
            </button>
          </div>
        </form>

        {/* IDX Frame */}
        
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">
        {displayType === 'newListings' ? 'New Listings' : 
         displayType === 'featured' ? 'Featured Properties' : 
         'Advanced Property Search'}
      </h3>
      <form onSubmit={handleSearch} className="space-y-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={searchParams.city}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-700"
          />
          <select
            name="propertyType"
            value={searchParams.propertyType}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-gray-700"
          >
            <option value="" className="text-gray-500">Property Type</option>
            <option value="Single Family">Single Family</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="priceMin"
            placeholder="Min Price"
            value={searchParams.priceMin}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-700"
          />
          <input
            type="text"
            name="priceMax"
            placeholder="Max Price"
            value={searchParams.priceMax}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-700"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <select
            name="beds"
            value={searchParams.beds}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-gray-700"
          >
            <option value="" className="text-gray-500">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <select
            name="status"
            value={searchParams.status}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-gray-700"
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 text-white py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all duration-300 text-lg disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {loading ? 'Searching...' : 'Search Properties'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </form>
      
      {/* IDX Frame */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden">
        {!mounted || loading ? (
          <div className="h-96 flex items-center justify-center">
            <div className="text-gray-500">Loading MLS search...</div>
          </div>
        ) : (
          <iframe
            src={idxUrl}
            width="100%"
            height={height}
            frameBorder="0"
            title="Paragon MLS Property Search"
            className="w-full"
            suppressHydrationWarning={true}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
            referrerPolicy="no-referrer"
          />
        )}
      </div>
    </div>
  );
}
