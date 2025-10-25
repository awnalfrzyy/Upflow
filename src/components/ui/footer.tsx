"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-transparent text-gray-300 px-6 md:px-20 py-10 md:py-16 flex flex-col gap-8">
            {/* responsive top divider */}
            <div className="w-full">
                <div className="w-full h-px bg-gray-700" />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10">
                <div className="flex flex-col gap-4 w-full md:w-auto max-w-sm">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Panel Illustration"
                            width={120}
                            height={120}
                            className="w-28 h-auto"
                            priority
                        />
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                        It is a long established fact that from will be distracted by the readable from when looking.
                    </p>

                    <div className="flex flex-col gap-2 mt-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-indigo-500" />
                            <span>saasup@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-indigo-500" />
                            <span>mail@saasup.com</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Phone className="w-4 h-4 text-indigo-500" />
                            <span>+987 6541 3654</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-indigo-500" />
                            <span>+001 6547 6589</span>
                        </div>
                    </div>
                </div>

                {/* Tengah */}
                <div className="flex flex-col sm:flex-row gap-8 md:gap-20 w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-semibold text-lg">Pages</h3>
                        <Separator className="bg-gray-700 w-24" />
                        <ul className="flex flex-col gap-2 text-sm">
                            {["Home", "About Us", "Integrations", "Pricing", "Features", "Contact Us"].map((item) => (
                                <li
                                    key={item}
                                    className={`hover:text-indigo-400 cursor-pointer ${item === "Integrations" ? "text-indigo-500 font-medium" : ""
                                        }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-semibold text-lg">Utility Pages</h3>
                        <Separator className="bg-gray-700 w-24" />
                        <ul className="flex flex-col gap-2 text-sm">
                            {[
                                "Password",
                                "Protected",
                                "404 Not Found",
                                "Style Guide",
                                "Licenses",
                                "Changelog",
                            ].map((item) => (
                                <li key={item} className="hover:text-indigo-400 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-neutral-100 text-neutral-900 rounded-3xl p-6 md:p-8  w-full md:w-auto max-w-sm shadow-lg">
                    <p className="text-indigo-600 text-sm font-semibold mb-2">Download</p>
                    <h2 className="text-lg font-bold leading-snug mb-2">
                        Its suitable to all devices and screens
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                        It is a long established fact that a reader will be distracted layout.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-gray-200 text-black hover:bg-white rounded-full px-5 py-3 w-full sm:w-auto">
                            <Image src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="App Store" width={16} height={16} className="w-4 h-4 mr-2" />
                            <span className="ml-2">App Store</span>
                        </Button>
                        <Button variant="outline" className="rounded-full border border-gray-400 px-5 py-3 w-full sm:w-auto">
                            <Image src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="Play Store" width={16} height={16} className="w-4 h-4 mr-2" />
                            <span className="ml-2">Play Store</span>
                        </Button>
                    </div>
                </div>
            </div>
            <Separator className="bg-gray-700" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-gray-500">
                <p className="w-full md:w-auto">
                    Copyright © <span className="text-white">Saasup</span> | Designed by Victorflow Powered by Webflow
                </p>

            </div>
        </footer>
    );
}
