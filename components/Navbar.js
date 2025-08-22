import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoSearchSharp } from 'react-icons/io5';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'py-3'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }} className="flex items-center text-green-500 text-2xl md:text-3xl font-bold">
                            <span className="text-red-500">Grub</span>ly
                        </div>
                    </Link>

                    {/* Search Bar - Always visible but changes style when scrolled */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-6">
                        <form className="relative w-full">
                            <input
                                type="text"
                                placeholder="Find restaurants, dishes, or cuisines..."
                                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <IoSearchSharp className="text-xl" />
                            </button>
                        </form>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/signup"
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    Signup
                                </Link>
                                <Link
                                    href="/login"
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    Login
                                </Link>
                            </div>
                    </div>
                </div>

                {/* Mobile Search - Only shows when scrolled */}
                {isScrolled && (
                    <div className="mt-3 md:hidden">
                        <form className="relative">
                            <input
                                type="text"
                                placeholder="Search restaurants..."
                                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <IoSearchSharp className="text-xl" />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;