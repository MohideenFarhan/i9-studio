"use client"; // ✅ Ensures this page is a Client Component

import React from "react";
import DragDropEditor from "./DragDropEditor";

const Page = () => {
    return (
        <div>
            <DragDropEditor />
        </div>
    );
};

export default Page;
