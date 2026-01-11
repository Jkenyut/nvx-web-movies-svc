"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-4">
      <Card className="w-full max-w-md border-red-900 bg-black/50 backdrop-blur-sm">
        <CardHeader className="flex flex-col items-center gap-2">
          <div className="rounded-full bg-red-900/20 p-3">
            <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Something went wrong!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-400">
          <p>
            We encountered an unexpected error while loading this page.
            Please try again later.
          </p>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 rounded bg-black/50 p-2 text-left text-xs font-mono text-red-400">
              {error.message}
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={() => reset()} variant="destructive" size="lg">
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
