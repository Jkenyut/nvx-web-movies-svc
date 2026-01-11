import React from "react";
import { Loader2 } from "lucide-react";

function Loading() {
    return (
        <div className="flex h-[70vh] w-full items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Loading;
