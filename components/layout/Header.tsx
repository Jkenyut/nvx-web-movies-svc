import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import {
    CheckBadgeIcon,
    FolderIcon,
    HomeIcon,
    LightBulbIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className="fixed top-0 z-50 w-full flex flex-col sm:flex-row items-center justify-between h-auto px-5 py-3 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm transition-all duration-300">
            <div className="flex flex-grow justify-evenly max-w-2xl items-center mt-2 sm:mt-0 order-2 sm:order-1">
                <Link href="/">
                    <HeaderItem title="HOME" Icon={HomeIcon}/>
                </Link>
                <Link href="/?genre=fetchTrending">
                    <HeaderItem title="TRENDING" Icon={LightBulbIcon}/>
                </Link>
                <Link href="/?genre=fetchTopRatedMovie">
                    <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}/>
                </Link>
                <Link href="/">
                    <HeaderItem title="COLLECTIONS" Icon={FolderIcon}/>
                </Link>
                <Link href="/">
                    <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}/>
                </Link>
                <Link href="/">
                    <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
                </Link>
            </div>
            <div className="order-1 sm:order-2 flex items-center justify-center p-2 rounded-lg">
                <Image
                    className="object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition hover:scale-105 duration-300"
                    src="/header-logo.png"
                    width={100}
                    height={50}
                    alt="NVX Movies Logo"
                    priority
                />
            </div>
        </header>
    );
}

export default Header;
