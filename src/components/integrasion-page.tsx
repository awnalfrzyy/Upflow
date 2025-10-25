'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { cards } from "@/data/integration";
import FormTrial from "./form-trial";
import FullBleed from "./ui/FullBleed";

export default function Integration() {
    return (
        <FullBleed className="">
            <div className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-28 px-12 sm:px-5 md:px-5 ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <Button variant="disabled" className="mb-4">Integrations</Button>
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black max-w-xl mx-auto leading-tight px-4">
                                Connect with your favorite tools
                            </h1>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {cards.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col justify-between bg-white p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                            >
                                <div>
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-gray-50 flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={48}
                                                height={48}
                                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-base sm:text-lg text-gray-900 truncate">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-500 truncate">
                                                {item.type}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                        {item.text}
                                    </p>
                                </div>

                                <div className="pt-5 sm:pt-6 flex">
                                    <Button
                                        variant="link"
                                        className="px-0 font-medium text-xs sm:text-sm text-[#6B6B6B] hover:text-[#5236FF] transition-colors"
                                    >
                                        View Integration →
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="min-h-screen flex items-center justify-center  bg-white">
                <FormTrial />
            </motion.div>

        </FullBleed>

    )
};
