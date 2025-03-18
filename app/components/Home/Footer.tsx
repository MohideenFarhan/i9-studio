"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold">intra9ine</h2>
                    <p className="mt-4 text-gray-400">Creating stunning websites with ease.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white">Services</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="mt-4 flex space-x-4">
                        {isMounted && (
                            <>
                                <Link href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-500">
                &copy; {new Date().getFullYear()} intra9ine. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
