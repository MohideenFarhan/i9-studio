"use client";

import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Sidebar from "./Sidebar";
import Panel from "./Panel";

export default function DragDropEditor() {
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const handleDragEnd = (event) => {
        const { active } = event;
        if (!active || !active.id) return;

        setElements((prev) => [
            ...prev,
            { id: `${active.id}-${prev.length}`, type: active.id, text: "" },
        ]);
    };

    const updateElement = (updatedElement) => {
        setElements((prev) =>
            prev.map((el) => (el.id === updatedElement.id ? updatedElement : el))
        );
        setSelectedElement(updatedElement); // ✅ Ensure selection updates properly
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="flex h-screen w-screen bg-gray-200">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Editor Area */}
                <div className="flex-1 flex flex-col items-center justify-start p-6">
                    {/* Simulated Website Layout */}
                    <div className="w-[90%] max-w-10xl min-h-[1000px] bg-white shadow-md rounded-lg p-6 border">
                        {/* Navbar */}
                        <div className="flex justify-between items-center border-b pb-3">
                            <div className="text-lg font-bold">Business Name</div>
                            <div className="text-blue-500 cursor-pointer">Home</div>
                        </div>

                        {/* Editable Drop Area */}
                        <div className="min-h-[300px] mt-6 p-4 bg-gray-100 border-dashed border-2">
                            {elements.map((el) => (
                                <div
                                    key={el.id}
                                    className={`p-2 border bg-white shadow-md rounded-md mb-2 cursor-pointer ${selectedElement?.id === el.id ? "border-blue-500" : ""
                                        }`}
                                    onClick={() => setSelectedElement(el)}
                                >
                                    {el.type === "text" && <p>📝 {el.text || "Text Block"}</p>}
                                    {el.type === "image" && <p>🖼 Image Block</p>}
                                    {el.type === "button" && (
                                        <button className="p-1 bg-blue-500 text-white rounded">
                                            🔘 Button
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-4 text-center text-gray-500">
                            © 2025 by Business Name.
                        </div>
                    </div>
                </div>

                {/* Properties Panel */}
                <Panel selectedElement={selectedElement} updateElement={updateElement} />
            </div>
        </DndContext>
    );
}
