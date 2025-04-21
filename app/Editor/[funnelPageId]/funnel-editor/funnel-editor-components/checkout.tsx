'use client'
import { EditorElement, useEditor } from '@/app/Editor/editor-provider'
import { EditorBtns } from '@/app/lib/constants'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
// import Loading from '@/components/ui/loading'
import React from 'react'
// import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@/app/components/checkout/embedded-checkout-provider'

type Props = {
    element: EditorElement
}

const Checkout = (props: Props) => {
    const { state, dispatch } = useEditor();
    const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
        if (type === null) return
        e.dataTransfer.setData('componentType', type)
    }
    const styles = props.element.styles

    const handleOnClickBody = (e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch({
            type: 'CHANGE_CLICKED_ELEMENT',
            payload: {
                elementDetails: props.element,
            }
        })
    }

    const handleDeleteElement = () => {
        dispatch({
            type: 'DELETE_ELEMENT',
            payload: {
                elementDetails: props.element
            }
        })
    }
    return (
        <div style={styles} draggable
            onDragStart={(e) => handleDragStart(e, 'contactForm')}
            onClick={handleOnClickBody}
            className={
                clsx(
                    'p-[2px] w-full m-[5px] relative text-[16px] transition-all flex items-center justify-center',
                    {
                        '!border-blue-500':
                            state.editor.selectedElement.id === props.element.id,

                        '!border-solid': state.editor.selectedElement.id === props.element.id,
                        'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
                    }
                )
            }>
            {state.editor.selectedElement.id === props.element.id &&
                !state.editor.liveMode && (
                    <Badge className='absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg'>
                        {state.editor.selectedElement.name}
                    </Badge>
                )
            }

            <div className='border-none transition-all w-full'>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='text-white'>
                        {/* <EmbeddedCheckoutProvider
                        >
                            <EmbeddedCheckout />
                        </EmbeddedCheckoutProvider> */}
                    </div>
                    <div className='flex items-center justify-center w-full h-40'>
                        {/* <Loading /> */}
                    </div>
                </div>
            </div>



            {state.editor.selectedElement.id === props.element.id &&
                !state.editor.liveMode && (
                    <div className='absolute bg-primary px-2.5 py-1 text-xs font-bold -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white'>
                        <Trash className='cursor-pointer'
                            size={16}
                            onClick={handleDeleteElement}
                        />
                    </div>
                )
            }

        </div>
    )
}

export default Checkout