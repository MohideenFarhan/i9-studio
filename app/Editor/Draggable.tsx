"use client";

import { useDraggable } from "@dnd-kit/core";

const Draggable = ({ id, children }) => {
    const { attributes, listeners, setNodeRef } = useDraggable({ id });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="cursor-grab p-2 bg-white shadow-md rounded-md mb-3 border hover:bg-gray-100 transition"
        >
            {children}
        </div>
    );
};

export default Draggable;
