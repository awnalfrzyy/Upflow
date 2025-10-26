"use client";

import Image from "next/image";
import FullBleed from "./ui/FullBleed";
import { Button } from "./ui/button";

interface IntegrationSingleProps {
    image: string;
    imageApp: string;
    title: string;
    text: string;
    textOne: string;
    textTwo: string;
    textThree: string;
    textFour: string;
}

export default function IntegrationSingle({
    image,
    imageApp,
    title,
    text,
    textOne,
    textTwo,
    textThree,
    textFour,
}: IntegrationSingleProps) {
    return (
        <FullBleed>
            <div className="flex flex-col items-center justify-center pb-10 md:pb-20 pt-20 md:pt-40  text-center">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Image
                        src={image}
                        alt={`${title} Icon`}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain"
                        priority
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {title}
                    </h2>
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl">{text}</p>
            </div>

            <div className="p-10 md:p-12 bg-neutral-100 rounded-2xl max-w-4xl mx-auto shadow-sm flex flex-col text-start gap-5">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Integration</h2>
                <p className="text-gray-600">{textOne}</p>

                <div className="mt-6 flex justify-center">
                    <div className="w-[600] h-[320] bg-[#5236FF] rounded-2xl flex items-center justify-center">
                        <Image
                            src={imageApp}
                            alt={`${title} App Preview`}
                            width={480}
                            height={480}
                            className="object-bottom mt-20 "
                            priority
                        />
                    </div>
                </div>
                <div className="gap-5 flex flex-col">

                    <p className="mt-2 text-gray-600 ">{textTwo}</p>
                    <p className="mt-1 text-gray-600 ">{textThree}</p>
                    <h3 className="mt-8 text-2xl font-bold text-gray-900">
                        How to Connect Integration
                    </h3>
                    <p className="mt-1 text-gray-600 ">{textFour}</p>

                </div>
                <div className="flex justify-start mt-8">
                    <Button variant="default">Connect {title}</Button>
                </div>
            </div>
        </FullBleed>
    );
}
