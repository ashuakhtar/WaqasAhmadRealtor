// Paragon IDX Service for MLS Integration
// This service uses IDX framing to embed Paragon MLS search directly

export interface ParagonProperty {
  id: string;
  mlsNumber: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  propertyType: string;
  status: string;
  description: string;
  images: string[];
  features: string[];
  lotSize: string;
  yearBuilt: number;
  parking: string;
  heating: string;
  cooling: string;
  lastUpdated: string;
}

export interface SearchParams {
  propertyType?: string;
  priceMin?: number;
  priceMax?: number;
  beds?: number;
  baths?: number;
  city?: string;
  status?: string;
  sqftMin?: number;
  sqftMax?: number;
  lotSize?: string;
  yearBuiltMin?: number;
  yearBuiltMax?: number;
}

export interface IDXConfig {
  baseUrl: string;
  mlsId: string;
  subscriberId: string;
  sessionGuid?: string;
}

class ParagonIDXService {
  private idxConfig: IDXConfig;
  private isInitialized: boolean = false;

  constructor() {
    this.idxConfig = {
      baseUrl: process.env.NEXT_PUBLIC_PARAGON_IDX_URL || 'https://bcres.paragonrels.com',
      mlsId: process.env.NEXT_PUBLIC_PARAGON_IDX_MLS_ID || 'BCRES',
      subscriberId: process.env.NEXT_PUBLIC_PARAGON_IDX_SUBSCRIBER_ID || '545a2e4d-99ec-4e55-bdd5-0035dd322b1c',
      sessionGuid: process.env.NEXT_PUBLIC_PARAGON_IDX_SESSION_GUID
    };
  }

  // Initialize the service
  async initialize(): Promise<boolean> {
    try {
      // For IDX framing, we don't need to test the URL
      // Just mark as initialized since the iframe will handle the connection
      this.isInitialized = true;
      return true;
    } catch (error) {
      console.error('Failed to initialize Paragon IDX service:', error);
      this.isInitialized = false;
      return false;
    }
  }

  // Build the IDX URL with parameters
  buildIDXUrl(params?: SearchParams): string {
    // Try a simpler URL structure that might work better
    const baseUrl = `https://bcres.paragonrels.com/ParagonLS/Default.mvc/idx.aspx`;
    const urlParams = new URLSearchParams();
    
    // Add core parameters
    urlParams.append('Mls', this.idxConfig.mlsId);
    urlParams.append('Subscriber', this.idxConfig.subscriberId);

    // Add search parameters if provided
    if (params) {
      if (params.propertyType) urlParams.append('PropertyType', params.propertyType);
      if (params.priceMin) urlParams.append('MinPrice', params.priceMin.toString());
      if (params.priceMax) urlParams.append('MaxPrice', params.priceMax.toString());
      if (params.beds) urlParams.append('MinBeds', params.beds.toString());
      if (params.baths) urlParams.append('MinBaths', params.baths.toString());
      if (params.city) urlParams.append('City', params.city);
      if (params.status) urlParams.append('Status', params.status);
      if (params.sqftMin) urlParams.append('MinSqFt', params.sqftMin.toString());
      if (params.sqftMax) urlParams.append('MaxSqFt', params.sqftMax.toString());
    }

    return `${baseUrl}?${urlParams.toString()}`;
  }

  // Get the main IDX search URL
  getSearchURL(): string {
    return this.buildIDXUrl();
  }

  // Get featured properties URL
  getFeaturedURL(): string {
    const urlParams = new URLSearchParams();
    
    // Add session GUID if available
    if (this.idxConfig.sessionGuid) {
      urlParams.append('RMLS_SESSION_GUID', this.idxConfig.sessionGuid);
    }
    
    urlParams.append('Mls', this.idxConfig.mlsId);
    urlParams.append('Subscriber', this.idxConfig.subscriberId);
    urlParams.append('Featured', 'true');
    
    return `${this.idxConfig.baseUrl}/ParagonLS/Default.mvc/idx.aspx?${urlParams.toString()}`;
  }

  // Get new listings URL (Featured=2)
  getNewListingsURL(): string {
    // Try a different approach - use a basic search URL that should work
    const urlParams = new URLSearchParams({
      Mls: this.idxConfig.mlsId,
      Subscriber: this.idxConfig.subscriberId
    });
    
    // Try the basic search URL without any special parameters
    return `https://bcres.paragonrels.com/ParagonLS/Default.mvc/idx.aspx?${urlParams.toString()}`;
  }

