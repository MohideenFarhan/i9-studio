"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "./Image";

const CTA = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Avoid hydration mismatch

    return (
        <>
            <section className="relative w-full overflow-hidden px-4 flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 sm:gap-12 mt-18 max-w-[2560px] md:mx-18 px-10">
                    {/* Left Column - Heading */}
                    <h1 className="font-bold text-3xl sm:text-6xl md:text-6xl leading-tight">
                        Accelerate your projects <br /> with adaptive AI solutions.
                    </h1>

                    {/* Right Column - Paragraph & Button */}
                    <div className="flex flex-col justify-end h-full">
                        <p className="mt-4 md:mx-20 text-lg sm:text-xl max-w-2xl text-gray-600">
                            Effortlessly adapt sections for any screen size in a click. <br />
                            Save hours while maintaining full control and making precise adjustments as needed.
                        </p>
                        <button className="w-50 md:mx-20 mb-20 md:mb-20 px-5 py-4 text-base font-semibold mt-6 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition">
                            Start Creating
                        </button>
                    </div>
                </div>
            </section>
            <ImageComponent />
        </>
    );
};

export default CTA;
