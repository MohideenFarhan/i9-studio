"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorElement, useEditor } from "@/app/Editor/editor-provider";
import {
    Folder,
    Text as TextIcon,
    Link as LinkIcon,
    LayoutGrid,
    Rows2Icon,
    Columns2Icon,
    Columns3Icon,
    VideoIcon,
    ImageIcon,
    Contact2,
    CreditCard,
} from "lucide-react";
import clsx from "clsx";

// Get icon based on element type
const getIcon = (type: string) => {
    const t = type.toLowerCase();

    switch (t) {
        case "text":
            return <TextIcon className="w-4 h-4 mr-2" />;
        case "link":
            return <LinkIcon className="w-4 h-4 mr-2" />;
        case "container":
            return <LayoutGrid className="w-4 h-4 mr-2" />;
        case "section":
            return <Rows2Icon className="w-4 h-4 mr-2" />;
        case "2col":
            return <Columns2Icon className="w-4 h-4 mr-2" />;
        case "3col":
            return <Columns3Icon className="w-4 h-4 mr-2" />;
        case "video":
            return <VideoIcon className="w-4 h-4 mr-2" />;
        case "image":
            return <ImageIcon className="w-4 h-4 mr-2" />;
        case "contactform":
            return <Contact2 className="w-4 h-4 mr-2" />;
        case "paymentform":
            return <CreditCard className="w-4 h-4 mr-2" />;
        default:
            return <Folder className="w-4 h-4 mr-2" />;
    }
};

// Recursive layer renderer
const RenderLayer = ({ element, depth }: { element: EditorElement; depth: number }) => {
    const { state, dispatch } = useEditor();
    const isSelected = state.editor.selectedElement.id === element.id;
    const hasChildren = Array.isArray(element.content) && element.content.length > 0;

    if (hasChildren) {
        return (
            <AccordionItem value={element.id} className="border-none px-1">
                <AccordionTrigger
                    className={clsx(
                        "text-sm px-2 py-1 hover:bg-gray-100 rounded flex items-center gap-1 no-underline",
                        isSelected && "bg-gray-200"
                    )}
                    style={{ paddingLeft: depth * 12 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch({
                            type: "CHANGE_CLICKED_ELEMENT",
                            payload: { elementDetails: element },
                        });
                    }}
                >
                    {getIcon(element.type)}
                    {element.name || element.type}
                </AccordionTrigger>
                <AccordionContent>
                    {Array.isArray(element.content) &&
                        element.content.map((child) => (
                            <RenderLayer key={child.id} element={child} depth={depth + 1} />
                        ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    // Leaf node
    return (
        <div
            className={cn(
                "text-sm px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-1 no-underline",
                isSelected && "bg-gray-200"
            )}
            style={{ paddingLeft: depth * 12 }}
            onClick={() =>
                dispatch({
                    type: "CHANGE_CLICKED_ELEMENT",
                    payload: { elementDetails: element },
                })
            }
        >
            {getIcon(element.type)}
            {element.name || element.type}
        </div>
    );
};

const Layers = () => {
    const { state } = useEditor();
    const elements = state.editor.elements;

    return (
        <div className="bg-white text-black min-h-screen w-full p-2 overflow-auto text-sm">
            <Accordion
                type="multiple"
                className="w-full"
                defaultValue={elements.map((e) => e.id)}
            >
                {elements.map((el) => (
                    <RenderLayer key={el.id} element={el} depth={0} />
                ))}
            </Accordion>
        </div>
    );
};

export default Layers;
