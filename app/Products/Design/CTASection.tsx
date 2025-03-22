"use client"
import React from "react";
import ShowcaseSection from "./ShowcaseSection";

const CTASection = () => {
    return (
        <>
            <div className="w-full flex flex-col xl:flex-row items-start justify-start gap-6 md:gap-10 xl:gap-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-12 bg-gradient-to-r from-cyan-300 via-red-300 to-red-400 shadow-lg">

                {/* Heading Section */}
                <h2 className="w-full xl:w-1/2 xl:mx-12 text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight text-center xl:text-left">
                    Effortless Animations <br className="hidden md:block" /> and Effects
                </h2>

                {/* Content Section */}
                <div className="w-full xl:w-1/2  xl:text-left max-w-2xl">
                    <p className="text-base sm:text-lg md:text-xl  text-gray-700 leading-relaxed">
                        Engage users with interactive motion. Add life to your site with smooth
                        transitions, eye-catching movements, and immersive storytelling—featuring
                        hover effects, looping animations, mouse parallax, and more. Plus, unlock
                        additional possibilities with Lottie.
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center xl:justify-start">
                        <button className="mt-6 px-5 py-3 bg-white text-black font-semibold flex items-center gap-2 rounded-full shadow-md hover:scale-105 transition">
                            Watch Tutorial
                            <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 13 10">
                                <path d="M10.684 4.389 7.82 1.292l.633-.585 3.795 4.102-3.785 4.406-.653-.562 2.922-3.402h-9.3L1.43 9.884H.569V4.39h10.115Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <ShowcaseSection />
        </>
    );
};

export default CTASection;
