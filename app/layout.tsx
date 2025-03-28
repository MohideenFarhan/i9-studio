import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "../app/components/SessionProvider";
import NavbarWrapper from "../app/components/Home/NavbarWrapper"; // Import the wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i9 Studios | Platform for No-code",
  description: "Build Your Website Easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <NavbarWrapper /> {/* ✅ Navbar logic is now inside a client component */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
