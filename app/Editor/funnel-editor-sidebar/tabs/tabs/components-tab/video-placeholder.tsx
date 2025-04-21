import { EditorBtns } from '@/app/lib/constants'
import { Youtube } from 'lucide-react'
import React from 'react'
import { FaYoutube } from 'react-icons/fa'

type Props = {}

const VideoPlaceholder = (props: Props) => {
    const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
        if (type === null) return
        e.dataTransfer.setData('componentType', type)
    }
    return (
        <div draggable onDragStart={(e) => { handleDragStart(e, 'video') }}
            className='h-14 w-14 bg-muted rounded-lg flex items-center justify-center'>
            <FaYoutube
                size={40}
                className='text-muted-foreground'
            />
        </div>
    )
}

export default VideoPlaceholder