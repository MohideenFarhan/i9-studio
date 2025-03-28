"use client";
import React from "react";
import CTASection from "./CTASection";
import VideoComponent from "../Design/VideoComponent";



const FeaturesSection = () => {
    return (
        <>
            <section className="max-w-[5000px] w-full px-6 md:px-12 xl:px-48 py-16 flex flex-col xl:flex-row items-center xl:items-start gap-16 xl:gap-32">
                {/* Left: Text Content */}
                <div className="xl:w-1/2 mx-auto w-full text-center xl:text-left flex flex-col">
                    <h2 className="text-5xl md:text-7xl xl:text-7xl font-bold text-gray-900 leading-tight">
                        Enhance Your Vision,<br /> Transform Your Experience
                    </h2>
                    <p className="mt-6 text-lg text-left md:text-2xl text-gray-700 leading-relaxed max-w-[800px] mx-auto xl:mx-0">
                        With just a few clicks, arrange and fine-tune your content effortlessly.
                        Resize, swap, and align elements with precision.
                    </p>
                    <button className="mt-8 w-64  md:w-lg flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-indigo-600 text-white text-lg md:text-2xl font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition">
                        Discover More
                        <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 13 10">
                            <path d="M10.684 4.389 7.82 1.292l.633-.585 3.795 4.102-3.785 4.406-.653-.562 2.922-3.402h-9.3L1.43 9.884H.569V4.39h10.115Z" />
                        </svg>
                    </button>
                </div>

                {/* Right: Video Section */}
                <div className="xl:w-1/2 w-full flex justify-center xl:justify-end">
                    <VideoComponent />
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </>
    );
};

export default FeaturesSection;
