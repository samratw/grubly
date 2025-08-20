import React, { useState } from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart, FaStar, FaUtensils } from "react-icons/fa6";
import Seller from "../models/Seller";
import mongoose from "mongoose";
import Image from "next/image";

export default function Home({ restaurants }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TopFoods = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Pizza"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Momo"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Burger"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/8887052/pexels-photo-8887052.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sweets"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Noodles"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/17696653/pexels-photo-17696653/free-photo-of-chicken-wings-in-rice-with-saffron.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Biryani"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/824653/pexels-photo-824653.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sandwich"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fries"
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Pasta"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bringing Flavor To Your Door
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover the best restaurants and dishes in your area
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for restaurants..."
                className="w-full py-4 px-6 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IoSearchSharp className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Top Foods Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Top Food Categories</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ 
              type: "bullets", 
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-gray-400 opacity-50",
              bulletActiveClass: "swiper-pagination-bullet-active bg-orange-500 opacity-100"
            }}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false 
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="pb-12"
          >
            {TopFoods.map((food) => (
              <SwiperSlide key={food.id}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="h-64 relative">
                    <Image
                      src={food.image}
                      alt={food.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{food.title}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Restaurants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most popular restaurants in your area, handpicked for their exceptional quality and service
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>
          
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <Link 
                  passHref 
                  key={restaurant._id} 
                  href={`/restaurant/${restaurant.name}?id=${restaurant._id}`}
                  legacyBehavior
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                        <FaHeart className="text-red-500" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800 truncate">{restaurant.name}</h3>
                        <div className="flex items-center bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-sm font-semibold">
                          <FaStar className="mr-1" /> 4.8
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <FaUtensils className="mr-2 text-orange-500" />
                        {restaurant.address}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500">
                          <FaHeart className="text-red-500 mr-1" />
                          <span>{restaurant.likes} likes</span>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Open Now
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No restaurants found matching your search.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let restaurants = await Seller.find();
  return {
    props: { restaurants: JSON.parse(JSON.stringify(restaurants)) },
  };
}