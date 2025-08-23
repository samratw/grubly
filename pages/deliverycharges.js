import React from 'react';
import Head from 'next/head';

const DeliveryCharges = () => {
  const charges = [
    { range: 'Up to 2 km', charge: 'Rs. 50', free: 'Orders above Rs. 1000' },
    { range: '2-5 km', charge: 'Rs. 80', free: 'Orders above Rs. 1200' },
    { range: '5-10 km', charge: 'Rs. 120', free: 'Orders above Rs. 1500' },
    { range: '10-15 km', charge: 'Rs. 180', free: 'Orders above Rs. 2000' },
    { range: '15-20 km', charge: 'Rs. 250', free: 'Not available' },
  ];

  return (
    <>
      <Head>
        <title>Delivery Charges - Grubly</title>
        <meta name="description" content="Check our delivery charges based on distance and order value" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-500 to-red-600 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Delivery Charges
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transparent pricing with free delivery on larger orders
              </p>
            </div>
          </div>
        </section>

        {/* Charges Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Delivery Charges Based on Distance</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-red-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Distance Range</th>
                      <th className="px-6 py-4 text-left">Delivery Charge</th>
                      <th className="px-6 py-4 text-left">Free Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {charges.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold">{item.range}</td>
                        <td className="px-6 py-4">{item.charge}</td>
                        <td className="px-6 py-4">{item.free}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">🎉 Special Offers</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• First order: 50% off delivery charges</li>
                  <li>• Weekend special: Free delivery on all orders above Rs. 800 (within 5km)</li>
                  <li>• Loyalty program: Every 10th order gets free delivery</li>
                  <li>• Group orders: Free delivery for orders above Rs. 1500 from office groups</li>
                </ul>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">ℹ️ Important Notes</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Minimum order amount: Rs. 300</li>
                  <li>• Delivery time: 30-45 minutes for most areas</li>
                  <li>• Additional charges may apply during peak hours and bad weather</li>
                  <li>• Contact us for bulk orders and catering services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeliveryCharges;