"use client"; // ✅ Ensure this is a client component

import React from "react";

const PropertiesPanel = ({ selectedElement, updateElement }) => {
    if (!selectedElement)
        return <p className="text-gray-600 text-center">Select an element to edit</p>;

    return (
        <div className="p-4 bg-white shadow-md rounded-lg border">
            <h3 className="text-md font-semibold mb-2">Edit {selectedElement.type}</h3>

            {selectedElement.type === "text" && (
                <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">Text:</label>
                    <input
                        type="text"
                        className="border p-2 w-full rounded mt-1"
                        value={selectedElement.text || ""}
                        onChange={(e) =>
                            updateElement({ ...selectedElement, text: e.target.value })
                        }
                    />
                </div>
            )}

            {/* Future updates for images/buttons */}
            {selectedElement.type === "button" && (
                <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">Button Text:</label>
                    <input
                        type="text"
                        className="border p-2 w-full rounded mt-1"
                        value={selectedElement.text || "Click Me"}
                        onChange={(e) =>
                            updateElement({ ...selectedElement, text: e.target.value })
                        }
                    />
                </div>
            )}
        </div>
    );
};

const Panel = ({ selectedElement, updateElement }) => {
    return (
        <div className="w-1/8 min-w-[250px] bg-gray-100 p-4 border-l shadow-md">
            <h2 className="text-lg font-bold mb-4">Properties</h2>
            <PropertiesPanel selectedElement={selectedElement} updateElement={updateElement} />
        </div>
    );
};

export default Panel;
