import React from 'react';
import Head from 'next/head';

const AvailableAreas = () => {
  const areas = [
    {
      areas: ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Kirtipur', 'Thimi'],
      deliveryCharge: 'Rs. 50-100'
    },
    {
      areas: ['Pokhara', 'Lekhnath', 'Bagar', 'Hemja', 'Syangja'],
      deliveryCharge: 'Rs. 60-120'
    },
    {
      areas: ['Bharatpur', 'Ratnanagar', 'Kalika', 'Khairhani', 'Madi'],
      deliveryCharge: 'Rs. 70-130'
    },
    {
      areas: ['Biratnagar', 'Dharan', 'Itahari', 'Biratchowk', 'Urlabari'],
      deliveryCharge: 'Rs. 80-150'
    },
    {
      areas: ['Butwal', 'Bhairahawa', 'Tillotama', 'Manigram', 'Devdaha'],
      deliveryCharge: 'Rs. 70-140'
    },
    {
      areas: ['Nepalgunj', 'Kohalpur', 'Banganga', 'Khajura', 'Jamura'],
      deliveryCharge: 'Rs. 90-160'
    }
  ];

  return (
    <>
      <Head>
        <title>Available Areas - Grubly</title>
        <meta name="description" content="Check our service areas and delivery charges across Nepal" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-500 to-red-600 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Service Areas
              </h1>
              <p className="text-xl mb-8 opacity-90">
                We deliver across major cities in Nepal with affordable delivery charges
              </p>
            </div>
          </div>
        </section>

        {/* Areas List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Available Districts & Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check if we deliver to your location and see the delivery charges
              </p>
              <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((areas, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {areas.deliveryCharge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {areas.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">💡 Delivery Information</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Minimum order amount: Rs. 300</li>
                <li>• Free delivery on orders above Rs. 1000</li>
                <li>• Delivery time: 30-45 minutes in city areas</li>
                <li>• Cash on delivery available</li>
                <li>• Online payment options: eSewa and Khalti</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expansion Notice */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Expanding to More Areas Soon!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We're constantly working to expand our service to more cities across Nepal. 
              Enter your email below to be notified when we start delivering in your area.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AvailableAreas;