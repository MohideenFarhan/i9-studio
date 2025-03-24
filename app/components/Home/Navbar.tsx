'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Product', href: '/Products', dropdown: true },
    { name: 'Features', href: '/features' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Company', href: '/company' },
];

const productDropdown = [
    { name: 'Design', href: '/Products/Design' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [productMenuOpen, setProductMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setProductMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (href: string) => {
        setMobileMenuOpen(false); // Close menu after navigation
        setTimeout(() => router.push(href), 100);
    };

    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <button onClick={() => handleNavigation('/')} className="text-3xl font-bold text-gray-900">
                        i9 Studios
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700">
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) =>
                        item.dropdown ? (
                            <div key={item.name} className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setProductMenuOpen(!productMenuOpen)}
                                    className="text-2xl font-light text-gray-900 flex items-center gap-1"
                                >
                                    {item.name}
                                    <svg
                                        className={`w-4 h-4 ml-1 text-gray-600 transition-transform ${productMenuOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {productMenuOpen && (
                                    <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                                        {productDropdown.map((subItem) => (
                                            <button
                                                key={subItem.name}
                                                onClick={() => handleNavigation(subItem.href)}
                                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {subItem.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button key={item.name} onClick={() => handleNavigation(item.href)} className="text-2xl font-light text-gray-900">
                                {item.name}
                            </button>
                        )
                    )}
                </div>

                {/* Login/Logout Button */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {session ? (
                        <button onClick={() => signOut()} className="text-2xl font-light text-gray-900">
                            Log out &rarr;
                        </button>
                    ) : (
                        <button onClick={() => signIn('google')} className="text-2xl font-light text-gray-900">
                            Log in &rarr;
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {isClient && (
                <Dialog as="div" className="relative z-50 lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 bg-black bg-opacity-50" />

                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
                        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 text-gray-700">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <div className="mt-6 space-y-4">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => setProductMenuOpen(!productMenuOpen)}
                                                className="block text-lg font-light text-gray-900 w-full text-left"
                                            >
                                                {item.name}
                                                <svg
                                                    className={`w-4 h-4 ml-1 inline transition-transform ${productMenuOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>

                                            {/* Updated Dropdown: Clicking "Design" directly navigates */}
                                            <div className="ml-4 mt-2 space-y-2">
                                                {productDropdown.map((subItem) => (
                                                    <button
                                                        key={subItem.name}
                                                        onClick={() => handleNavigation(subItem.href)}
                                                        className="block text-lg text-gray-700"
                                                    >
                                                        {subItem.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <button onClick={() => handleNavigation(item.href)} className="block text-lg font-semibold text-gray-900">
                                            {item.name}
                                        </button>
                                    )}
                                </div>
                            ))}
                            {session ? (
                                <button onClick={() => signOut()} className="block text-lg font-semibold text-gray-900">
                                    Log out
                                </button>
                            ) : (
                                <button onClick={() => signIn('google')} className="block text-lg font-semibold text-gray-900">
                                    Log in
                                </button>
                            )}
                        </div>
                    </div>
                </Dialog>
            )}
        </header>
    );
}
