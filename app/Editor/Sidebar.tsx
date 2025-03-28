"use client"; // ✅ Makes sure it's a client component

import Draggable from "./Draggable"; // ✅ Import Draggable separately

const Sidebar = () => {
    return (
        <div className="w-1/8 min-w-[200px] bg-gray-100 p-4 min-h-screen shadow-md border-r">
            <h2 className="text-lg font-bold mb-4">Elements</h2>
            <Draggable id="text">📝 Text Block</Draggable>
            <Draggable id="image">🖼 Image Block</Draggable>
            <Draggable id="button">🔘 Button Block</Draggable>
        </div>
    );
};

export default Sidebar;
