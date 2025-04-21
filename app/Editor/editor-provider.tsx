"use client";

import React, { createContext, Dispatch } from "react";
import { EditorBtns } from "../lib/constants";
import { EditorAction } from "./editor-action";

export type DeviceTypes = 'Desktop' | 'Tablet' | 'Mobile';

export type EditorElement = {
    id: string;
    type: EditorBtns | null;
    name: string;
    styles: React.CSSProperties;
    content: EditorElement[] | { href?: string; innerText?: string; src?: string; alt?: string };
};

export type Editor = {
    [x: string]: any;
    liveMode: boolean;
    elements: EditorElement[];
    selectedElement: EditorElement;
    device: DeviceTypes;
    previewMode: boolean;
    funnelPageId: string;
};

export type HistoryState = {
    history: Editor[];
    currentlndex: number;
};

export type EditorState = {
    editor: Editor;
    history: HistoryState;
};

const initialEditorState: EditorState["editor"] = {
    elements: [
        {
            id: "body",
            content: [],
            name: "Body",
            styles: {},
            type: "__body",
        },
    ],
    selectedElement: {
        id: "",
        content: [],
        name: "",
        styles: {},
        type: null,
    },
    device: "Desktop",
    previewMode: false,
    liveMode: false,
    funnelPageId: "",
};

const initialHistoryState: HistoryState = {
    history: [initialEditorState],
    currentlndex: 0,
};

const initialState: EditorState = {
    editor: initialEditorState,
    history: initialHistoryState,
};

const addAnElement = (editorArray: EditorElement[], action: EditorAction): EditorElement[] => {
    if (action.type !== "ADD_ELEMENT") {
        throw Error("Wrong action type for addAnElement");
    }
    return editorArray.map((item) => {
        if (item.id === action.payload.containerId && Array.isArray(item.content)) {
            return {
                ...item,
                content: [...item.content, action.payload.elementDetails],
            };
        } else if (Array.isArray(item.content)) {
            return {
                ...item,
                content: addAnElement(item.content, action),
            };
        }
        return item;
    });
};

const updateAnElement = (editorArray: EditorElement[], action: EditorAction): EditorElement[] => {
    if (!Array.isArray(editorArray)) {
        console.error("editorArray is not an array:", editorArray);
        return [];
    }
    if (action.type !== "UPDATE_ELEMENT") {
        throw Error("Wrong action type for updateAnElement");
    }
    return editorArray.map((item) => {
        if (item.id === action.payload.elementDetails.id) {
            return { ...item, ...action.payload.elementDetails };
        } else if (Array.isArray(item.content)) {
            return {
                ...item,
                content: updateAnElement(item.content, action),
            };
        }
        return item;
    });
};

const deleteAnElement = (editorArray: EditorElement[], action: EditorAction): EditorElement[] => {
    if (action.type !== "DELETE_ELEMENT") {
        throw Error("Wrong action type for deleteAnElement");
    }
    return editorArray
        .map((item) => {
            if (Array.isArray(item.content)) {
                return { ...item, content: deleteAnElement(item.content, action) };
            }
            return item;
        })
        .filter((item) => item.id !== action.payload.elementDetails.id);
};

