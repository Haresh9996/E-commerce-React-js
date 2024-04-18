import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-10">
                    <div className="text-left">
                        <h4 className="text-lg font-semibold mb-4">About Shop</h4>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id quam et urna fermentum dignissim.</p>
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="list-none ">
                            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                            <li><Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-300">123 Main Street, City, Country</p>
                        <p className="text-gray-300">Email: info@example.com</p>
                        <p className="text-gray-300">Phone: +123-456-7890</p>
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates, promotions, and special offers.</p>
                        <form>
                            <div className="flex flex-col">
                                <input type="email" id="email" name="email" placeholder="Enter your email" className="rounded-md px-4 py-2 border border-gray-700 focus:outline-none focus:border-indigo-500 text-gray-900" />
                            </div>
                            <button type="submit" className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 text-gray-300 text-center">
                    <p>&copy; 2024 HI Tech. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
