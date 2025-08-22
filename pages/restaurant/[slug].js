import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';
import Item from '../../models/Item';
import Seller from '../../models/Seller';
import { 
  MdLocationOn, 
  MdOutlineCategory, 
  MdClose,
  MdInfoOutline
} from 'react-icons/md';
import { 
  FaHeart, 
  FaMinus, 
  FaPlus,
  FaStar,
  FaClock,
  FaMotorcycle
} from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Restaurant = ({ restaurant, items }) => {
    const [likes, setLikes] = useState(restaurant.likes);
    const [liked, setLiked] = useState(false);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [cartOpen, setCartOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');
    const [cart, setCart] = useState({});
    const router = useRouter();

    // Initialize cart from localStorage or empty object
    useEffect(() => {
        const savedCart = localStorage.getItem('restaurantCart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('restaurantCart', JSON.stringify(cart));
        
        // Update global cart count for navbar
        if (window.updateCartCount) {
            const itemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
            window.updateCartCount(itemCount);
        }
    }, [cart]);

    const groupedItems = items.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const categories = Object.keys(groupedItems);

    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => ({ 
            ...acc, 
            [item._id]: cart[item._id]?.quantity || 0 
        }), {})
    );

    const handleQuantityChange = (item, delta) => {
        setQuantities((prev) => {
            const newQty = Math.max(prev[item._id] + delta, 0);
            setCart((prevCart) => {
                const newCart = { ...prevCart };
                if (newQty > 0) {
                    newCart[item._id] = { 
                        ...item, 
                        quantity: newQty,
                        restaurantId: restaurant._id,
                        restaurantName: restaurant.name
                    };
                } else {
                    delete newCart[item._id];
                }
                return newCart;
            });
            return { ...prev, [item._id]: newQty };
        });
    };

    const handleLikeToggle = () => {
        setLiked((prevLiked) => !prevLiked);
        setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
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
                    paymentMethod: 'eSewa',
                    restaurantId: restaurant._id,
                    restaurantName: restaurant.name
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
                paymentMethod: 'Cash',
                restaurantId: restaurant._id,
                restaurantName: restaurant.name
            }),
        });

        const data = await response.json();
        if (data.success) {
            // Clear cart after successful order
            setCart({});
            setQuantities(items.reduce((acc, item) => ({ ...acc, [item._id]: 0 }), {}));
            router.push('/success');
        } else {
            router.push('/failure');
        }
    };

    const cartItemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    const cartTotal = Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Restaurant Header */}
            <div className="relative">
                <div className="h-48 w-full bg-gradient-to-r from-red-400 to-red-600"></div>
                <div className="container mx-auto px-4 -mt-24 relative z-10">
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-md mb-4 md:mb-0 md:mr-6">
                            <Image 
                                src={restaurant.image} 
                                alt={restaurant.name} 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{restaurant.name}</h1>
                                    <div className="flex items-center mt-2 text-gray-600">
                                        <MdLocationOn className="text-red-500 mr-1" />
                                        <span>{restaurant.address}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <div className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm">
                                            <FaStar className="mr-1" /> 4.8
                                        </div>
                                        <div className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm ml-2">
                                            <FaClock className="mr-1" /> 30-40 min
                                        </div>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={handleLikeToggle}
                                    className="flex items-center mt-4 md:mt-0 text-gray-700 hover:text-red-500 transition-colors"
                                >
                                    <FaHeart className={`text-xl ${liked ? 'text-red-500' : 'text-gray-400'}`} />
                                    <span className="ml-2 font-medium">{likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Category Navigation */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <MdOutlineCategory className="text-red-500 text-xl mr-2" />
                        <h2 className="text-xl font-bold text-gray-900">Menu Categories</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    const element = document.getElementById(category);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    activeCategory === category 
                                        ? 'bg-red-500 text-white' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        {Object.entries(groupedItems).map(([category, items]) => (
                            <div key={category} id={category} className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6 inline-block">
                                    {category}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {items.map((item) => (
                                        <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            <div className="p-5">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                                        <p className="text-lg font-bold text-red-500 mt-2">Rs. {item.price}</p>
                                                    </div>
                                                    {item.image && (
                                                        <div className="ml-4 w-20 h-20 relative rounded-lg overflow-hidden">
                                                            <Image 
                                                                src={item.image} 
                                                                alt={item.name} 
                                                                fill 
                                                                className="object-cover" 
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center space-x-2">
                                                        <button 
                                                            onClick={() => handleQuantityChange(item, -1)}
                                                            disabled={quantities[item._id] === 0}
                                                            className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-200 transition-colors"
                                                        >
                                                            <FaMinus className="text-xs" />
                                                        </button>
                                                        <span className="w-8 text-center font-bold">{quantities[item._id]}</span>
                                                        <button 
                                                            onClick={() => handleQuantityChange(item, 1)}
                                                            className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                                                        >
                                                            <FaPlus className="text-xs" />
                                                        </button>
                                                    </div>
                                                    {quantities[item._id] > 0 && (
                                                        <span className="text-sm font-semibold text-red-500">
                                                            Rs. {item.price * quantities[item._id]}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-xl shadow-md p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Order</h3>
                            
                            {cartItemCount === 0 ? (
                                <div className="text-center py-8">
                                    <div className="text-4xl text-gray-300 mx-auto mb-4">🛒</div>
                                    <p className="text-gray-500">Your cart is empty</p>
                                    <p className="text-sm text-gray-400 mt-1">Add items to place an order</p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                                        {Object.values(cart).map((cartItem) => (
                                            <div key={cartItem._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <div>
                                                    <span className="font-medium">{cartItem.name}</span>
                                                    <span className="text-sm text-gray-500 ml-2">x{cartItem.quantity}</span>
                                                </div>
                                                <span className="font-semibold">Rs. {cartItem.price * cartItem.quantity}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="font-semibold">Total:</span>
                                            <span className="text-xl font-bold text-red-500">Rs. {cartTotal}</span>
                                        </div>
                                        
                                        <button 
                                            onClick={() => setCartOpen(true)}
                                            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors mb-3"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Modal */}
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
                                        <div className="mr-2 text-red-500">🛒</div>
                                        Order Summary
                                    </h4>
                                    
                                    {cartItemCount === 0 ? (
                                        <div className="text-center py-8">
                                            <div className="text-4xl text-gray-300 mx-auto mb-4">🛒</div>
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
                                                    <span className="text-red-500">Rs. {cartTotal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Checkout Form */}
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaMotorcycle className="mr-2 text-red-500" />
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
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                            <textarea
                                                placeholder="Enter your complete address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                rows={3}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                                                <div className="mr-2 font-bold">eSewa</div>
                                                Pay with eSewa
                                            </button>
                                            
                                            <button 
                                                onClick={handleCashPay} 
                                                disabled={!(phone && address && cartItemCount > 0)}
                                                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 disabled:bg-red-200 disabled:cursor-not-allowed transition-colors"
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
        </div>
    );
};

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }
    const restaurant = await Seller.findById(context.query.id);
    const items = await Item.find({ email: restaurant.email });
    return {
        props: {
            restaurant: JSON.parse(JSON.stringify(restaurant)),
            items: JSON.parse(JSON.stringify(items))
        }
    };
}

export default Restaurant;