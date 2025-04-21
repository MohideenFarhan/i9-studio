'use client'
import ContactForm from '@/app/Editor/contact-form'
import { EditorElement, useEditor } from '@/app/Editor/editor-provider'
import { EditorBtns } from '@/app/lib/constants'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import React from 'react'



type Props = {
    element: EditorElement
}

const ContactFormComponent = (props: Props) => {
    const { state, dispatch, subaccountId, funnelId } = useEditor()


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

            <ContactForm
                subTitle='Contact Us' title={''}            // title="Want a free quote? We can help you"
            // apiCall={onFormSubmit}
            />

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

export default ContactFormComponent

function saveActivityLogsNotification(arg0: { agencyId: undefined; description: string; subaccountId: string }) {
    throw new Error('Function not implemented.')
}
function upsertContact(arg0: any) {
    throw new Error('Function not implemented.')
}

