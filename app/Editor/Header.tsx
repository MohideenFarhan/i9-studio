import React from "react";

const Header = ({ siteUrl }) => {
    return (
        <div className="flex justify-center items-center  bg-white p-4 shadow-md">
            <div>
                <span className="text-gray-500">https://</span>
                <span className="font-bold">{siteUrl}</span>
                <a href="#" className="ml-2 text-blue-500 hover:underline">
                    Connect Domain
                </a>
            </div>
            {/* <div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded mr-2">Upgrade</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Publish</button>
            </div> */}
        </div>
    );
};

export default Header;