import React from "react";
import Thumbnail from "./Thumbnail";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Movie } from "@/utils/types";

export default function Results({results}: { results: Movie[] }) {
    return (
        <div className="px-5 my-5 w-full">
             <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {results.map((result) => (
                        <CarouselItem key={result.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                            <Thumbnail Result={result}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-black/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" />
                <CarouselNext className="right-2 bg-black/50 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" />
            </Carousel>
        </div>
    );
}
