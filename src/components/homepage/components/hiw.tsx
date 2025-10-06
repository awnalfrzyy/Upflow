'use client'

import Image from "next/image";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";

const Btn = [
    { title: "01. Create account" },
    { title: "02. Install tracking code" },
    { title: "03. Track analytics" },
];

export default function Hiw() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center gap-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col items-center gap-6 max-w-xl"
            >
                <Button variant="disabled">How It Work</Button>

                <h1 className="font-bold text-4xl text-black">
                    Work smarter with easy access for user..
                </h1>

                <section className="flex gap-3 flex-row justify-center">
                    {Btn.map((item, i) => (
                        <Button key={i} variant="secondary" size="xl">
                            {item.title}
                        </Button>
                    ))}
                </section>
            </motion.div>

            <div className="flex flex-col lg:flex-row w-full gap-10 justify-center items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="flex flex-col gap-5 max-w-sm"
                >
                    <section className="flex flex-row gap-4 items-start">
                        <Image src="/Icon(5).svg" alt="icon money" width={64} height={64} />
                        <div className="flex flex-col text-start">
                            <h2 className="text-2xl font-semibold text-black">
                                Create your account & start your work
                            </h2>
                        </div>
                    </section>

                    <p className="text-gray-700">
                        It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum
                    </p>

                    <Button size="lg">Get Started</Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/Group 15.svg"
                        alt="illustration"
                        width={380}
                        height={380}
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
}
