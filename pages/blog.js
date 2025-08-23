import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Try Traditional Nepali Dishes",
      excerpt: "Discover the rich flavors of Nepal with these authentic dishes that every food lover should try at least once.",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      author: "Rajesh Thapa",
      category: "Food Guide"
    },
    {
      id: 2,
      title: "How to Choose the Healthiest Options When Ordering Food Online",
      excerpt: "Learn smart strategies for making healthy choices while enjoying the convenience of food delivery.",
      image: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2024",
      author: "Priya Sharma",
      category: "Health & Nutrition"
    },
    {
      id: 3,
      title: "The Rise of Food Delivery Apps in Nepal: A 2024 Perspective",
      excerpt: "Exploring how technology is transforming the food industry in Nepal and what it means for consumers.",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 5, 2024",
      author: "Amit Gurung",
      category: "Technology"
    },
    {
      id: 4,
      title: "5 Tips for Supporting Local Restaurants During Festive Seasons",
      excerpt: "How you can help local eateries thrive while enjoying delicious meals during special occasions.",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 28, 2024",
      author: "Sita Rai",
      category: "Community"
    },
    {
      id: 5,
      title: "The Art of Food Photography: Making Your Meals Instagram Worthy",
      excerpt: "Simple tips and tricks to capture stunning food photos that will make your followers hungry.",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 20, 2024",
      author: "Rohan Basnet",
      category: "Lifestyle"
    },
    {
      id: 6,
      title: "Sustainable Food Delivery: How We're Reducing Our Environmental Impact",
      excerpt: "Learn about our initiatives to make food delivery more eco-friendly and sustainable.",
      image: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 15, 2024",
      author: "Anita Shrestha",
      category: "Sustainability"
    }
  ];

  const categories = ["All", "Food Guide", "Health & Nutrition", "Technology", "Community", "Lifestyle", "Sustainability"];

  return (
    <>
      <Head>
        <title>Blog - Grubly</title>
        <meta name="description" content="Read our latest articles about food, nutrition, and delivery trends" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-500 to-red-600 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Food Blog
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Delicious stories, tips, and insights from the world of food
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} legacyBehavior>
                      <a className="text-red-500 font-semibold hover:underline">
                        Read More →
                      </a>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">1</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-500 hover:text-white">2</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-500 hover:text-white">3</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-500 hover:text-white">Next →</button>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Stay Updated with Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter and never miss new articles, recipes, and food tips
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;