'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { useEditor } from '@/app/Editor/editor-provider';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlignCenterIcon, AlignHorizontalJustifyCenter, AlignHorizontalJustifyCenterIcon, AlignHorizontalJustifyEnd, AlignHorizontalJustifyEndIcon, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround, AlignHorizontalSpaceBetween, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, AlignVerticalJustifyCenter, AlignVerticalJustifyCenterIcon, AlignVerticalJustifyStart, ChevronsLeftRightIcon, ImageDownIcon, LucideAlignVerticalJustifyStart } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {};
const SettingsTab = (props: Props) => {
    const { state, dispatch } = useEditor();

    // Ensure localOpacity and localBorderRadius have fallback values
    const [localOpacity, setLocalOpacity] = React.useState(
        typeof state.editor.selectedElement.styles?.opacity === 'number'
            ? state.editor.selectedElement.styles?.opacity
            : parseFloat((state.editor.selectedElement.styles?.opacity || '0').replace('%', '')) || 0
    );
    const [localBorderRadius, setLocalBorderRadius] = React.useState(
        typeof state.editor.selectedElement.styles?.borderRadius === 'number'
            ? state.editor.selectedElement.styles?.borderRadius
            : parseFloat((state.editor.selectedElement.styles?.borderRadius || '0').replace('px', '')) || 0
    );

    const handleChangeCustomValues = (e: any) => {
        const settingProperty = e.target.id;
        let value = e.target.value;
        const styleObject = {
            [settingProperty]: value,
        };
        dispatch({
            type: 'UPDATE_ELEMENT',
            payload: {
                elementDetails: {
                    ...state.editor.selectedElement,
                    content: {
                        ...state.editor.selectedElement.content,
                        ...styleObject,
                    },
                },
            },
        });
    };

    const handleOnChanges = (e: any) => {
        // Get either `id` or `name` from the event target
        const styleSettings = e.target.id || e.target.name; // Check both `id` and `name`
        let value = e.target.value;

        // If the styleSettings is 'flex', toggle its value based on checkbox checked state
        if (styleSettings === 'flex') {
            value = e.target.checked ? 'flex' : 'none'; // Toggle between 'flex' and 'none'
        }

        const styleObject = {
            [styleSettings]: value, // Dynamically set the style property based on id or name
        };

        // Dispatch the updated styles
        dispatch({
            type: 'UPDATE_ELEMENT',
            payload: {
                elementDetails: {
                    ...state.editor.selectedElement,
                    styles: {
                        ...state.editor.selectedElement.styles,
                        ...styleObject, // Merge the new value into the styles
                    },
                },
            },
        });
    };



    return (
        <Accordion
            type="multiple"
            className="w-full"
            defaultValue={['Typography', 'Dimensions', 'Decorations', 'Flexbox']}
        >
            <AccordionItem value="Custom" className="px-6 py-0">
                <AccordionTrigger className="!no-underline">Custom</AccordionTrigger>
                <AccordionContent>
                    {state.editor.selectedElement.type === 'link' &&
                        !Array.isArray(state.editor.selectedElement.content) && (
                            <div className="flex flex-col gap-2">
                                <p className="text-muted-foreground">LinkPath</p>
                                <Input
                                    id="href"
                                    placeholder="https:domain.example.com/pathname"
                                    onChange={handleChangeCustomValues}
                                    value={state.editor.selectedElement.content.href || ""}
                                />
                            </div>
                        )}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Typography" className="px-6 py-0 border-y-[1px]">
                <AccordionTrigger className="!no-underline">Typography</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                    <Label className="text-muted-foreground">Text Align</Label>
                    <Tabs
                        onValueChange={(e) =>
                            handleOnChanges({
                                target: {
                                    id: 'textAlign',
                                    value: e,
                                },
                            })
                        }
                        value={state.editor.selectedElement.styles.textAlign || "left"}
                    >
                        <TabsList className='flex items-center flex-row justify-between border-[1px] rounded-md bg-transparent w-full h-fit gap-4 overflow-hidden'>
                            <TabsTrigger
                                value="left"
                                className='w-10 h-10 p-0 data-[state=active]:bg-muted'
                            >
                                <AlignLeftIcon size={18} />
                            </TabsTrigger>
                            <TabsTrigger
                                value='right'
                                className='w-10 h-10 p-0 data-[state=active]:bg-muted'
                            >
                                <AlignRightIcon size={18} />
                            </TabsTrigger>
                            <TabsTrigger
                                value="center"
                                className='w-10 h-10 p-0 data-[state=active]:bg-muted'
                            >
                                <AlignCenterIcon size={18} />
                            </TabsTrigger>
                            <TabsTrigger
                                value="justify"
                                className='w-10 h-10 p-0 data-[state=active]:bg-muted'
                            >
                                <AlignJustifyIcon size={18} />
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Label className="text-muted-foreground">Font Family</Label>
                    <div className='flex border-[1px]  h-8 rounded-md  overflow-clip'>
                        <Input
                            id="fontFamily"
                            onChange={handleOnChanges}
                            className="w-full"
                            value={state.editor.selectedElement.styles.fontFamily || ""}
                        />
                    </div>
                    <Label className="text-muted-foreground">Color</Label>
                    <div className='flex border-[1px] h-8 rounded-md  overflow-clip'>
                        <Input
                            id="color"
                            onChange={handleOnChanges}
                            value={state.editor.selectedElement.styles.color || ""}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <Label className="text-muted-foreground">Weight</Label>
                            <div className="flex border-[1px] h-8 rounded-md  overflow-clip">
                                <Select
                                    onValueChange={(e) => {
                                        handleOnChanges({
                                            target: {
                                                id: 'fontWeight',
                                                value: e,
                                            },
                                        });
                                    }}
                                    value={String(state.editor.selectedElement.styles.fontWeight || "normal")}
                                >
                                    <SelectTrigger className="w-full h-full">
                                        <SelectValue placeholder="Select a Weight" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectGroup>
                                            <SelectLabel className="text-muted-foreground">Font Weights</SelectLabel>
                                            <SelectItem value="bold" className="cursor-pointer">
                                                Bold
                                            </SelectItem>
                                            <SelectItem value="normal" className="cursor-pointer">
                                                Regular
                                            </SelectItem>
                                            <SelectItem value="lighter" className="cursor-pointer">
                                                Light
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Label className="text-muted-foreground">Size</Label>
                            <div className="flex items-center border-[1px] h-8 rounded-md  overflow-clip">
                                <Input
                                    id="fontSize"
                                    onChange={(e) => {
                                        handleOnChanges({
                                            target: {
                                                id: 'fontSize',
                                                value: e.target.value,
                                            },
                                        });
                                    }}
                                    placeholder="px"
                                    value={state.editor.selectedElement.styles.fontSize || ""}
                                />
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Dimensions" className="px-6 py-0 border-y-[1px]">
                <AccordionTrigger className="!no-underline">Dimensions</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <Label className="text-muted-foreground">Height</Label>
                            <div className="flex items-center border-[1px] h-8 rounded-md  overflow-clip">
                                <Input
                                    id="height"
                                    onChange={(e) => {
                                        handleOnChanges({
                                            target: {
                                                id: 'height',
                                                value: e.target.value,
                                            },
                                        });
                                    }}
                                    placeholder="px"
                                    value={state.editor.selectedElement.styles.height || ""}
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <Label className="text-muted-foreground">Width</Label>
                            <div className="flex items-center border-[1px] h-8  rounded-md overflow-clip">
                                <Input
                                    id="width"
                                    onChange={(e) => {
                                        handleOnChanges({
                                            target: {
                                                id: 'width',
                                                value: e.target.value,
                                            },
                                        });
                                    }}
                                    placeholder="px"
                                    value={state.editor.selectedElement.styles.width || ""}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 ">
                        {/* Margin Section */}
                        <div>
                            <Label className="text-bold mt-4">Margin px</Label>
                            <div className="flex items-center gap-4 mt-4">
                                {/* Top */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Top</Label>
                                    <div className="flex items-center border-[1px] h-8  rounded-md overflow-clip">
                                        <Input
                                            id="marginTop"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'marginTop',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.marginTop || ""}
                                        />
                                    </div>
                                </div>
                                {/* Bottom */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Bottom</Label>
                                    <div className="flex items-center border-[1px] h-8 rounded-md  overflow-clip">
                                        <Input
                                            id="marginBottom"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'marginBottom',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.marginBottom || ""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                {/* Left */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Left</Label>
                                    <div className="flex items-center border-[1px] h-8 rounded-md  overflow-clip">
                                        <Input
                                            id="marginLeft"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'marginLeft',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.marginLeft || ""}
                                        />
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Right</Label>
                                    <div className="flex items-center border-[1px] h-8 rounded-md  overflow-clip">
                                        <Input
                                            id="marginRight"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'marginRight',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.marginRight || ""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Padding Section */}
                        <div>
                            <Label className="text-bold">Padding px</Label>
                            <div className="flex items-center gap-4 mt-4">
                                {/* Top */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Top</Label>
                                    <div className="flex items-center border-[1px] h-8 rounded-md   overflow-clip">
                                        <Input
                                            id="paddingTop"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'paddingTop',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.paddingTop || ""}
                                        />
                                    </div>
                                </div>
                                {/* Bottom */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Bottom</Label>
                                    <div className="flex items-center border-[1px] h-8 rounded-md overflow-clip">
                                        <Input
                                            id="paddingBottom"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'paddingBottom',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.paddingBottom || ""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                {/* Left */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Left</Label>
                                    <div className="flex items-center border-[1px] h-8  rounded-md overflow-clip">
                                        <Input
                                            id="paddingLeft"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'paddingLeft',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.paddingLeft || ""}
                                        />
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="flex-1">
                                    <Label className="text-muted-foreground">Right</Label>
                                    <div className="flex items-center border-[1px] h-8 rounded-md overflow-clip">
                                        <Input
                                            id="paddingRight"
                                            onChange={(e) => {
                                                handleOnChanges({
                                                    target: {
                                                        id: 'paddingRight',
                                                        value: e.target.value,
                                                    },
                                                });
                                            }}
                                            placeholder="px"
                                            value={state.editor.selectedElement.styles.paddingRight || ""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Decorations" className="px-6 py-0 border-y-[1px]">
                <AccordionTrigger className="!no-underline">Decorations</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                    {/* Opacity */}
                    <div>
                        <Label className="text-muted-foreground">Opacity</Label>
                        <div className="flex items-center justify-end">
                            <small className="p-2">{localOpacity}%</small>
                        </div>
                        <Slider
                            onValueChange={(e) => {
                                const newValue = e[0];
                                setLocalOpacity(newValue);
                                handleOnChanges({
                                    target: {
                                        id: 'opacity',
                                        value: `${newValue}%`,
                                    },
                                });
                            }}
                            defaultValue={[localOpacity]}
                            max={100}
                            step={1}
                        />
                    </div>
                    <div className='mt-4'>
                        <Label className="text-muted-foreground">Border Radius</Label>
                        <div className="flex items-center justify-end">
                            <small className="p-2">{localBorderRadius}px</small>
                        </div>
                        <Slider
                            onValueChange={(e) => {
                                const newValue = e[0];
                                setLocalBorderRadius(newValue);
                                handleOnChanges({
                                    target: {
                                        id: 'borderRadius',
                                        value: `${newValue}px`,
                                    },
                                });
                            }}
                            defaultValue={[localBorderRadius]}
                            max={500}
                            step={1}
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <Label className='text-muted-foreground mb-2'> Background Color</Label>
                        <div className='flex border-[1px] h-8 rounded-md overflow-clip'>
                            <div
                                className='w-12'
                                style={{
                                    backgroundColor: state.editor.selectedElement.styles.backgroundColor,
                                }}
                            />
                            <Input
                                placeholder='#FFFFFF'
                                className="!border-y-0 rounded-none !border-r-0 mr-2 w-full"
                                id='backgroundColor'
                                onChange={handleOnChanges}
                                value={state.editor.selectedElement.styles.backgroundColor || ""}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Label className='text-muted-foreground mb-2'> Background Image</Label>
                        <div className='flex border-[1px] h-8 rounded-md overflow-clip'>
                            <div
                                className='w-12'
                                style={{
                                    backgroundImage: state.editor.selectedElement.styles.backgroundImage
                                        ? `url(${state.editor.selectedElement.styles.backgroundImage.replace(/url\(['"]?|['"]?\)/g, '')})`
                                        : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            <Input
                                placeholder='url()'
                                className="!border-y-0 rounded-none !border-r-0 mr-2"
                                id='backgroundImage'
                                onChange={handleOnChanges}
                                value={state.editor.selectedElement.styles.backgroundImage || ""}
                            />
                        </div>
                    </div>
                    <Label className="text-muted-foreground">Image Position</Label>
                    <Tabs
                        onValueChange={(e) =>
                            handleOnChanges({
                                target: {
                                    id: 'backgroundPosition',
                                    value: e,
                                },
                            })
                        }
                        value={String(state.editor.selectedElement.styles.backgroundPosition || "center center")}
                    >
                        <TabsList className="flex items-center flex-row justify-between border-[1px] rounded-md bg-transparent w-full h-fit gap-4">
                            <TabsTrigger value="left center"
                                className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                            >
                                <ChevronsLeftRightIcon size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="center center"
                                className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                            >
                                <AlignVerticalJustifyCenterIcon size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="center bottom"
                                className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                            >
                                <ImageDownIcon size={18} />
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Flexbox" className="px-6 py-0 border-y-[1px]">
                <AccordionTrigger className="!no-underline">Flexbox</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">

                    <Label className="text-muted-foreground">Justify Content</Label>
                    <Tabs
                        onValueChange={(e) =>
                            handleOnChanges({
                                target: { id: 'justifyContent', value: e },
                            })
                        }
                        value={state.editor.selectedElement.styles.justifyContent || "space-between"}
                    >
                        <TabsList className="flex items-center flex-row justify-between border-[1px] rounded-md bg-transparent w-full h-fit gap-4">
                            <TabsTrigger value="space-between" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignHorizontalSpaceBetween size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="space-around" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignHorizontalSpaceAround size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="center" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignHorizontalJustifyCenter size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="flex-start" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignHorizontalJustifyStart size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="flex-end" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignHorizontalJustifyEnd size={18} />
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <Label className="text-muted-foreground">Align Items</Label>
                    <Tabs
                        onValueChange={(e) =>
                            handleOnChanges({
                                target: { id: 'alignItems', value: e },
                            })
                        }
                        value={state.editor.selectedElement.styles.alignItems || "center"}
                    >
                        <TabsList className="flex items-center flex-row justify-between border-[1px] rounded-md bg-transparent w-full h-fit gap-4">
                            <TabsTrigger value="center" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignVerticalJustifyCenter size={18} />
                            </TabsTrigger>
                            <TabsTrigger value="flex-start" className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                                <AlignVerticalJustifyStart size={18} />
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-4 mt-2">
                        <Checkbox
                            id="display"
                            checked={state.editor.selectedElement.styles.display === 'flex'}
                            onCheckedChange={(checked: boolean) => {
                                handleOnChanges({
                                    target: {
                                        id: 'display',
                                        value: checked ? 'flex' : 'block',
                                        checked,
                                    },
                                });
                            }}
                        />
                        <Label htmlFor="display" className="text-muted-foreground">
                            Flex
                        </Label>
                    </div>

                    <Label className="text-muted-foreground">Direction</Label>
                    <Select

                        onValueChange={(e) =>
                            handleOnChanges({
                                target: { id: 'flexDirection', value: e },
                            })
                        }
                        value={state.editor.selectedElement.styles.flexDirection || "row"}
                    >
                        <SelectTrigger className="w-full h-8">
                            <SelectValue placeholder="Select direction" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="row">Row</SelectItem>
                            <SelectItem value="column">Column</SelectItem>
                            <SelectItem value="row-reverse">Row Reverse</SelectItem>
                            <SelectItem value="column-reverse">Column Reverse</SelectItem>
                        </SelectContent>
                    </Select>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    );
};
export default SettingsTab;