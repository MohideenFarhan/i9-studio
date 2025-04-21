'use client'
import { useEditor } from '@/app/Editor/editor-provider';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { EyeOff, EyeOffIcon } from 'lucide-react';
import React, { useEffect } from 'react'
import Recursive from './funnel-editor-components/recursive';
// import { getFunnelPageDetails } from '@/app/lib/queries';

// Removed duplicate declaration of getFunnelPageDetails

type Props = {
    funnelPageId: string;
    liveMode?: boolean;
}

// Export the required function

const FunnelEditor = ({ funnelPageId, liveMode }: Props) => {
    const { state, dispatch } = useEditor();

    useEffect(() => {
        if (liveMode) {
            dispatch({
                type: 'TOGGLE_LIVE_MODE',
                payload: { value: true },
            })
        }
    }, [liveMode])




    const handleClick = () => {
        dispatch({
            type: 'CHANGE_CLICKED_ELEMENT',
            payload: {},
        })
    }

    const handleUnpreview = () => {
        dispatch({
            type: 'TOGGLE_PREVIEW_MODE',
        })
        dispatch({
            type: 'TOGGLE_LIVE_MODE',
        })
    }



    return (
        <div className={
            clsx(
                'use-automation-zoom-in h-full  mr-[385px] bg-background transition-all rounded-md',
                {
                    '!p-0 !mr-0':
                        state.editor.previewMode === true || state.editor.liveMode === true,
                    '!w-[850px]': state.editor.device === 'Tablet',
                    '!w-[420px]': state.editor.device === 'Mobile',
                    'w-full': state.editor.device === 'Desktop',
                }
            )}
            onClick={handleClick}
        >
            {state.editor.previewMode && state.editor.liveMode && (
                <Button variant={'ghost'}
                    size={'icon'}
                    className='w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]'
                    onClick={handleUnpreview}
                >
                    <EyeOff />
                </Button>
            )}

            {Array.isArray(state.editor.elements) && state.editor.elements.map((childElement) =>
            (<Recursive key={childElement.id} element={childElement} />
            ))}
        </div>
    )

}
export default FunnelEditor;

