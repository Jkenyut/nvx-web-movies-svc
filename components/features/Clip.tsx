import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Movie } from "@/utils/types";

function Thumbnail({ Result }: { Result: Movie }) {
    const Base_URL: String = "https://image.tmdb.org/t/p/original/";
    return (
        <div
            className="transition duration-300 transform sm:hover:scale-105 hover:z-50 group cursor-pointer h-full mx-2 animate-in fade-in zoom-in duration-500">
            <div className="relative w-full aspect-video group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:ring-2 group-hover:ring-cyan-500/50 transition-all duration-300 rounded-xl overflow-hidden">
                <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    src={`${Base_URL}${Result.backdrop_path || Result.poster_path}`}
                    alt={Result.title || Result.original_name || "Movie Poster"}
                    fill
                    loading="lazy"
                />
            </div>
            <div className="p-2">
                <p className="truncate text-sm text-gray-400"> {Result.overview}</p>
                <h2 className="mt-1 text-lg text-white transition duration-100 ease-in-out group-hover:font-bold group-hover:text-cyan-400 truncate">
                    {Result.title || Result.original_name}
                </h2>
                <p className="flex items-center text-xs opacity-0 group-hover:opacity-100 text-cyan-300 transition-opacity duration-300">
                    {Result.release_date || Result.first_air_date}
                    <HandThumbUpIcon className="h-4 mx-2" />
                    {Result.vote_count}
                </p>
            </div>
        </div>
    );
}

function ClipVertical({ Data }: { Data: Movie[] }) {
    return (
        <div className="px-5 w-full">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {Data.map((result) => (
                        <CarouselItem key={result.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                            <Thumbnail Result={result} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-black/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" />
                <CarouselNext className="right-2 bg-black/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" />
            </Carousel>
        </div>
    );
}

export default ClipVertical;
