"use client";
import React from 'react';
import Image from 'next/image';
import TestimonialSection from './TestimonalSection';

const ShowcaseSection = () => {
    return (
        <>
            <section className="max-w-full px-6 md:px-12 lg:px-32 xl:px-48 py-16 flex flex-col gap-6">
                {/* Heading and Paragraph */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                        Take Full Control <br />Over Your CSS Customization
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                        Modify and enhance your designs with custom CSS. <br />Implement text masking, create dynamic animations,<br />
                        and fine-tune every element to achieve a pixel-perfect <br />layout across all screen sizes.
                    </p>
                </div>

                {/* Image Section - Scales Perfectly */}
                <div className="mt-10 w-full flex justify-center relative">
                    <div className="relative w-full max-w-[50rem] h-[500px] md:h-[40rem] lg:h-[50rem]">
                        <Image
                            src="/Website.jpg"
                            alt="Showcase preview"
                            fill
                            priority
                            className="object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <TestimonialSection />
        </>
    );
};

export default ShowcaseSection;
