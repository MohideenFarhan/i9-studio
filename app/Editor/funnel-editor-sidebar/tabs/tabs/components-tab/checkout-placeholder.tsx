import { EditorBtns } from '@/app/lib/constants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const CheckoutPlaceholder = (props: Props) => {

    const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
        if (type === null) return
        e.dataTransfer.setData('componentType', type)
    }
    return (
        <div draggable onDragStart={(e) => { handleDragStart(e, 'paymentForm') }}
            className='h-14 w-14 bg-muted rounded-lg flex items-center justify-center'
        >
            <Image
                src="/secure-payment.png"
                height={40}
                width={40}
                alt='logo'
                className='object-cover'
            />
        </div>
    )
}

export default CheckoutPlaceholder