import React, { useState } from "react";

const Navbar = () => {
    const [device, setDevice] = useState("desktop");

    const screenSize = {
        desktop: "1280px",
        tablet: "768px",
        mobile: "375px",
    };

    const renderDeviceButton = (type) => (
        <button
            key={type}
            onClick={() => setDevice(type)}
            className={`px-2 py-1 rounded text-sm capitalize ${device === type ? "bg-white text-black" : "bg-gray-700"
                }`}
        >
            {type}
        </button>
    );

    return (
        <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
            {/* Left */}
            <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1H7V7a5 5 0 0 0-5 5s1 1 1 1h12a5 5 0 0 0-5-5z" />
                    </svg>
                </div>

                {/* Nav Dropdown */}
                <div className="relative group">
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <span className="text-sm font-medium">Home</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="absolute hidden group-hover:block bg-white text-black shadow-md rounded-md mt-2 z-10 w-40">
                        <ul className="p-2 space-y-1">
                            <li className="hover:bg-gray-200 px-2 py-1 cursor-pointer">Option 1</li>
                            <li className="hover:bg-gray-200 px-2 py-1 cursor-pointer">Option 2</li>
                        </ul>
                    </div>
                </div>

                {/* Autosave */}
                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1H7V7a5 5 0 0 0-5 5s1 1 1 1h12a5 5 0 0 0-5-5z" />
                    </svg>
                    <span className="text-sm">Autosave on</span>
                </div>
            </div>

            {/* Center */}
            <div className="flex items-center space-x-6">
                {/* Device Switcher */}
                <div className="flex space-x-2">
                    {["desktop", "tablet", "mobile"].map(renderDeviceButton)}
                </div>

                {/* Screen Size */}
                <span className="text-sm">{screenSize[device]}</span>

                {/* Zoom */}
                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1H7V7a5 5 0 0 0-5 5s1 1 1 1h12a5 5 0 0 0-5-5z" />
                    </svg>
                    <span className="text-sm">100%</span>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="relative">
                    <img src="https://via.placeholder.com/30" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></span>
                </div>

                {/* Buttons */}
                <button className="bg-purple-500 px-4 py-2 rounded text-sm">Upgrade</button>
                <button className="bg-blue-500 px-4 py-2 rounded text-sm">Publish</button>
            </div>
        </div>
    );
};

export default Navbar;
