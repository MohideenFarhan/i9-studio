'use client'
import { EditorElement, useEditor } from '@/app/Editor/editor-provider';
import { defaultStyles, EditorBtns } from '@/app/lib/constants';
import clsx from 'clsx';

import React from 'react'
import { v4 } from 'uuid';
import Recursive from './recursive';
import { Badge } from '@/components/ui/badge';

type Props = {
    element: EditorElement;
}

const ThreeColumns = (props: Props) => {
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
                })
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
                })
                break;
            default:
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
    return (
        <div
            style={styles}
            className={clsx(
                'relative p-4 transition-all',
                {
                    'h-fit': type === 'container',
                    'h-full': type === '__body',
                    'm-4': type === 'container',
                    '!border-blue-500':
                        state.editor.selectedElement.id === props.element.id &&
                        !state.editor.liveMode,
                    '!border-solid':
                        state.editor.selectedElement.id === props.element.id &&
                        !state.editor.liveMode,
                    'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
                }
            )}
            id='innerContainer'
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

        </div>
    )
}

export default ThreeColumns