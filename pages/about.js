import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Samrat Wagle",
      role: "Founder & CEO",
      bio: "With over 5 years plus of culinary experience, Samrat brings world class cuisine to your doorstep.",
      image: "/SamratWagle.png",
      portfolio: "https://portfolio-samratwagle.vercel.app"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO & Tech Lead",
      bio: "Michael ensures our platform runs smoothly so you can focus on enjoying great food.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      portfolio: "https://michaelchen-dev.vercel.app"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Marketing Director",
      bio: "Emma connects food lovers with the best local restaurants and culinary experiences.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      portfolio: "https://emmarodriguez-marketing.vercel.app"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Manager",
      bio: "David ensures that every order is delivered promptly and maintains our quality standards.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      portfolio: "https://davidkim-operations.vercel.app"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Grubly</title>
        <meta name="description" content="Meet the team behind our food delivery service" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-500 to-red-600 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Our Team
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Meet the passionate people working to bring the best food experiences to your doorstep
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, our food delivery platform was born out of a simple idea: everyone deserves 
                access to delicious, high-quality food from their favorite local restaurants, delivered right 
                to their door.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of food enthusiasts has grown into a platform connecting 
                thousands of customers with hundreds of restaurants across the country.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to supporting local businesses, reducing food waste, and creating 
                exceptional dining experiences—no matter where you are.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Passionate foodies and tech enthusiasts working together to revolutionize food delivery
              </p>
              <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  onClick={() => window.open(member.portfolio, '_blank')}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-red-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center">
                      <span className="text-sm text-red-500 font-medium group-hover:underline">
                        View Portfolio →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Food</h3>
                <p className="text-gray-600">
                  We partner with restaurants that share our commitment to quality ingredients and exceptional flavors.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Our efficient delivery network ensures your food arrives hot and fresh, exactly when you want it.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  We're dedicated to supporting local restaurants and building stronger food communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Food Revolution</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference that passion, technology, and great food can make
            </p>
            <Link href="/" legacyBehavior>
              <a className="inline-block bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Ordering
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;