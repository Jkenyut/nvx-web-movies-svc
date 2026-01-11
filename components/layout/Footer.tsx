import React from "react";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <footer className="w-full bg-[#051114] border-t border-cyan-900/30 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
                
                {/* Branding */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-cyan-400 tracking-wider">NVX MOVIES</h2>
                    <p className="text-gray-400 text-sm mt-1">
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>

                {/* Links */}
                <div className="flex space-x-6 text-sm text-gray-400">
                    <Link href="/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                    <Link href="/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                    <Link href="/" className="hover:text-cyan-400 transition-colors">About Us</Link>
                </div>

                {/* Made With */}
                <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-500">
                    <span>Made with</span>
                    <HeartIcon className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
                    <span>by NVX Team</span>
                </div>
            </div>
        </footer>
    );
}
