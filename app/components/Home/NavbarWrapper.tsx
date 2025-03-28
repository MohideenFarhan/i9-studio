"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Home/Navbar";

export default function NavbarWrapper() {
    const pathname = usePathname();

    // Hide Navbar on "/editor" page
    if (pathname === "/Editor") return null;

    return <Navbar />;
}
