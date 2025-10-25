"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = [
    { title: "Home", href: "/homepage" },
    { title: "About", href: "/homepage/about" },
    { title: "Features", href: "/homepage/features" },
    { title: "Pages", href: "/homepage/Pages" },
    { title: "Blog", href: "/homepage/blog" },
    { title: "Chart", href: "/homepage/Chart" },
];

export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full px-6 md:px-48 py-4 bg-transparent flex items-center justify-between fixed top-0 left-0 z-50">
                <div className="flex items-center gap-4">
                    <Image src="/logo.svg" alt="Logo" width={96} height={96} priority />
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center">
                    <div className="w-[607px] py-2 bg-neutral-500/10 rounded-full text-center items-center justify-center">
                        <ul className="flex justify-between px-6 items-center">
                            {Navigation.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-gray-800 font-medium hover:text-[#5236FF] px-3">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Sign In (desktop) */}
                    <div className="hidden md:block">
                        <Button variant="outline" onClick={() => router.push("/auth/login")}>
                            Sign In
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-md bg-neutral-100/60"
                    >
                        <Menu className="w-6 h-6 text-gray-800" />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar + overlay */}
            <div
                className={`fixed inset-0 z-40 transition-opacity ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
                aria-hidden={!open}
            >
                {/* backdrop */}
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setOpen(false)}
                />

                <aside
                    className={`absolute left-0 top-0 h-full w-72 sm:w-80 bg-white shadow-lg transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
                    aria-label="Mobile menu"
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <Image src="/logo.svg" alt="Logo" width={80} height={80} />
                        <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md">
                            <X className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>

                    <nav className="p-4">
                        <ul className="flex flex-col gap-3">
                            {Navigation.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block px-3 py-2 rounded-md text-gray-800 font-medium hover:bg-neutral-100"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <Button variant="default" className="w-full" onClick={() => { setOpen(false); router.push('/auth/login'); }}>
                                Sign In
                            </Button>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    );
}

