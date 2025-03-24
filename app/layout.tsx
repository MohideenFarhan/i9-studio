import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "../app/components/SessionProvider";  // ✅ Use relative path
// ✅ Use alias if configured
import Navbar from './components/Home/Navbar';



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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />  {/* Navbar should be inside AuthProvider */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
