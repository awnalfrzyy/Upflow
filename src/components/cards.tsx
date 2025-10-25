'use client";'

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from 'next/image'
import { useRouter } from "next/navigation";

interface IntegrationCardProps {
    image: string;
    title: string;
    text: string;
}

export function Cards({ image, title, text }: IntegrationCardProps) {

    const router = useRouter();

    return (
        <Card onClick={() => router.push("/homepage/integration")} className="border border-gray-50 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-3xl hover:border-gray-300 hover:bg-gray-50 cursor-pointer">
            <CardHeader className="flex flex-col items-center space-y-4 pt-6">
                <Image width={192} height={192} src={image} alt={title} className="w-48 h-48 object-contain" />
                <CardTitle className="text-lg font-semibold text-center">{title}</CardTitle>
                <CardDescription className="text-center text-sm text-gray-600 px-4">
                    {text}
                </CardDescription>
            </CardHeader>

            <CardFooter className="mt-4 flex justify-center">
                <Button
                    onClick={() => router.push("/IntegrationPage")}
                    variant="link"
                    className="hover:text-blue-500 cursor-pointer">
                    Learn more
                </Button>
            </CardFooter>
        </Card>
    );
}
