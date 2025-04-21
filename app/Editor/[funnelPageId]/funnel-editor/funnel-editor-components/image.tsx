'use client'
import { EditorElement, useEditor } from '@/app/Editor/editor-provider'
import { EditorBtns } from '@/app/lib/constants'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { Trash, Copy } from 'lucide-react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
    element: EditorElement
}

const ImageComponent = (props: Props) => {
    const { id } = props.element;
    const { state, dispatch } = useEditor()
    const styles = props.element.styles

    // Drag start handler
    const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
        if (type === null) return
        e.dataTransfer.setData('componentType', type)
    }

    // Click handler
    const handleOnClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch({
            type: 'CHANGE_CLICKED_ELEMENT',
            payload: {
                elementDetails: props.element,
            },
        })
    }

    // Delete handler
    const handleDeleteElement = () => {
        dispatch({
            type: 'DELETE_ELEMENT',
            payload: {
                elementDetails: props.element
            }
        })
    }

    // Duplicate handler
    const handleDuplicateElement = () => {
        const duplicatedElement = { ...props.element, id: uuidv4() } // Duplicate and assign new ID
        dispatch({
            type: 'ADD_ELEMENT',
            payload: {
                containerId: id,
                elementDetails: duplicatedElement, // Add duplicated element to the state
            },
        })
    }

    return (
        <div
            style={styles}
            draggable
            onDragStart={(e) => handleDragStart(e, 'image')}
            onClick={handleOnClick}
            className={clsx(
                'p-[2px] w-full m-[5px] relative text-[16px] transition-all flex items-center justify-center',
                {
                    '!border-blue-500': state.editor.selectedElement.id === props.element.id,
                    '!border-solid': state.editor.selectedElement.id === props.element.id,
                    'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
                }
            )}
        >
            {state.editor.selectedElement.id === props.element.id &&
                !state.editor.liveMode && (
                    <Badge className='absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg'>
                        {state.editor.selectedElement.name}
                    </Badge>
                )}

            {!Array.isArray(props.element.content) && (
                <img
                    src={props.element.content.src}
                    alt={props.element.content.alt || 'Image'}
                    style={{
                        width: props.element.styles.width || 'auto',
                        height: props.element.styles.height || 'auto',
                    }}
                />
            )}

            {state.editor.selectedElement.id === props.element.id &&
                !state.editor.liveMode && (
                    <div className='absolute bg-primary px-2.5 py-1 text-xs font-bold -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white'>
                        <Trash
                            className='cursor-pointer'
                            size={16}
                            onClick={handleDeleteElement}
                        />
                        <Copy
                            className='cursor-pointer ml-2'
                            size={16}
                            onClick={handleDuplicateElement}
                        />
                    </div>
                )}
        </div>
    )
}

export default ImageComponent
