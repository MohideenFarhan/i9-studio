"use client";
import React from 'react';
import { useEditor } from '../../editor-provider';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from '@/components/ui/sheet';
import clsx from 'clsx';
import TabList from './tabs';
import SettingsTab from './tabs/settings-tab';
import MediaBucketTab from './tabs/media-bucket-tabs';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import ComponentsTab from './tabs/components-tab';
import LayersTab from './tabs/layers-tab';

type Props = {
    subaccountId: string;
    // bg-[#0f0f0f]
};

const FunnelEditorSideBar = ({ subaccountId }: Props) => {
    const { state } = useEditor();

    return (
        <Sheet open={true} modal={false}>
            <Tabs defaultValue="Settings" className="w-full">
                {/* Tab List */}
                <SheetContent
                    showX={false}
                    side="right"
                    className={clsx(
                        'mt-[97px] w-16 z-[80] shadow-none p-0 focus:border-none transition-all overflow-hidden',
                        { hidden: state.editor.previewMode }
                    )}
                >
                    <TabList />
                </SheetContent>

                {/* Tab Content */}
                <SheetContent
                    showX={false}
                    side="right"
                    className={clsx(
                        'mt-[97px] w-80 z-[40] shadow-none p-0 mr-16 bg-background h-full transition-all',
                        { hidden: state.editor.previewMode }
                    )}
                >
                    <div
                        className="grid gap-4 h-full pb-36 overflow-y-auto"
                        style={{ maxHeight: 'calc(100vh - 97px)' }}
                    >
                        <TabsContent value="Settings">
                            <SheetHeader className="text-left p-6">
                                <SheetTitle>Styles</SheetTitle>
                                <SheetDescription>
                                    Show your creativity! You can customize every component as you like.
                                </SheetDescription>
                            </SheetHeader>
                            <SettingsTab />
                        </TabsContent>

                        <TabsContent value="Media">
                            <MediaBucketTab subaccountId={subaccountId} />
                        </TabsContent>

                        <TabsContent value="Components">
                            <SheetHeader className="text-left p-6">
                                <SheetTitle>Components</SheetTitle>
                                <SheetDescription>
                                    You can drag and drop components on the canvas
                                </SheetDescription>
                            </SheetHeader>
                            <ComponentsTab />
                        </TabsContent>
                        <TabsContent value="Layers">
                            <SheetHeader className="text-left p-6  ">
                                <SheetTitle>Layers</SheetTitle>
                                <SheetDescription>
                                    View the editor in a tree like structure
                                </SheetDescription>
                            </SheetHeader>
                            <LayersTab />
                        </TabsContent>
                    </div>
                </SheetContent>
            </Tabs>
        </Sheet>
    );
};

export default FunnelEditorSideBar;
