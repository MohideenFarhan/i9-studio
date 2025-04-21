'use client';
import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default function Editor() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!editorRef.current) return;

        const editor = grapesjs.init({
            container: editorRef.current,
            fromElement: false,
            height: '100vh',
            width: '100%',
            storageManager: false,

            blockManager: {
                appendTo: '#blocks',
                blocks: [
                    {
                        id: 'section',
                        label: '<b>Section</b>',
                        attributes: { class: 'gjs-block-section' },
                        content: '<section class="p-10 text-center bg-gray-100">New Section</section>',
                    },
                    {
                        id: 'text',
                        label: 'Text',
                        content: '<div data-gjs-type="text">Insert your text here</div>',
                    },
                ],
            },

            styleManager: {
                appendTo: '#style-panel',
                sectors: [
                    {
                        name: 'Typography',
                        open: true,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'color', 'line-height'],
                    },
                    {
                        name: 'Spacing',
                        open: false,
                        buildProps: ['margin', 'padding'],
                    },
                    {
                        name: 'Size',
                        open: false,
                        buildProps: ['width', 'height', 'max-width', 'min-height'],
                    },
                    {
                        name: 'Background',
                        open: false,
                        buildProps: ['background-color', 'background'],
                    },
                    {
                        name: 'Borders',
                        open: false,
                        buildProps: ['border', 'border-radius', 'box-shadow'],
                    },
                    {
                        name: 'Flex',
                        open: false,
                        properties: [
                            { name: 'Display', property: 'display' },
                            { name: 'Flex Direction', property: 'flex-direction' },
                            { name: 'Justify Content', property: 'justify-content' },
                            { name: 'Align Items', property: 'align-items' },
                        ],
                    },
                ],
            },
        });


        return () => editor.destroy();
    }, []);

    return (
        <div className="flex h-screen w-full">
            <div id="blocks" className="w-[200px] bg-gray-100 border-r border-gray-300 p-2 overflow-y-auto" />
            <div ref={editorRef} className="flex-1" />
            <div id="style-panel" className="w-[250px] bg-white border-l border-gray-300 p-2 overflow-y-auto" />
        </div>
    );

}
