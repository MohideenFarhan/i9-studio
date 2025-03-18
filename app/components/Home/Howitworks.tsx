import React from 'react'

const Howitworks = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">How It Works</h2>
                <p className="mt-6 text-lg text-gray-600">
                    Build your professional website in just a few easy steps.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { step: "1", title: "Choose a Template", desc: "Pick from a variety of stunning website templates." },
                        { step: "2", title: "Customize It", desc: "Use the drag-and-drop editor to customize every detail." },
                        { step: "3", title: "Publish & Grow", desc: "Launch your site and start attracting visitors instantly." },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white bg-indigo-600 rounded-full">
                                {item.step}
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">{item.title}</h3>
                            <p className="mt-3 text-lg text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Howitworks
