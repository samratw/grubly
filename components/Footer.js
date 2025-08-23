import React from 'react';
import Link from 'next/link';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaHeadset,
  FaQuestionCircle,
  FaInfoCircle,
  FaFileAlt,
  FaRss
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6">
              <span className="text-3xl font-bold">
                <div style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }} className="flex items-center text-green-500 text-2xl md:text-3xl font-bold">
                  <span className="text-red-500">Grub</span>ly
                </div>
              </span>
            </Link>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              Bringing exceptional flavors directly to your door. Experience the best local restaurants with just a few clicks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-red-500 inline-block">We're Grubly</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaInfoCircle className="mr-3 text-red-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/availableareas" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaMapMarkerAlt className="mr-3 text-red-500" />
                  Available Areas
                </Link>
              </li>
              <li>
                <Link href="/deliverycharges" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaFileAlt className="mr-3 text-red-500" />
                  Delivery Charges
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaRss className="mr-3 text-red-500" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-red-500 inline-block">Get Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/howtoorder" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaQuestionCircle className="mr-3 text-red-500" />
                  How to Order?
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaQuestionCircle className="mr-3 text-red-500" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaHeadset className="mr-3 text-red-500" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="flex items-center text-gray-200 hover:text-red-400 transition-colors duration-150">
                  <FaFileAlt className="mr-3 text-red-500" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-red-500 inline-block">Call Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhoneAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-200">Kathmandu</h4>
                  <p className="text-gray-200">9898989809, 9898989809</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-200">Pokhara</h4>
                  <p className="text-gray-200">9802772843, 9802772843</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-200">Chitwan</h4>
                  <p className="text-gray-200">6757575759, 6757575759</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Delivery Hours</h4>
              <p className="text-gray-200 text-sm">Sunday - Thursday: 10AM - 10PM</p>
              <p className="text-gray-200 text-sm">Friday - Saturday: 10AM - 11PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Grubly. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-150">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-150">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;