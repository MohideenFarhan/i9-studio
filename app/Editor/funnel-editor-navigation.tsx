"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
    ArrowLeftCircle,
    EyeIcon,
    Laptop,
    LucideTablet,
    Redo2,
    Smartphone,
    Tablet,
    Undo2,
} from "lucide-react";
import { useEditor, DeviceTypes } from "./editor-provider";

type Props = {
    funnelId: string;
    subaccountId: string;
};

const FunnelEditorNavigation = ({ funnelId, subaccountId }: Props) => {
    const { state, dispatch } = useEditor();

    const device = state.editor.device || "Desktop";

    useEffect(() => {
        console.log("Device:", state.editor.device);
        console.log("Preview Mode:", state.editor.previewMode);
    }, []);

    const handlePreviewClick = () => {
        dispatch({
            type: "TOGGLE_PREVIEW_MODE",
        });
        dispatch({
            type: "TOGGLE_LIVE_MODE",
        });
    };

    const handleUndo = () => {
        dispatch({
            type: "UNDO",
        });
    };

    const handleRedo = () => {
        dispatch({
            type: "REDO",
        });
    };

    return (
        <nav
            className={clsx(
                "border-b-[1px] flex items-center justify-between p-6 gap-10 transition-all",
                { "!h-0 !p-0 !overflow-hidden": state.editor.previewMode }
            )}
        >
            {/* Back Button */}
            <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
                <Link href={`/subaccount/${subaccountId}/funnels/${funnelId}`}>
                    <ArrowLeftCircle className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                </Link>
            </aside>

            {/* Device Tabs */}
            <aside>
                <div className="flex items-center justify-center w-full mx-auto lg:mx-0">
                    <Tabs
                        defaultValue="Desktop"
                        className="w-fit"
                        value={device}
                        onValueChange={(value) => {
                            dispatch({
                                type: "CHANGE_DEVICE",
                                payload: { device: value as DeviceTypes },
                            });
                        }}
                    >
                        <TabsList className="grid grid-cols-3 gap-4 bg-transparent h-fit justify-center items-center">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <TabsTrigger
                                        value="Desktop"
                                        className="data-[state=active]:bg-muted w-10 h-10 p-0"
                                    >
                                        <Laptop />
                                    </TabsTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Desktop</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <TabsTrigger
                                        value="Tablet"
                                        className="data-[state=active]:bg-muted w-10 h-10 p-0"
                                    >
                                        <LucideTablet />
                                    </TabsTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Tablet</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <TabsTrigger
                                        value="Mobile"
                                        className="data-[state=active]:bg-muted w-10 h-10 p-0"
                                    >
                                        <Smartphone />
                                    </TabsTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Mobile</p>
                                </TooltipContent>
                            </Tooltip>
                        </TabsList>
                    </Tabs>
                </div>
            </aside>

            {/* Action Buttons */}
            <aside className="flex items-center gap-2">
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="hover:bg-slate-200"
                    onClick={handlePreviewClick}
                >
                    <EyeIcon />
                </Button>
                <Button
                    disabled={!(state.history.currentlndex > 0)}
                    variant={"ghost"}
                    size={"icon"}
                    className="hover:bg-slate-200"
                    onClick={handleUndo}
                >
                    <Undo2 />
                </Button>
                <Button
                    disabled={!(state.history.currentlndex < state.history.history.length - 1)}
                    variant={"ghost"}
                    size={"icon"}
                    className="hover:bg-slate-200"
                    onClick={handleRedo}
                >
                    <Redo2 />
                </Button>
                <div className="flex flex-col items-center mr-4">
                    <div className="flex flex-row items-center gap-4">
                        Draft
                        <Switch
                            // disabled
                            defaultChecked={true}
                        />
                        Publish
                    </div>
                    <span className="text-muted-foreground text-sm">
                        Last updated 2 days ago
                    </span>
                </div>
                <Button>Save</Button>
            </aside>
        </nav>
    );
};

export default FunnelEditorNavigation;

