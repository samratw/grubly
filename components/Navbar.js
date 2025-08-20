import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaShoppingCart, FaPlusCircle, FaEdit, FaMotorcycle } from "react-icons/fa";
import { MdClose, MdInfoOutline } from 'react-icons/md';
import { IoSearchSharp, IoRestaurantOutline } from 'react-icons/io5';

const Navbar = ({ logout, logOut }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [cart, setCart] = useState({});
    const [cartTotal, setCartTotal] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (window.location.href.includes(`${process.env.NEXT_PUBLIC_HOST}/seller`)) {
            setIsSeller(true);
            const myuser = JSON.parse(localStorage.getItem("seller"));
            if (myuser) {
                setName(myuser.name);
            }
        } else {
            setIsSeller(false);
            const myuser = JSON.parse(localStorage.getItem("user"));
            if (myuser) {
                setName(myuser.name);
            }
        }
    }, [router]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleEsewaCheckout = async () => {
        const response = await fetch('/api/esewa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cart: Object.values(cart) }),
        });

        const res = await response.json();
        if (res.url) {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cart: Object.values(cart),
                    user_email: JSON.parse(localStorage.getItem("user")).email,
                    phone,
                    address,
                    paymentMethod: 'eSewa'
                }),
            });
            await response.json();
            window.location.href = res.url;
        }
    };

    const handleCashPay = async () => {
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart: Object.values(cart),
                user_email: JSON.parse(localStorage.getItem("user")).email,
                phone,
                address,
                paymentMethod: 'Cash'
            }),
        });

        const data = await response.json();
        if (data.success) {
            router.push('/success');
        } else {
            router.push('/failure');
        }
    };

    if (!isSeller) {
        return (
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'py-3'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="flex items-center text-orange-500 text-2xl md:text-3xl font-bold">
                                <span className="text-green-500">Koo</span>King
                            </div>
                        </Link>

                        {/* Search Bar - Always visible but changes style when scrolled */}
                        <div className="hidden md:flex flex-1 max-w-xl mx-6">
                            <form onSubmit={handleSearch} className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Find restaurants, dishes, or cuisines..."
                                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
                                >
                                    <IoSearchSharp className="text-xl" />
                                </button>
                            </form>
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            {!localStorage.getItem("user") ? (
                                <div className="flex items-center gap-3">
                                    <button
                                        className="relative flex items-center bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 transition-colors"
                                        onClick={() => setCartOpen(true)}
                                    >
                                        <FaShoppingCart className="mr-2" />
                                        View Cart

                                    </button>
                                    <Link
                                        href="/login"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Login
                                    </Link>
                                </div>
                            ) : (
                                <div className="relative">
                                    <button
                                        onClick={() => setDropdown(!dropdown)}
                                        className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 rounded-full pl-3 pr-2 py-1 transition-colors duration-200"
                                    >
                                        <span className="text-sm font-medium text-gray-700">Hey, {name.split(" ")[0]}</span>
                                        <FaChevronDown className={`text-gray-600 transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`} />
                                    </button>

                                    {dropdown && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-40"
                                                onClick={() => setDropdown(false)}
                                            ></div>
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden">
                                                <div className="p-2 border-b border-gray-100">
                                                    <p className="text-sm font-medium text-gray-700 truncate">{name}</p>
                                                    <p className="text-xs text-gray-500">Welcome back!</p>
                                                </div>
                                                <ul className="py-1">
                                                    <li>
                                                        <Link
                                                            href="/myaccount"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                                                            onClick={() => setDropdown(false)}
                                                        >
                                                            My Account
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/orders"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                                                            onClick={() => setDropdown(false)}
                                                        >
                                                            My Orders
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={logout}
                                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                                                        >
                                                            Log Out
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Search - Only shows when scrolled */}
                    {isScrolled && (
                        <div className="mt-3 md:hidden">
                            <form onSubmit={handleSearch} className="relative">
                                <input
                                    type="text"
                                    placeholder="Search restaurants..."
                                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
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
                {cartOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b">
                                <h3 className="text-2xl font-bold text-gray-900">Checkout</h3>
                                <button
                                    onClick={() => setCartOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <MdClose className="text-2xl" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Cart Items */}
                                    <div className="p-6 border-r">
                                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                                            <FaShoppingCart className="mr-2 text-orange-500" />
                                            Order Summary
                                        </h4>

                                        {cartItemCount === 0 ? (
                                            <div className="text-center py-8">
                                                <FaShoppingCart className="text-4xl text-gray-300 mx-auto mb-4" />
                                                <p className="text-gray-500">Your cart is empty</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                {Object.values(cart).map((cartItem) => (
                                                    <div key={cartItem._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                        <div>
                                                            <span className="font-medium">{cartItem.name}</span>
                                                            <span className="text-sm text-gray-500 ml-2">x{cartItem.quantity}</span>
                                                        </div>
                                                        <span className="font-semibold">Rs. {cartItem.price * cartItem.quantity}</span>
                                                    </div>
                                                ))}

                                                <div className="border-t pt-3 mt-3">
                                                    <div className="flex justify-between items-center font-bold text-lg">
                                                        <span>Total:</span>
                                                        <span className="text-orange-500">Rs. {cartTotal}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Checkout Form */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                                            <FaMotorcycle className="mr-2 text-orange-500" />
                                            Delivery Information
                                        </h4>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter your phone number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                                <textarea
                                                    placeholder="Enter your complete address"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    rows={3}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                />
                                            </div>

                                            <div className="bg-blue-50 p-3 rounded-lg">
                                                <div className="flex items-start">
                                                    <MdInfoOutline className="text-blue-500 text-xl mr-2 mt-0.5" />
                                                    <p className="text-sm text-blue-700">
                                                        Please ensure your address is accurate for timely delivery
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-3 pt-4">
                                                <button
                                                    onClick={handleEsewaCheckout}
                                                    disabled={!(phone && address && cartItemCount > 0)}
                                                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 disabled:bg-green-200 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                                                >
                                                    <Image
                                                        src="/esewa-logo.png"
                                                        alt="eSewa"
                                                        width={60}
                                                        height={20}
                                                        className="mr-2"
                                                    />
                                                    Pay with eSewa
                                                </button>

                                                <button
                                                    onClick={handleCashPay}
                                                    disabled={!(phone && address && cartItemCount > 0)}
                                                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-orange-200 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    Pay on Delivery
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        );
    } else {
        return (
            <header className="sticky top-0 z-50 bg-white shadow-md py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Seller Logo and Navigation */}
                        <div className="flex items-center space-x-6">
                            <Link href="/seller" className="flex items-center space-x-2">
                                <IoRestaurantOutline className="text-orange-500 text-xl" />
                                <span className="text-orange-500 text-xl font-bold">KooKing Seller</span>
                            </Link>

                            {localStorage.getItem("seller") && (
                                <nav className="hidden md:flex items-center space-x-1">
                                    <Link
                                        href="/seller/additem"
                                        className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                                    >
                                        <FaPlusCircle className="text-orange-500" />
                                        <span>Add Item</span>
                                    </Link>
                                    <Link
                                        href="/seller/updateitem"
                                        className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                                    >
                                        <FaEdit className="text-orange-500" />
                                        <span>Update Item</span>
                                    </Link>
                                </nav>
                            )}
                        </div>

                        {/* Seller Actions */}
                        <div className="flex items-center space-x-4">
                            {!localStorage.getItem("seller") ? (
                                <Link
                                    href="/seller/login"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                                >
                                    Seller Login
                                </Link>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm text-gray-700 hidden sm:block">Welcome, {name}</span>
                                    <button
                                        onClick={logOut}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Seller Navigation */}
                    {localStorage.getItem("seller") && (
                        <nav className="mt-3 flex md:hidden justify-center space-x-4 border-t border-gray-100 pt-3">
                            <Link
                                href="/seller/additem"
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                            >
                                <FaPlusCircle className="text-orange-500" />
                                <span>Add Item</span>
                            </Link>
                            <Link
                                href="/seller/updateitem"
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                            >
                                <FaEdit className="text-orange-500" />
                                <span>Update Item</span>
                            </Link>
                        </nav>
                    )}
                </div>
            </header>
        );
    }
}

export default Navbar;