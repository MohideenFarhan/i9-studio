import React from 'react';
import Image from 'next/image';
import Howitworks from './Howitworks';

const Showcase = () => {
    return (
        <div>
            <Howitworks />
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Explore Stunning Designs
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Choose from a variety of high-quality templates for any industry.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { img: "Business.jpg", title: "Business" },
                            { img: "Portfolio.jpg", title: "Portfolio" },
                            { img: "Ecommerce.jpg", title: "E-Commerce" },
                        ].map((template, index) => (
                            <div
                                key={index}
                                className="relative group w-full h-60 rounded-xl shadow-lg"
                            >
                                <Image
                                    src={`/${template.img}`} // Ensure images exist in /public folder
                                    alt={template.title}
                                    width={500}
                                    height={300}
                                    // loading="lazy"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover w-full h-full"
                                    priority={index === 0} // Load first image faster
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h3 className="text-2xl font-semibold text-white">{template.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Showcase;
