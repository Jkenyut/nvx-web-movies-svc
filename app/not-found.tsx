import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FilmIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center p-4">
            <Card className="w-full max-w-md border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-gray-800/50 p-3">
                        <FilmIcon className="h-10 w-10 text-gray-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">404 - Page Not Found</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-400">
                    <p>
                        Oops! The movie reel you are looking for seems to be missing.
                        It might have been removed or the URL is incorrect.
                    </p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Link href="/">
                        <Button variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800">
                            Return Home
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
