"use client";
import React, { useEffect, useState } from "react";
import Showcase from "./ShowCase";

const Features = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevents hydration mismatch

    return (
        <>
            <section className="relative w-full overflow-hidden px-4 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mt-12 max-w-[2560px] w-full px-4 md:px-10">
                    {/* Left Column - Heading */}
                    <h2 className="font-bold text-2xl sm:text-5xl md:text-6xl md:mx-20 leading-tight text-left md:text-left">
                        Discover Powerful Features <br /> for Seamless Workflow.
                    </h2>

                    {/* Right Column - Paragraph */}
                    <div className="flex flex-col justify-center md:items-start text-center md:text-left">
                        <p className="mt-4 md:mx-15 text-left sm:text-xl md:text-2xl max-w-2xl text-gray-600">
                            Experience next-level efficiency with our innovative tools. <br />
                            Designed to streamline your work and maximize productivity.
                        </p>
                        <button className="mt-4 md:mx-15 w-40 py-3 text-lg font-semibold bg-black text-white rounded-full shadow-md hover:bg-gray-200 transition">
                            Start Creating
                        </button>
                    </div>
                </div>

                {/* Video Section */}
                <div className="mt-12 md:mb-12 w-full flex justify-center">
                    <video
                        className="w-full max-w-3xl md:max-w-5xl rounded-lg shadow-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/Video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <Showcase />
        </>
    );
};

export default Features;
