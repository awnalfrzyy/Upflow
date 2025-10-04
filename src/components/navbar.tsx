import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navigation = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
];

export default function Navbar() {
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
                            <Link href={item.href} className="text-white hover:underline">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant="outline">
                Sign In
            </Button>
        </nav>
    )
};

