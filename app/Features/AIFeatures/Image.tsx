"use client";
import React, { useState, useEffect } from "react";
import Features from "./Features";
import Image from "next/image";

const ImageComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevents hydration mismatch

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <Image
                    className="w-[80%] max-w-[1000px] rounded-lg shadow-lg"
                    src="/Home.jpg"
                    alt="Home"
                    width={1000} // Explicit width
                    height={600} // Explicit height
                    priority // Ensures it's loaded early
                />
            </div>
            <Features />
        </>
    );
};

export default ImageComponent;
