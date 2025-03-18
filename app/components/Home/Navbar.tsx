'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Product', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Company', href: '/company' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-md">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="text-3xl font-bold text-gray-900">
                        i9 Studios
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700">
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-2xl font-light text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/login" className="text-2xl font-light text-gray-900">
                        Log in &rarr;
                    </Link>
                </div>
            </nav>

            {isClient && (
                <Dialog as="div" className="relative z-50 lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 bg-black bg-opacity-50" />

                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
                        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 text-gray-700">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <div className="mt-6 space-y-4">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="block text-lg font-semibold text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="/login" className="block text-lg font-semibold text-gray-900">
                                Log in
                            </Link>
                        </div>
                    </div>
                </Dialog>
            )}
        </header>
    );
}