const editorReducer = (state: EditorState = initialState, action: EditorAction): EditorState => {
    switch (action.type) {
        case "ADD_ELEMENT":
            const addedEditor = {
                ...state.editor,
                elements: addAnElement(state.editor.elements, action),
            };
            return {
                ...state,
                editor: addedEditor,
                history: {
                    history: [...state.history.history.slice(0, state.history.currentlndex + 1), addedEditor],
                    currentlndex: state.history.currentlndex + 1,
                },
            };

        case "UPDATE_ELEMENT":
            const updatedElements = updateAnElement(state.editor.elements, action);
            const isSelectedUpdated = state.editor.selectedElement.id === action.payload.elementDetails.id;
            const updatedEditor = {
                ...state.editor,
                elements: updatedElements,
                selectedElement: isSelectedUpdated ? action.payload.elementDetails : {
                    id: '',
                    content: [],
                    name: '',
                    styles: {},
                    type: null,
                },
            };
            return {
                ...state,
                editor: updatedEditor,
                history: {
                    history: [...state.history.history.slice(0, state.history.currentlndex + 1), updatedEditor],
                    currentlndex: state.history.currentlndex + 1,
                },
            };

        case "DELETE_ELEMENT":
            const newElements = deleteAnElement(state.editor.elements, action);
            const deletedEditor = {
                ...state.editor,
                elements: newElements,
            };
            return {
                ...state,
                editor: deletedEditor,
                history: {
                    history: [...state.history.history.slice(0, state.history.currentlndex + 1), deletedEditor],
                    currentlndex: state.history.currentlndex + 1,
                },
            };
        case "COPY_ELEMENT":
            return {
                ...state,
                editor: {
                    ...state.editor,
                    copiedElement: action.payload.elementDetails, // Store the copied element
                },
            };

        case "CHANGE_CLICKED_ELEMENT":
            return {
                ...state,
                editor: {
                    ...state.editor,
                    selectedElement: action.payload.elementDetails || {
                        id: "",
                        content: [],
                        name: "",
                        styles: {},
                        type: null,
                    },
                },
                history: {
                    ...state.history,
                    history: [...state.history.history.slice(0, state.history.currentlndex + 1), state.editor],
                    currentlndex: state.history.currentlndex + 1,
                },
            };

        case "CHANGE_DEVICE":
            return {
                ...state,
                editor: {
                    ...state.editor,
                    device: action.payload.device,
                },
            };

        case "TOGGLE_PREVIEW_MODE":
            return {
                ...state,
                editor: {
                    ...state.editor,
                    previewMode: !state.editor.previewMode,
                },
            };

        case "TOGGLE_LIVE_MODE":
            return {
                ...state,
                editor: {
                    ...state.editor,
                    liveMode: action.payload ? action.payload.value : !state.editor.liveMode,
                },
            };

        case "UNDO":
            if (state.history.currentlndex > 0) {
                const prevIndex = state.history.currentlndex - 1;
                return {
                    ...state,
                    editor: state.history.history[prevIndex],
                    history: {
                        ...state.history,
                        currentlndex: prevIndex,
                    },
                };
            }
            return state;

        case "REDO":
            if (state.history.currentlndex < state.history.history.length - 1) {
                const nextIndex = state.history.currentlndex + 1;
                return {
                    ...state,
                    editor: state.history.history[nextIndex],
                    history: {
                        ...state.history,
                        currentlndex: nextIndex,
                    },
                };
            }
            return state;

        case "LOAD_DATA":
            return {
                ...initialState,
                editor: {
                    ...initialState.editor,
                    elements: Array.isArray(action.payload.elements) ? action.payload.elements : [],
                    liveMode: !!action.payload.withLive,
                },
            };

        case "SET_FUNNEL_PAGE_ID":
            const updatedEditorWithFunnel = {
                ...state.editor,
                funnelPageId: action.payload.funnelPageId,
            };
            return {
                ...state,
                editor: updatedEditorWithFunnel,
                history: {
                    history: [...state.history.history.slice(0, state.history.currentlndex + 1), updatedEditorWithFunnel],
                    currentlndex: state.history.currentlndex + 1,
                },
            };

        default:
            return state;
    }
};

export type EditorContextData = {
    device: DeviceTypes;
    previewMode: boolean;
    setPreviewMode: (previewMode: boolean) => void;
    setDevice: (device: DeviceTypes) => void;
};

export const EditorContext = createContext<{
    state: EditorState;
    dispatch: Dispatch<EditorAction>;
    subaccountId: string;
    funnelId: string;
}>({
    state: initialState,
    dispatch: () => undefined,
    subaccountId: '',
    funnelId: '',
});

type EditorProps = {
    children: React.ReactNode;
    subaccountId: string;
    funnelId: string;
};

const EditorProvider = ({ children, subaccountId, funnelId }: EditorProps) => {
    const [state, dispatch] = React.useReducer(editorReducer, initialState);

    return (
        <EditorContext.Provider value={{ state, dispatch, subaccountId, funnelId }}>
            {children}
        </EditorContext.Provider>
    );
};

export const useEditor = () => {
    const context = React.useContext(EditorContext);
    if (!context) {
        throw new Error("useEditor must be used within an EditorProvider");
    }
    return context;
};

export default EditorProvider;
