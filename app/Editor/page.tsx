"use client"; // ✅ Ensures this page is a Client Component

import React from "react";
import DragDropEditor from './DragDropEditor';
import Navbar from "./Navbar";
import EditorProvider from "./editor-provider";
import FunnelEditorNavigation from "./funnel-editor-navigation";
import FunnelEditorSideBar from "./funnel-editor-sidebar/tabs/funnel-editor-sidebar";
import Editor from "./Editor";
import FunnelEditor from "./[funnelPageId]/funnel-editor";


const Page = ({ subaccountId, funnelId, funnelPageId }: { subaccountId: string; funnelId: string; funnelPageId: string }) => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
            {/* <Navbar />
            <DragDropEditor /> */}
            <EditorProvider subaccountId={subaccountId}
                funnelId={funnelId}
            >
                <FunnelEditorNavigation
                    funnelId={funnelId}
                    subaccountId={subaccountId}
                />

                <div className="h-full flex justify-center">
                    <FunnelEditor funnelPageId={funnelPageId} />
                </div>

                <FunnelEditorSideBar subaccountId={subaccountId} />
            </EditorProvider>
        </div>
        // <Editor />
        // <div>
        //     <Navbar />
        //     <DragDropEditor />
        // </div>
    );
};

export default Page;
