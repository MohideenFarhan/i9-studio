"use client";
import React, { useState, useEffect } from "react";
import CTA from "./CTA";

const AIFeatures = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevents hydration mismatch

    return (
        <>
            <section
                className="relative flex flex-col items-start min-h-screen w-full overflow-hidden text-white px-4"
                style={{ background: "radial-gradient(circle, rgba(125,131,187,1) 0%, rgba(32,29,78,1) 34%, rgba(149,149,178,1) 100%)" }}
            >
                <div className="w-full mt-30 sm:mt-30 md:mt-80 mx-2 md:mb-10  md:mx-10 max-w-7xl text-left">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl md:text-7xl font-extrabold leading-tight">
                        Revolutionize teamwork <br />
                        with AI-powered efficiency.
                    </h1>
                    <p className="mt-4 text-base sm:text-xl md:text-2xl">
                        Streamline tasks and unlock creativity with intelligent automation.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="px-2 w-40 py-3 text-lg font-semibold bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition">
                            Start Creating
                        </button>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    );
};

export default AIFeatures;
