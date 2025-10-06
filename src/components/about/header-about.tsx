'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const Paraf = [
    { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using." },
    { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using." }
];

export default function HeaderAbout() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center gap-2 px-8 ">

            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-bold text-center"
            >
                About our company
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-center text-gray-700 max-w-1/2 pb-10"
            >
                Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum ullamcorper sed pharetra sene.
            </motion.p>

            {/* Images */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {["/company.jpg", "/company(1).jpg"].map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
                    >
                        <Image
                            src={src}
                            alt="Company"
                            width={1020}
                            height={1020}
                            className="object-contain w-full h-auto rounded-lg"
                            priority
                            unoptimized
                        />
                    </motion.div>
                ))}
            </section>

            {/* What We Do */}
            <section className="flex flex-row items-start gap-6 mt-10 w-full max-w-full justify-between">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="text-3xl font-semibold text-center w-4xl"
                >
                    What We Do
                </motion.h2>
                <section className=" flex flex-col gap-10">

                    {/* Looping paragraph */}
                    {Paraf.map((item, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + i * 0.2 }}
                            className="text-gray-700 text-start"
                        >
                            {item.text}
                        </motion.p>
                    ))}
                </section>
            </section>

        </div>
    );
}
