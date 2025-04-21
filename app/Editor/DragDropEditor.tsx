"use client";

import { useEffect } from "react";
import grapesjs from "grapesjs";
import Sidebar from "./Sidebar";
import Panel from "./Panel";
import Header from "./Header";
import "grapesjs/dist/css/grapes.min.css";

export default function DragDropEditor() {
    useEffect(() => {
        const editor = grapesjs.init({
            container: "#gjs",
            height: "100%",
            width: "auto",
            fromElement: false,
            storageManager: false,
            blockManager: {
                appendTo: "#blocks",
            },
            styleManager: {
                appendTo: "#styles",
            },
            traitManager: {
                appendTo: "#traits",
            },
            layerManager: {
                appendTo: "#layers",
            },
            panels: {
                defaults: [],
            },
            canvas: {
                styles: [
                    "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
                ],
            },
        });

        // ✅ Ensure styles are applied after GrapesJS is fully ready
        editor.on("load", () => {
            // Apply background to the canvas iframe body directly
            const canvasBody = editor.Canvas.getBody();
            const canvasFrame = editor.Canvas.getFrameEl();

            if (canvasBody) {
                canvasBody.style.backgroundColor = "#ffffff";
                canvasBody.style.margin = "0";
                canvasBody.style.padding = "0";
            }

            if (canvasFrame) {
                canvasFrame.style.backgroundColor = "#ffffff";
            }

            // You can still use this for internal editor styling
            editor.setStyle(`
                body {
                    background-color: #ffffff;
                    margin: 0;
                    padding: 0;
                }
            `);
        });

        // ✅ Add blocks
        editor.BlockManager.add("section", {
            label: "Designed Section",
            content: `<section class="p-10 bg-white border rounded shadow text-center text-lg">
                <h2 class="text-2xl font-semibold mb-4">Designed Section</h2>
                <p>Start building your content</p>
            </section>`,
        });

        editor.BlockManager.add("grid", {
            label: "Grid Layout",
            content: `<div class="grid grid-cols-2 gap-4 p-6 border rounded bg-white">
                <div class="bg-gray-100 h-20 rounded"></div>
                <div class="bg-gray-100 h-20 rounded"></div>
            </div>`,
        });

        editor.BlockManager.add("element", {
            label: "Add an Element",
            content: `<div class="p-6 bg-white border rounded shadow text-center">
                <p class="text-lg">Add custom element here</p>
            </div>`,
        });

        editor.BlockManager.add("button", {
            label: "Button",
            content: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Click Me
            </button>`,
        });

        editor.BlockManager.add("image", {
            label: "Image",
            content: `<img src="https://via.placeholder.com/300x150" class="rounded shadow"/>`,
        });

        // Heading
        editor.BlockManager.add("heading", {
            label: "Heading",
            content: `<h1 class="text-4xl font-bold">This is a Heading</h1>`,
        });

        // Paragraph
        editor.BlockManager.add("paragraph", {
            label: "Paragraph",
            content: `<p class="text-base text-gray-700">This is a simple paragraph for your website content.</p>`,
        });

        // Container
        editor.BlockManager.add("container", {
            label: "Container",
            content: `<div class="container mx-auto px-4 py-6 bg-white border rounded shadow">
        <h2 class="text-2xl font-semibold mb-2">Container Title</h2>
        <p class="text-gray-600">Container content goes here.</p>
    </div>`,
        });

        // Hero Section
        editor.BlockManager.add("hero", {
            label: "Hero Section",
            content: `<section class="bg-blue-600 text-white p-10 text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p class="text-lg mb-6">Create beautiful pages with our builder</p>
        <button class="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow">
            Get Started
        </button>
    </section>`,
        });

        // Features Section
        editor.BlockManager.add("features", {
            label: "Features Section",
            content: `<section class="p-10 bg-gray-100 grid grid-cols-3 gap-6 text-center">
        <div class="p-6 bg-white rounded shadow">
            <h3 class="font-semibold text-lg mb-2">Feature One</h3>
            <p>Short description of this feature.</p>
        </div>
        <div class="p-6 bg-white rounded shadow">
            <h3 class="font-semibold text-lg mb-2">Feature Two</h3>
            <p>Short description of this feature.</p>
        </div>
        <div class="p-6 bg-white rounded shadow">
            <h3 class="font-semibold text-lg mb-2">Feature Three</h3>
            <p>Short description of this feature.</p>
        </div>
    </section>`,
        });

        // Card
        editor.BlockManager.add("card", {
            label: "Card",
            content: `<div class="max-w-sm bg-white border rounded-lg shadow p-4 text-center">
        <img src="https://via.placeholder.com/150" class="rounded mb-4 mx-auto" />
        <h3 class="text-xl font-semibold mb-2">Card Title</h3>
        <p class="text-gray-600 mb-4">Card description goes here.</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
    </div>`,
        });

        // Navigation Bar
        editor.BlockManager.add("navbar", {
            label: "Navigation Bar",
            content: `<nav class="flex justify-between items-center p-4 bg-white border-b shadow">
        <div class="text-xl font-bold">MyLogo</div>
        <ul class="flex space-x-6 text-gray-700">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">About</a></li>
            <li><a href="#" class="hover:underline">Services</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
    </nav>`,
        });

        // Footer
        editor.BlockManager.add("footer", {
            label: "Footer",
            content: `<footer class="bg-gray-800 text-white text-center p-6">
        <p class="mb-2">&copy; 2025 My Company. All rights reserved.</p>
        <div class="space-x-4">
            <a href="#" class="hover:underline">Privacy</a>
            <a href="#" class="hover:underline">Terms</a>
            <a href="#" class="hover:underline">Contact</a>
        </div>
    </footer>`,
        });

        // Contact Form
        editor.BlockManager.add("contact-form", {
            label: "Contact Form",
            content: `<form class="p-6 bg-white rounded shadow space-y-4 max-w-lg mx-auto">
        <input type="text" placeholder="Name" class="w-full border rounded p-2" />
        <input type="email" placeholder="Email" class="w-full border rounded p-2" />
        <textarea placeholder="Your Message" class="w-full border rounded p-2 h-32"></textarea>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
    </form>`,
        });



        console.log("GrapesJS Editor initialized", editor);
    }, []);


    const siteUrl = "https://mohideenfarhan1234.wixstudio.com/my-site-5";

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col p-4 overflow-hidden">
                <div className="flex-1 flex flex-col bg-white rounded-lg shadow-xl border overflow-hidden">
                    <Header siteUrl={siteUrl} />
                    <div className="flex-1 bg-gray-50 p-6 overflow-hidden rounded">
                        <div id="gjs" className="w-full h-full border-2 border-dashed rounded-md bg-white" />
                    </div>

                </div>
            </div>
            <Panel />
        </div>
    );
}
