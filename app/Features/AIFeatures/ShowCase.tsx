"use client";

import Footer from "./Footer";

export default function Showcase() {
    return (
        <><section className="relative w-full overflow-hidden px-4 flex items-left bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 sm:gap-12 mt-18 max-w-[2560px] md:mx-20 px-10">
                {/* Left Column - Heading (Stays in Position) */}
                <h1 className="font-bold text-2xl text-left sm:text-6xl md:text-6xl leading-tight">
                    Boost Your Writing Flow
                </h1>

                {/* Right Column - Paragraph & Button (Aligned at Bottom) */}
                <div className="flex flex-col justify-end h-full">
                    <p className="mt-4 md:mx-20 text-lg sm:text-xl max-w-2xl  text-gray-600">
                        Overcome writer’s block with AI-powered inspiration. <br />Get copy tailored to your needs,factoring in character limits and user intent effortlessly.
                    </p>
                    <button className="w-50 md:mx-20 md:mb-20 px-5 py-4 mb-10 text-base font-semibold mt-6 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition">
                        Start Creating
                    </button>
                </div>
            </div>
        </section><Footer /></>
    );
}
