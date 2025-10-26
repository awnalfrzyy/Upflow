'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Paraf, counters, Data, CardWork } from "@/data/about"
import AnimatedCounter from "./ui/counter"
import { Button } from "./ui/button"
import FullBleed from "./ui/FullBleed"


export default function AboutPage() {
    return (
        <FullBleed>
            <div className="relative min-h-screen flex flex-col justify-center items-center gap-2 px-8 ">

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

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                    {["image/company.jpg", "image/company(1).jpg"].map((src, i) => (
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

                <div className="relative bg-neutral-400/10 mt-20 rounded-4xl w-full max-w-5xl mx-auto 
                                    py-15 px-10 flex flex-row justify-around items-center gap-4">
                    {counters.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="flex flex-col gap-2 items-center"
                        >
                            <div className="flex items-end gap-1">
                                <AnimatedCounter
                                    to={item.to}
                                    duration={3}
                                    className="text-5xl font-black text-black"
                                />
                                <span className="text-5xl font-bold text-gray-700">
                                    {item.formatSymbol}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-neutral-700">{item.text}</p>
                        </motion.div>
                    ))}

                </div>
                <div className="gap-8 sm:gap-12 lg:gap-20 flex flex-col lg:flex-row items-center justify-center min-h-screen py-8 sm:py-12 lg:py-0  w-full max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 sm:gap-8 lg:gap-6 w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 items-start "
                    >
                        <h1 className="font-bold text-4xl">Our Mission</h1>
                        <p className="text-gray-700 text-base sm:text-sm lg:text-[18px] leading-relaxed sm:leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu aliquet diam lorem
                            viverra at justo. Nulla odio nequefjf gravida in pharetra egestas. Ac id sagittis at morbi
                            interdum nibh diam sagittis et.
                        </p>
                        <p className="text-gray-700 text-base sm:text-sm lg:text-[18px] leading-relaxed sm:leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem
                            viverra at justo. Nulla odio nequesg gravida in pharetra egestas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl">
                            <Image
                                src="/element/PanelOne.png"
                                alt="Panel Illustration"
                                width={560}
                                height={560}
                                className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl shadow-lg"
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="min-h-screen flex flex-col items-center justify-center py-20 gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        <Button variant="ghost">Our Values</Button>
                        <h1 className="font-bold text-4xl md:text-5xl text-black max-w-[650px] mx-auto py-6">
                            The story and values behind
                            our company
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
                        {Data.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-start gap-4  bg-white rounded-xl shadow-sm hover:shadow-md  p-5 transition-all duration-300 h-auto "
                                >
                                    <div className="flex-shrink-0 p-6 bg-[#6046FF] rounded-xl text-neutral-800 items-center">
                                        <Icon size={26} strokeWidth={2} />
                                    </div>

                                    <div className="flex flex-col gap-1 text-left">
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
                <div className="min-h-screen w-full flex flex-col justify-center items-center py-20 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto mb-16"
                    >
                        <Button variant="ghost">Career</Button>
                        <h1 className="font-bold text-4xl text-black py-6 w-[500px]">
                            Join our SaasupLet’s work together
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-center">
                        {CardWork.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                                    <p className="text-gray-700 text-sm mt-4 leading-relaxed">{item.text}</p>
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
    )
};
