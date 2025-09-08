"use client";

import { useEffect, useState } from 'react';
import { paragonIDXService } from '../services/paragonIDX';

interface NewListingsProps {
  height?: string;
  title?: string;
}

export default function NewListings({ height = '800px', title = 'New Listings' }: NewListingsProps) {
  const [idxUrl, setIdxUrl] = useState<string>('https://bcres.paragonrels.com/ParagonLS/Default.mvc/idx.aspx?Mls=BCRES&Subscriber=545a2e4d-99ec-4e55-bdd5-0035dd322b1c');
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    
    // Initialize the service and get the new listings URL
    const initializeService = async () => {
      try {
        await paragonIDXService.initialize();
        // Try the new listings URL first
        const newListingsUrl = await paragonIDXService.getNewListings();
        setIdxUrl(newListingsUrl);
      } catch (error) {
        console.error('Failed to initialize IDX service:', error);
        // Try alternative URL without Featured parameter
        try {
          const alternativeUrl = paragonIDXService.getNewListingsURLAlternative();
          setIdxUrl(alternativeUrl);
        } catch (altError) {
          console.error('Alternative URL also failed:', altError);
          // Final fallback to the original working URL structure
          const fallbackUrl = 'https://bcres.paragonrels.com/ParagonLS/Default.mvc/idx.aspx?Mls=BCRES&Subscriber=545a2e4d-99ec-4e55-bdd5-0035dd322b1c';
          setIdxUrl(fallbackUrl);
        }
      } finally {
        setLoading(false);
      }
    };

    initializeService();
  }, []);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest properties that have just hit the market in the Lower Mainland area. 
          These fresh listings offer great opportunities for buyers looking for new options.
        </p>
      </div>
      
      {/* IDX Frame for New Listings */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden">
        {!mounted || loading ? (
          <div className="h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <div className="text-gray-500 text-lg">Loading new listings...</div>
            </div>
          </div>
        ) : iframeError ? (
          <div className="h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 text-lg mb-4">Unable to load property listings</div>
              <div className="text-gray-500 text-sm mb-4">The MLS system is currently unavailable. Please try again later or contact us for assistance.</div>
              <button 
                onClick={() => {
                  setIframeError(false);
                  setLoading(true);
                  // Retry loading
                  setTimeout(() => setLoading(false), 1000);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={idxUrl}
            width="100%"
            height={height}
            frameBorder="0"
            title="Paragon MLS New Listings"
            className="w-full"
            suppressHydrationWarning={true}
            onError={() => setIframeError(true)}
            onLoad={() => setIframeError(false)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-top-navigation-by-user-activation"
            referrerPolicy="no-referrer"
          />
        )}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Powered by Paragon MLS • Updated in real-time
        </p>
      </div>
    </div>
  );
}
