import Image from "next/image";
import React from "react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, Tech Innovations",
        quote:
            "Using this platform has transformed our business. The design flexibility is incredible!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "James Carter",
        role: "Founder, Creative Studio",
        quote:
            "A fantastic tool! It helped us build a professional website quickly and efficiently.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Emily Watson",
        role: "Marketing Manager, BrandBoost",
        quote:
            "Our online presence has skyrocketed since using this tool. Absolutely love it!",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
        name: "Michael Lee",
        role: "Developer, WebWorks",
        quote:
            "Super intuitive and powerful! The best website-building experience I've had.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-900 text-center">
                    What Our Clients Say
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    Hear directly from those who have built their success with us.
                </p>


                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-start"
                        >

                            <div className="flex items-center">
                                <div className="relative w-12 h-12">
                                    <Image src={testimonial.image} alt={testimonial.name} fill className="rounded-full object-cover" />
                                </div>

                                <div className="ml-3">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>


                            <p className="text-gray-700 italic mt-4">
                                &quot;{testimonial.quote}&quot;
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
