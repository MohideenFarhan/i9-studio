import Link from "next/link";
import React from "react";

const CTA = () => {
    return (
        <section className="py-20 bg-[#CEEAF7] text-black text-center">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold sm:text-5xl">
                    Start Building Your Dream Website Today
                </h2>
                <p className="mt-4 text-lg text-black/90">
                    Get access to powerful tools and stunning designs to create a website that stands out.
                </p>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="#"
                        className="px-6 py-3 text-lg font-medium bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
