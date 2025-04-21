import React from 'react';
// import MediaUploadButton from './upload-buttons';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FolderSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
    subaccountId: string;
};

const MediaComponent = (props: Props) => {
    const data = {
        Media: [
            { id: '1', name: 'File1.png' },
            { id: '2', name: 'File2.jpg' },
        ],
    };

    return (
        <div className="flex flex-col gap-4 h-full w-full">
            <div className="flex gap-4  items-center">
                <h1 className="text-3xl ">Media Bucket</h1>
                <Button className='w-15'>Upload</Button>

                {/* <MediaUploadButton subaccountId={props.subaccountId} /> */}
            </div>

            <Command className="bg-transparent">
                <CommandInput placeholder="Search for file name..." />


                <CommandList className="pb-40 max-h-full">

                    <div className="flex items-center justify-center w-full flex-col">
                        <FolderSearch size={200} className="dark:text-muted text-slate-300" />
                        <p className="text-muted-foreground">Empty! No files to show.</p>
                    </div>

                </CommandList>
            </Command>
        </div>
    );
};

export default MediaComponent;