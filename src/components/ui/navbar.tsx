'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/navigation"

const Navigation = [
    { title: "Home", href: "/homepage" },
    { title: "About", href: "/homepage/about" },
    { title: "Features", href: "/Features" },
    { title: "Pages", href: "/Pages" },
    { title: "Blog", href: "/Blog" },
    { title: "Chart", href: "/Chart" },
];

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="w-full px-48 py-5 bg-transparent flex justify-between fixed z-100">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={120}
                priority
            />
            <div className="w-[607px] py-3  bg-neutral-500/20 rounded-full text-center items-center  justify-center">
                <ul className="flex justify-between px-15 items-center ">
                    {Navigation.map((item, i) => (
                        <li key={i}>
                            <Link href={item.href} className="text-white font-medium hover:text-[#5236FF]">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant="outline" onClick={() => router.push("/auth/login")}>
                Sign In
            </Button>
        </nav>
    )
};

