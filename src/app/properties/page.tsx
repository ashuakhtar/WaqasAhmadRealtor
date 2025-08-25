import Link from "next/link";

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "Fleetwood, Surrey, BC",
      price: "$899,000",
      beds: 4,
      baths: 3,
      sqft: "2,200",
      type: "Single Family",
      status: "New Listing",
      statusColor: "bg-red-500",
      imageGradient: "from-blue-400 to-blue-600",
      description: "Beautiful modern home in the heart of Fleetwood. Features open concept living, updated kitchen, and spacious backyard."
    },
    {
      id: 2,
      title: "Luxury Townhouse",
      location: "South Surrey, BC",
      price: "$1,250,000",
      beds: 3,
      baths: 2.5,
      sqft: "1,800",
      type: "Townhouse",
      status: "Open House",
      statusColor: "bg-blue-500",
      imageGradient: "from-green-400 to-green-600",
      description: "Stunning luxury townhouse with premium finishes, granite countertops, and private garden."
    },
    {
      id: 3,
      title: "Cozy Condo",
      location: "Guildford, Surrey, BC",
      price: "$675,000",
      beds: 2,
      baths: 2,
      sqft: "1,100",
      type: "Condo",
      status: "Just Sold",
      statusColor: "bg-green-500",
      imageGradient: "from-purple-400 to-purple-600",
      description: "Well-maintained condo with modern amenities, secure parking, and close to shopping and transit."
    },
    {
      id: 4,
      title: "Executive Home",
      location: "Cloverdale, Surrey, BC",
      price: "$1,450,000",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      type: "Single Family",
      status: "Featured",
      statusColor: "bg-yellow-500",
      imageGradient: "from-orange-400 to-orange-600",
      description: "Executive family home with custom finishes, home theater, and extensive landscaping."
    },
    {
      id: 5,
      title: "Investment Property",
      location: "Newton, Surrey, BC",
      price: "$750,000",
      beds: 3,
      baths: 2,
      sqft: "1,600",
      type: "Single Family",
      status: "For Rent",
      statusColor: "bg-indigo-500",
      imageGradient: "from-teal-400 to-teal-600",
      description: "Great investment opportunity with rental income potential and future development possibilities."
    },
    {
      id: 6,
      title: "Waterfront Condo",
      location: "White Rock, BC",
      price: "$1,100,000",
      beds: 2,
      baths: 2,
      sqft: "1,300",
      type: "Condo",
      status: "New Listing",
      statusColor: "bg-red-500",
      imageGradient: "from-cyan-400 to-cyan-600",
      description: "Stunning waterfront condo with ocean views, balcony, and resort-style amenities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">WA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Waqas Ahmad</h1>
                <p className="text-gray-600">Real Estate Professional</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/properties" className="text-blue-600 font-medium">Properties</Link>
              <Link href="/#about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Properties in Surrey</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                             Discover exceptional homes in Surrey&apos;s most desirable neighborhoods. 
               From cozy condos to luxury estates, find your perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Property Type</option>
              <option>Single Family</option>
              <option>Townhouse</option>
              <option>Condo</option>
              <option>Apartment</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Price Range</option>
              <option>$500K - $750K</option>
              <option>$750K - $1M</option>
              <option>$1M - $1.5M</option>
              <option>$1.5M+</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Bedrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${property.imageGradient} relative`}>
                  <div className={`absolute top-4 left-4 ${property.statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {property.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <p className="text-gray-700 mb-4 text-sm">{property.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {property.type}
                    </span>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let me help you navigate the Surrey real estate market and find the perfect property for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">WA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Waqas Ahmad</h3>
                  <p className="text-gray-400 text-sm">Real Estate Professional</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in Surrey real estate. Let me help you find your perfect home.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/properties" className="hover:text-white transition-colors">Properties</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Buying</li>
                <li>Selling</li>
                <li>Renting</li>
                <li>Property Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>(604) 555-0123</p>
                <p>waqas@surreyrealestate.ca</p>
                <p>1234 King George Blvd<br />Surrey, BC V4A 1A1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Waqas Ahmad Real Estate. All rights reserved. | Serving Surrey, British Columbia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
