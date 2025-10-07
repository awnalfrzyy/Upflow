'use client'

import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const CardFeatures = [
    {
        image: "/Icon.svg",
        title: "Secured Platform",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon(1).svg",
        title: "Advanced Analytics",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon(2).svg",
        title: "Powerful Automation",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon.png",
        title: "Secured Platform",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon(1).png",
        title: "Advanced Analytics",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
    {
        image: "/Icon(2).png",
        title: "Powerful Automation",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
        btn: "Learn more",
    },
];

export default function Analys() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 md:py-28">

            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Button variant="disabled">Features</Button>
                <h1 className="font-bold text-3xl md:text-5xl text-black max-w-[540px] py-5 mx-auto leading-tight">
                    Powerful features to boost your productivity
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mt-10"
            >
                {CardFeatures.map((feature, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 14 }}
                        className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl bg-white/70 hover:bg-[#F9F9F9] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="w-28 h-28 flex items-center justify-center">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={120}
                                height={120}
                                priority
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="text-lg md:text-xl font-semibold text-black">
                                {feature.title}
                            </h2>
                            <p className="text-gray-600 text-sm max-w-[260px] mx-auto leading-relaxed">
                                {feature.description}
                            </p>
                        </div>

                        <Button
                            variant="link"
                            size="sm"
                            className="hover:text-[#5236FF] font-medium"
                        >
                            {feature.btn}
                        </Button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
