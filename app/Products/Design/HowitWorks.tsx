"use client";
import React, { useEffect, useState } from 'react';
import Footer from './FooterSection';

const HowitWorks = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevent hydration error

    return (
        <>
            <section className="bg-gradient-to-r from-gray-200 via-amber-50 to-blue-200 shadow-lg py-12 sm:py-14 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Unlock the Full Power of Web Design
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4 sm:mt-6">
                            Explore Every Creative Possibility <br />
                            <u className='font-bold'>_____________________________</u>
                        </p>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                        {[
                            { title: "Adaptive Design", desc: "Effortlessly tailor your website for all screen sizes with fully customizable breakpoints." },
                            { title: "Precision Pixel Control", desc: "Design in pixels while ensuring automatic conversion to responsive units for flawless adaptability." },
                            { title: "Seamless Figma Integration", desc: "Export Figma designs directly into Studio and push creative boundaries without limitations." },
                            { title: "AI-Driven Responsiveness", desc: "Achieve instant responsiveness with a single click—no manual adjustments needed." },
                            { title: "Smart Positioning & Layouts", desc: "Define precise margins, docking, and element positioning at every breakpoint." },
                            { title: "Pre-Built Responsive Components", desc: "Leverage out-of-the-box features like scaling, hugging, fixed positioning, and screen-fitting elements." },
                            { title: "Dynamic Animations & Interactions", desc: "Bring elements to life with entrance, hover, click, loop, and scroll-based animations." },
                            { title: "3D Motion with Parallax Effects", desc: "Create immersive experiences with mouse-based movement and depth effects—no coding required." },
                            { title: "Advanced Layout Tools", desc: "Utilize Section Grids, CSS Grid, Flexbox, Repeaters, and Stacks to craft structured, scalable designs." },
                            { title: "Fluid Typography & Scaling", desc: "Ensure text scales proportionally across devices with custom limits and dynamic adjustments." },
                            { title: "Custom CSS Control", desc: "Modify every pixel with full access to custom or imported CSS styles." },
                            { title: "Engaging Visual Elements", desc: "Add creative effects like masked text and video, animated section dividers, and custom cursors." }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                                <p className="text-sm sm:text-lg text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HowitWorks;
