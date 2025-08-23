import React from 'react';
import Head from 'next/head';

const HowToOrder = () => {
  const steps = [
    {
      number: 1,
      title: "Browse Restaurants",
      description: "Explore various restaurants and cuisines available in your area",
      icon: "🍽️"
    },
    {
      number: 2,
      title: "Select Your Food",
      description: "Choose your favorite dishes and add them to your cart",
      icon: "🛒"
    },
    {
      number: 3,
      title: "Checkout",
      description: "Review your order, select payment method, and confirm delivery address",
      icon: "💰"
    },
    {
      number: 4,
      title: "Track Delivery",
      description: "Follow your order in real-time as we prepare and deliver it",
      icon: "🚗"
    },
    {
      number: 5,
      title: "Enjoy Your Meal",
      description: "Receive your food hot and fresh, ready to enjoy!",
      icon: "🎉"
    }
  ];

  return (
    <>
      <Head>
        <title>How to Order - Grubly</title>
        <meta name="description" content="Learn how to easily order food from our platform in simple steps" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-500 to-red-600 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How to Order
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Simple steps to get delicious food delivered to your doorstep
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ordering Made Easy</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col md:flex-row items-center">
                    <div className="flex-shrink-0 w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Helpful Ordering Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">📱 Mobile App</h3>
                  <p className="text-gray-600">
                    Download our mobile app for faster ordering, exclusive deals, and order tracking features.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ Favorite Orders</h3>
                  <p className="text-gray-600">
                    Save your favorite orders for quick reordering and get personalized recommendations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">🕒 Schedule Orders</h3>
                  <p className="text-gray-600">
                    Schedule orders in advance for meetings, parties, or busy days.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Group Orders</h3>
                  <p className="text-gray-600">
                    Use group ordering feature to collect orders from friends or colleagues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Need Help Ordering?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to assist you with any questions
            </p>
            <div className="space-x-4">
              <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToOrder;