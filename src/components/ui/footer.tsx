"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Line from "./line";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-transparent text-gray-300  px-20 py-16 flex flex-col gap-10">
            <div className="">
                <Line length={1200} thickness={1} color="black" />
            </div>
            {/* Bagian Atas */}
            <div className="flex justify-between flex-wrap gap-10">
                {/* Kiri */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Panel Illustration"
                            width={360}
                            height={360}
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
                <div className="flex gap-20">
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

                {/* Kanan */}
                <div className="bg-neutral-100 text-neutral-900 rounded-3xl p-8 max-w-sm shadow-lg">
                    <p className="text-indigo-600 text-sm font-semibold mb-2">Download</p>
                    <h2 className="text-lg font-bold leading-snug mb-2">
                        Its suitable to all devices and screens
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                        It is a long established fact that a reader will be distracted layout.
                    </p>

                    <div className="flex gap-3">
                        <Button className="bg-black text-white hover:bg-neutral-800 rounded-full px-5 py-5">
                            <Apple className="w-4 h-4 mr-2" /> App Store
                        </Button>
                        <Button variant="outline" className="rounded-full border border-gray-400 px-5 py-5">
                            <Play className="w-4 h-4 mr-2" /> Play Store
                        </Button>
                    </div>
                </div>
            </div>

            {/* Line */}
            <Separator className="bg-gray-700" />

            {/* Copyright */}
            <div className="flex justify-between flex-wrap gap-3 text-sm text-gray-500">
                <p>
                    Copyright © <span className="text-white">Saasup</span> | Designed by Victorflow – Powered by Webflow
                </p>
                <div className="flex gap-4">
                    <span className="hover:text-white cursor-pointer">🌐</span>
                    <span className="hover:text-white cursor-pointer">🐦</span>
                    <span className="hover:text-white cursor-pointer">📷</span>
                </div>
            </div>
        </footer>
    );
}
