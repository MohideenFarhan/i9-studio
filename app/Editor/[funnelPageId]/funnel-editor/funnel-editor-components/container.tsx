'use client';
import { EditorElement, useEditor } from '@/app/Editor/editor-provider';
import { defaultStyles, EditorBtns } from '@/app/lib/constants';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import React from 'react';
import Recursive from './recursive';
import { Copy, Trash } from 'lucide-react';
import { v4 } from 'uuid';

type Props = {
    element: EditorElement;
};

const Container = (props: Props) => {
    const { id, content, name, styles, type } = props.element;
    const { state, dispatch } = useEditor();

    const handleOnDrop = (e: React.DragEvent, type: string) => {
        e.stopPropagation();
        const componentType = e.dataTransfer.getData('componentType') as EditorBtns;

        switch (componentType) {
            case 'text':
                dispatch({
                    type: "ADD_ELEMENT",
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: { innerText: 'Text Element' },
                            id: v4(),
                            name: 'Text',
                            styles: {
                                color: 'black',
                                ...defaultStyles,
                            },
                            type: 'text',
                        },
                    },
                });
                break;
            case 'container':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [],
                            id: v4(),
                            name: 'Container',
                            styles: { ...defaultStyles },
                            type: 'container',
                        },
                    },
                });
                break;
            case 'link':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: {
                                innerText: 'Link Element',
                                href: '#',
                            },
                            id: v4(),
                            name: 'Link',
                            styles: {
                                color: 'black',
                                ...defaultStyles,
                            },
                            type: 'link',
                        },
                    }
                });
                break;
            case 'video':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: {
                                src: "https://www.youtube.com/embed/f2EqECiTBL8?si=8uZL97omq-a8wPdT",
                            },
                            id: v4(),
                            name: 'Video',
                            styles: {},
                            type: 'video',
                        },
                    }
                });
                break;
            case 'image':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: {
                                src: "Business.jpg",
                                alt: "Sample Image"
                            },
                            id: v4(),
                            name: 'Image',
                            styles: {},
                            type: 'image',
                        },
                    }
                });
                break;
            case 'section':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [],
                            id: v4(),
                            name: 'Section',
                            styles: { ...defaultStyles },
                            type: 'section',
                        },
                    },
                });
                break;
            case 'div':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [],
                            id: v4(),
                            name: 'Div',
                            styles: { ...defaultStyles },
                            type: 'div',
                        },
                    },
                });
                break;
            case '2Col':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [
                                {
                                    content: [],
                                    id: v4(),
                                    name: 'Container',
                                    styles: { ...defaultStyles, width: '100%' },
                                    type: 'container',
                                },
                                {
                                    content: [],
                                    id: v4(),
                                    name: 'Container',
                                    styles: { ...defaultStyles, width: '100%' },
                                    type: 'container',
                                },
                            ],
                            id: v4(),
                            name: 'Two Columns',
                            styles: { ...defaultStyles, display: 'flex' },
                            type: '2Col',
                        },
                    }
                });
                break;
            case '3Col':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [
                                {
                                    content: [],
                                    id: v4(),
                                    name: 'Container',
                                    styles: { ...defaultStyles, width: '100%' },
                                    type: 'container',
                                },
                                {
                                    content: [],
                                    id: v4(),
                                    name: 'Container',
                                    styles: { ...defaultStyles, width: '100%' },
                                    type: 'container',
                                },
                                {
                                    content: [],
                                    id: v4(),
                                    name: 'Container',
                                    styles: { ...defaultStyles, width: '100%' },
                                    type: 'container',
                                },
                            ],
                            id: v4(),
                            name: 'Three Columns',
                            styles: { ...defaultStyles, display: 'flex' },
                            type: '3Col',
                        },
                    }
                });
                break;
            case 'contactForm':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [],
                            id: v4(),
                            name: 'Contact Form',
                            styles: {},
                            type: 'contactForm',
                        },
                    },
                });
                break;
            case 'paymentForm':
                dispatch({
                    type: 'ADD_ELEMENT',
                    payload: {
                        containerId: id,
                        elementDetails: {
                            content: [],
                            id: v4(),
                            name: 'Payment Form',
                            styles: {},
                            type: 'paymentForm',
                        },
                    },
                });
                break;

            default:
                break;
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDragStart = (e: React.DragEvent, type: string) => {
        if (type === '__body') return;
        e.dataTransfer.setData('componentType', type);
    };

    const handleOnClickBody = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch({
            type: 'CHANGE_CLICKED_ELEMENT',
            payload: {
                elementDetails: props.element,
            },
        });
    };

    const handleDeleteElement = () => {
        dispatch({
            type: "DELETE_ELEMENT",
            payload: {
                elementDetails: props.element,
            },
        });
    };

    const handleDuplicateElement = () => {
        const duplicatedElement = {
            ...props.element,
            id: v4(),
            content: Array.isArray(props.element.content)
                ? props.element.content.map((child) => ({ ...child, id: v4() }))
                : props.element.content, // Ensure nested elements are also duplicated
        };
        dispatch({
            type: "ADD_ELEMENT",
            payload: {
                containerId: id,
                elementDetails: duplicatedElement,
            },
        });
    };

    return (
        <div
            style={styles}
            className={clsx(
                'relative p-4 transition-all group',
                {
                    'max-w-full w-full': type === 'container' || type === '2Col',
                    'h-fit': type === 'container',
                    'h-full': type === '__body',
                    'overflow-scroll': type === '__body',
                    'flex flex-col md:!flex-row': type === '2Col',
                    '!border-blue-500':
                        state.editor.selectedElement.id === id &&
                        !state.editor.liveMode &&
                        state.editor.selectedElement.type !== '__body',
                    '!border-yellow-400 !border-4':
                        state.editor.selectedElement.id === id &&
                        !state.editor.liveMode &&
                        state.editor.selectedElement.type === '__body',
                    '!border-solid':
                        state.editor.selectedElement.id === id &&
                        !state.editor.liveMode,
                    'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
                }
            )}
            onDrop={(e) => handleOnDrop(e, id)}
            onDragOver={handleDragOver}
            draggable={type !== '__body'}
            onClick={handleOnClickBody}
            onDragStart={(e) => handleDragStart(e, 'container')}
        >
            {state.editor.selectedElement.id === props.element.id &&
                !state.editor.liveMode && (
                    <Badge className='absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg'>
                        {state.editor.selectedElement.name}
                    </Badge>
                )}
            {Array.isArray(content) &&
                content.map((childElement) => (
                    <Recursive
                        key={childElement.id}
                        element={childElement}
                    />
                ))}
            {state.editor.selectedElement.id === props.element.id &&
                !state.editor.liveMode && (
                    <div className='absolute bg-primary px-2.5 py-1 text-xs font-bold -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white flex'>
                        <div className='mr-2'>
                            <Trash className='cursor-pointer' size={16} onClick={handleDeleteElement} />
                        </div>
                        <div>
                            <Copy className='cursor-pointer' size={16} onClick={handleDuplicateElement} />
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Container;