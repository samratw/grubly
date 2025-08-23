import React, { useState } from 'react';
import Head from 'next/head';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Ordering & Payment",
      questions: [
        {
          question: "How do I place an order?",
          answer: "You can place an order through our website or mobile app. Simply select your location, choose a restaurant, add items to your cart, and proceed to checkout."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept Cash On Delivery, eSewa and Khalti."
        },
        {
          question: "Is there a minimum order amount?",
          answer: "Yes, the minimum order amount is Rs. 300. This helps ensure that delivery is economically viable for our partner restaurants."
        }
      ]
    },
    {
      title: "Delivery",
      questions: [
        {
          question: "How long does delivery take?",
          answer: "Delivery typically takes 30-45 minutes for most areas. During peak hours or bad weather, it might take slightly longer."
        },
        {
          question: "Do you deliver to my area?",
          answer: "We deliver to most urban areas across Nepal. You can check our service areas page to see if we deliver to your location."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you can track your order in real-time through our app or website once it's been confirmed and dispatched."
        }
      ]
    },
    {
      title: "Account & Technical",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click on the 'Sign Up' button, enter your email address or phone number, create a password, and you're all set!"
        },
        {
          question: "I forgot my password. What should I do?",
          answer: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you instructions to reset your password."
        },
        {
          question: "The app is not working properly. What can I do?",
          answer: "Try updating to the latest version of the app, clearing cache, or reinstalling. If the issue persists, contact our support team."
        }
      ]
    },
    {
      title: "Restaurants & Food",
      questions: [
        {
          question: "How do you ensure food quality?",
          answer: "We partner with reputable restaurants that maintain high hygiene standards. We also monitor customer feedback and ratings continuously."
        },
        {
          question: "Can I request customizations to my order?",
          answer: "Yes, most restaurants allow customizations. You can add special instructions during the ordering process."
        },
        {
          question: "What if I have food allergies?",
          answer: "Please check the menu descriptions carefully and use the special instructions field to inform the restaurant about your allergies."
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>FAQs - Grubly</title>
        <meta name="description" content="Find answers to frequently asked questions about our food delivery service" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-500 to-red-600 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                FAQs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Frequently Asked Questions about our food delivery service
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Common Questions</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => {
                      const faqIndex = categoryIndex * 10 + index;
                      return (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
                            onClick={() => toggleFAQ(faqIndex)}
                          >
                            <span className="font-semibold text-gray-800">{faq.question}</span>
                            <span className="text-red-500">
                              {activeIndex === faqIndex ? '−' : '+'}
                            </span>
                          </button>
                          {activeIndex === faqIndex && (
                            <div className="px-6 py-4 bg-gray-50">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our customer support team is here to help you with any other questions you might have
            </p>
            <div className="space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Contact Support
              </button>
              <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQs;