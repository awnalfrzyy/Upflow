"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import FullBleed from "./ui/FullBleed";
import { Card, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { CardWork } from "@/data/about";
import { values } from "@/data/carrer";

export default function Career() {
    return (
        <FullBleed>
            <div className="flex flex-col items-center justify-center w-full  py-20 space-y-20">

                {/* ==================== ABOUT SECTION ==================== */}
                <div className="text-center max-w-6xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        About Our Company
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum
                        ullamcorper sed pharetra sene. Creating digital experiences with
                        passion and precision.
                    </motion.p>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {["/image/company.jpg", "/image/company(1).jpg"].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: i * 0.2,
                                }}
                                className="overflow-hidden rounded-2xl shadow-md"
                            >
                                <Image
                                    src={src}
                                    alt="Company"
                                    width={1020}
                                    height={1020}
                                    className="object-cover w-full h-full rounded-2xl"
                                    priority
                                    unoptimized
                                />
                            </motion.div>
                        ))}
                    </section>
                </div>

                {/* ==================== VALUES SECTION ==================== */}
                <div className="text-center max-w-5xl w-full">
                    <Button
                        variant="outline"
                        className="mx-auto mb-6 py-4 rounded-full text-base font-medium"
                    >
                        Values
                    </Button>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Values That Define Us
                    </motion.h1>
                    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {values.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                <Card className="flex flex-col items-start justify-start p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                    {/* Icon Container */}
                                    <div
                                        style={{ backgroundColor: item.color }}
                                        className={`w-20 h-20  rounded-2xl flex items-center justify-center mb-1`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                            priority
                                            unoptimized
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <CardTitle className="text-xl font-semibold text-left">
                                        {item.title}
                                    </CardTitle>

                                    <CardDescription className="mt-0 text-left text-gray-600 leading-relaxed">
                                        {item.description}
                                    </CardDescription>
                                </Card>
                            </motion.div>
                        ))}
                    </section>
                </div>

                {/* ==================== JOBS SECTION ==================== */}
                <div className="w-full max-w-6xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                        Current Job Open Positions
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {CardWork.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                            >
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                                    <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Button variant="outline" className="w-full">
                                        Apply Now
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </FullBleed>
    );
}
