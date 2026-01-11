import Image from "next/image";
import React from "react";
import {HandThumbUpIcon} from "@heroicons/react/24/outline";

import { Movie } from "@/utils/types";

export default function Thumbnail({Result}: { Result: Movie }) {

    const Base_URL: String = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="p-2 transition duration-300 transform sm:hover:scale-105 hover:z-50 group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative w-full aspect-video group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:ring-2 group-hover:ring-cyan-500/50 transition-all duration-300 rounded-xl overflow-hidden">
                <Image
                    src={`${Base_URL}${Result.backdrop_path || Result.poster_path}`}
                    alt={Result.title || Result.original_name || "Movie Poster"}
                    fill
                    className="rounded-xl object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-2">
                <p className="truncate max-w-sm"> {Result.overview}</p>
                <h2 className="mt-1 test-2xl text-white transition duration-100 ease-in-out group-hover:font-bold">
                    {Result.title || Result.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {Result.release_date || Result.first_air_date}
                    <HandThumbUpIcon className="h-5 mx-2"/>
                    {Result.vote_count}
                </p>
            </div>
        </div>
    );
}
