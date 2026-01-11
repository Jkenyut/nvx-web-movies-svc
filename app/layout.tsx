import { Outfit } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NVX Movies",
    description: "Modern Cinematic Movie Discovery",
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en" className={`dark ${outfit.className}`}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head/>
        <body>
            {children}
            <Footer />
        </body>
        </html>
    );
}
