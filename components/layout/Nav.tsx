"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Category from "@/utils/request";
import ClipVertical from "@/components/features/Clip";
import Image from "next/image";
import { Movie } from "@/utils/types";
import React, {Key} from "react";

export default function Nav({trendingDay, trendingWeek, populer}: { trendingDay: Movie[], trendingWeek: Movie[], populer: Movie[] }) {
    const router = useRouter();
    const Base_URL: String = "https://image.tmdb.org/t/p/original/";
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="relative mb-5 text-white">
            <div className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] relative">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full"
                    opts={{ loop: true }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="h-full ml-0">
                        {trendingDay
                            .slice(0, 5)
                            .map(
                                (data) => (
                                    <CarouselItem key={data.id} className="relative h-full pl-0">
                                        <div className="relative w-full h-full"> 
                                            <Image
                                                src={`${Base_URL}${data.backdrop_path || data.poster_path}`}
                                                alt="Movie Poster"
                                                fill
                                                className="object-cover object-center"
                                                priority
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#051114] via-[#051114]/20 to-transparent" />
                                            
                                            {/* Content Overlay */}
                                            <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 max-w-2xl">
                                                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                                                    {data.title || data.original_name}
                                                </h1>
                                                <p className="text-sm md:text-lg line-clamp-3 md:line-clamp-4 drop-shadow-md text-gray-200">
                                                    {data.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )
                            )}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="px-5 max-w-7xl mx-auto space-y-8 mt-4">

            <section className="my-12">
                <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-cyan-500 pl-4">Trending Day</h2>
                <ClipVertical Data={trendingDay}/>
            </section>
            
            <section className="my-12">
                <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-cyan-500 pl-4">Trending Week</h2>
                <ClipVertical Data={trendingWeek}/>
            </section>
            
            <section className="my-12">
                <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-cyan-500 pl-4">Popular</h2>
                <ClipVertical Data={populer}/>
            </section>

            <nav className="relative max-w-7xl mx-auto mt-10 px-5">
                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true,
                        containScroll: "trimSnaps",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {Object.entries(Category).map(([key, { title, url }]) => (
                            <CarouselItem key={key} className="pl-4 basis-auto">
                                <Link href={`/?genre=${key}`}>
                                    <h1
                                        className="cursor-pointer transition duration-200 hover:scale-110 hover:text-cyan-400 active:text-cyan-600 font-medium whitespace-nowrap text-lg sm:text-xl px-4 py-2 hover:bg-white/10 rounded-full"
                                    >
                                        {title}
                                    </h1>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                        <CarouselPrevious className="left-[-20px] bg-black/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" />
                        <CarouselNext className="right-[-20px] bg-black/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" />
                    </div>
                </Carousel>
            </nav>
            </div>
        </div>
    );
}
