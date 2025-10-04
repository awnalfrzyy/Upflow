import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <div className="relative h-screen w-full flex items-center px-48">
            {/* Content Section (Text + Button) */}
            <div className="gap-20 flex items-center justify-between ">
                <section className="w-[510px] flex flex-col gap-6 z-10">
                    <h1 className="text-5xl font-bold leading-tight text-neutral-900">
                        Build your <br /> audience and <br /> grow your brand
                    </h1>
                    <p className="text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        interdum ullamcorper sed pharetra sene.
                    </p>
                    <div className="flex gap-4">
                        <Button>Get Started</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </section>
                <div className="z-10">
                    <Image
                        src="/PanelOne.svg"
                        alt="Panel Illustration"
                        width={720}
                        height={720}
                        priority
                    />
                </div>
            </div>


            {/* Background Image (fixed size, di kanan) */}
            <div className="absolute right-0 -top-20 h-full flex ">
                <Image
                    src="/Background.svg"
                    alt="Background"
                    width={1020}
                    height={1020}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
