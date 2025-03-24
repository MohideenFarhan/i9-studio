"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HowitWorks from "./HowitWorks";

export default function FigmaToWebsite() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration error

    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 py-10 sm:py-16 bg-gray-100 dark:bg-gray-900 w-full">
                {/* Left Content */}
                <div className="w-full xl:mx-12 md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Bring Your Figma Designs to Life
                    </h2>
                    <p className="mt-4 sm:mt-6 text-left text-gray-700 text-sm sm:text-lg md:text-xl dark:text-gray-300">
                        Design, customize, and launch your website directly from Figma. Add animations, AI, and business features for a seamless web-building experience.
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                        <button className="px-5 sm:px-4 py-2 sm:py-3 bg-white text-black font-semibold flex items-center gap-2 rounded-full shadow-md hover:scale-105 transition">
                            Install Plugin
                            <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" fill="currentColor" viewBox="0 0 13 10">
                                <path d="M10.684 4.389 7.82 1.292l.633-.585 3.795 4.102-3.785 4.406-.653-.562 2.922-3.402h-9.3L1.43 9.884H.569V4.39h10.115Z" />
                            </svg>
                        </button>
                        <button className="w-full sm:w-64 md:w-72 flex items-center gap-3 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-indigo-600 text-white text-sm sm:text-lg md:text-2xl font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition">
                            Learn More
                            <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" fill="currentColor" viewBox="0 0 13 10">
                                <path d="M10.684 4.389 7.82 1.292l.633-.585 3.795 4.102-3.785 4.406-.653-.562 2.922-3.402h-9.3L1.43 9.884H.569V4.39h10.115Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full mx-4 md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <Image
                        src="/Figma.jpg"
                        alt="Figma to Website"
                        width={800}
                        height={500}
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                    />
                </div>
            </section>
            <HowitWorks />
        </>
    );
}