  // Alternative new listings URL without Featured parameter
  getNewListingsURLAlternative(): string {
    // Try a completely different approach - use a basic search URL
    return this.getSearchURL();
  }

  // Get property details URL
  getPropertyDetailsURL(propertyId: string): string {
    const urlParams = new URLSearchParams();
    
    // Add session GUID if available
    if (this.idxConfig.sessionGuid) {
      urlParams.append('RMLS_SESSION_GUID', this.idxConfig.sessionGuid);
    }
    
    urlParams.append('Mls', this.idxConfig.mlsId);
    urlParams.append('Subscriber', this.idxConfig.subscriberId);
    urlParams.append('PropertyId', propertyId);
    
    return `${this.idxConfig.baseUrl}/ParagonLS/Default.mvc/idx.aspx?${urlParams.toString()}`;
  }

  // Search properties - returns the URL for IDX framing
  async searchProperties(params: SearchParams): Promise<string> {
    return this.buildIDXUrl(params);
  }

  // Get property details - returns the URL for IDX framing
  async getPropertyDetails(propertyId: string): Promise<string> {
    return this.getPropertyDetailsURL(propertyId);
  }

  // Get featured properties - returns the URL for IDX framing
  async getFeaturedProperties(): Promise<string> {
    return this.getFeaturedURL();
  }

  // Get new listings - returns the URL for IDX framing
  async getNewListings(): Promise<string> {
    return this.getNewListingsURL();
  }

  // Check if service is initialized
  isServiceReady(): boolean {
    return this.isInitialized;
  }

  // Get sample properties for development/testing
  getSampleProperties(): ParagonProperty[] {
    return [
      {
        id: '1',
        mlsNumber: 'R1234567',
        address: '1234 Main Street',
        city: 'Surrey',
        province: 'BC',
        postalCode: 'V3T 1A1',
        price: 899000,
        beds: 4,
        baths: 3,
        sqft: 2200,
        propertyType: 'Single Family',
        status: 'Active',
        description: 'Beautiful modern home in the heart of Surrey. Features open concept living, updated kitchen, and spacious backyard.',
        images: ['/backgroudCover.jpg'],
        features: ['Open Concept', 'Updated Kitchen', 'Hardwood Floors', 'Central AC'],
        lotSize: '5,000 sqft',
        yearBuilt: 2018,
        parking: '2 Car Garage',
        heating: 'Forced Air',
        cooling: 'Central Air',
        lastUpdated: '2024-01-15T10:30:00.000Z'
      },
      {
        id: '2',
        mlsNumber: 'R2345678',
        address: '5678 Oak Avenue',
        city: 'Langley',
        province: 'BC',
        postalCode: 'V2Y 1B2',
        price: 1250000,
        beds: 3,
        baths: 2.5,
        sqft: 1800,
        propertyType: 'Townhouse',
        status: 'Active',
        description: 'Stunning luxury townhouse with premium finishes, granite countertops, and private garden.',
        images: ['/backgroudCover.jpg'],
        features: ['Granite Countertops', 'Stainless Appliances', 'Private Garden', 'Security System'],
        lotSize: '2,500 sqft',
        yearBuilt: 2020,
        parking: '1 Car Garage + 1 Space',
        heating: 'Heat Pump',
        cooling: 'Central Air',
        lastUpdated: '2024-01-15T10:30:00.000Z'
      },
      {
        id: '3',
        mlsNumber: 'R3456789',
        address: '9012 Pine Road',
        city: 'Delta',
        province: 'BC',
        postalCode: 'V4K 1C3',
        price: 675000,
        beds: 2,
        baths: 2,
        sqft: 1100,
        propertyType: 'Condo',
        status: 'Active',
        description: 'Well-maintained condo with modern amenities, secure parking, and close to shopping and transit.',
        images: ['/backgroudCover.jpg'],
        features: ['Modern Amenities', 'Secure Parking', 'Balcony', 'In-Suite Laundry'],
        lotSize: 'N/A',
        yearBuilt: 2015,
        parking: '1 Underground Space',
        heating: 'Electric Baseboard',
        cooling: 'None',
        lastUpdated: '2024-01-15T10:30:00.000Z'
      }
    ];
  }
}

// Export singleton instance
export const paragonIDXService = new ParagonIDXService();
export default paragonIDXService;
