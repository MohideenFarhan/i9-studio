"use client";
import React from 'react';
import FigmaToWebsite from './TogglesSection';

const TestimonialSection = () => {
    return (
        <>
            <section className="max-w-full px-6 py-16 md:px-12 xl:px-48 lg:px-32 bg-gradient-to-r from-cyan-100 via-amber-50 to-cyan-300 shadow-lg">
                <div className="flex flex-col items-start md:flex-row gap-8">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                        Customize Your Cursor with Any Vector
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                        Easily upload an SVG or select from thousands of options to create a unique cursor. Apply it to elements, sections, or entire pages for a personalized touch.
                    </p>
                </div>
            </section>

            {/* Ensure FigmaToWebsite is correctly handled */}
            <FigmaToWebsite />
        </>
    );
};

export default TestimonialSection;
