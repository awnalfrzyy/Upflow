'use client'

import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion"

const CardFeatures = [
    {
        image: "/Icon.svg",
        title: "Secured Platform",
        description:
            "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon(1).svg",
        title: "Advanced Analytics",
        description:
            "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon(2).svg",
        title: "Powerful Automation",
        description:
            "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
];

export default function Analys() {
    return (
        <div className="h-screen relative flex flex-col justify-center items-center text-center gap-7">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <Button variant="disabled">Features</Button>
                <h1 className="font-bold text-4xl text-black max-w-[539px]">
                    Powerful features to boost your productivity
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex gap-5 py-12">
                {CardFeatures.map((feature, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center text-center gap-6 p-6 border-none rounded-3xl bg-transparent hover:bg-[#F9F9F9] transition h-full"
                    >
                        <div className="w-40 h-40 flex items-center justify-center">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={160}
                                height={160}
                            />
                        </div>

                        <div className="flex flex-col flex-1 justify-between gap-3">
                            <h2 className="text-xl font-semibold text-black">
                                {feature.title}
                            </h2>
                            <p className="text-gray-600 text-sm max-w-[280px] mx-auto">
                                {feature.description}
                            </p>
                        </div>

                        <Button variant="link" size="sm" className="hover:text-[#5236FF] ">
                            {feature.btn}
                        </Button>
                    </div>
                ))}
            </motion.div>

        </div>
    );
}
