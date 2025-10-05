import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";

export default function Header() {
    return (
        <div className="relative h-screen w-full flex items-center px-48 overflow-hidden">
            <div className="gap-20 flex items-center justify-between">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-[510px] flex flex-col gap-6 z-10"
                    viewport={{ once: true }}
                >
                    <h1 className="text-5xl font-bold leading-tight text-neutral-900">
                        Build your <br /> audience and <br /> grow your brand
                    </h1>
                    <p className="text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum
                        ullamcorper sed pharetra sene.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="secondary">Get Started</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="z-10"
                >
                    <Image
                        src="/PanelOne.png"
                        alt="Panel Illustration"
                        width={720}
                        height={720}
                        priority
                        unoptimized
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute right-0 -top-20 h-full flex">
                <Image
                    src="/Background.svg"
                    alt="Background"
                    width={1020}
                    height={1020}
                    className="object-contain"
                    priority
                    unoptimized
                />
            </motion.div>
        </div>
    );
}
