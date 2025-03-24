"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Brand Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">intra9ine</h2>
                    <p className="mt-3 text-lg md:text-xl text-gray-400">
                        Creating stunning websites with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">Quick Links</h3>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:text-white text-lg">About Us</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white text-lg">Services</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white text-lg">Contact</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white text-lg">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">Follow Us</h3>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <Link href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={26} /></Link>
                        <Link href="#" className="text-gray-400 hover:text-white"><FaTwitter size={26} /></Link>
                        <Link href="#" className="text-gray-400 hover:text-white"><FaInstagram size={26} /></Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center text-lg text-gray-500 px-4">
                &copy; {currentYear} intra9ine. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
