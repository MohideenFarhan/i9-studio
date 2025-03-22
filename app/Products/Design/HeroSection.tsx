'use client';
import FeaturesSection from "./FeaturesSection";

export default function HeroSection() {
    return (
        <>
            <section className="relative flex flex-col justify-center items-center min-h-screen w-full min-w-full overflow-hidden text-white bg-gradient-to-r from-amber-600 via-blue-300 to-amber-800 px-0">
                <div className="w-full max-w-7xl text-center px-4">
                    <h1 className="mt-20 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                        Elevate Your Brand,<br /> Design Beyond Limits
                    </h1>
                    <p className="mt-4 text-base sm:text-xl md:text-2xl">
                        Transform ideas into reality with stunning web experiences.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition">
                            Get Started
                        </button>
                        <button className="px-6 py-3 text-lg font-semibold border border-white rounded-full shadow-md hover:bg-white hover:text-black transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            <FeaturesSection />
        </>
    );
}
