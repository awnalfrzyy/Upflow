'use client'

import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardFeatures, cards } from "@/data/features";
import Line from "../ui/line";

export default function Features() {
    return (
        <section className="w-full">
            <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <Button variant="disabled" className="mb-4">Features</Button>
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black max-w-xl mx-auto leading-tight px-4">
                            Powerful features to boost your productivity
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
                    >
                        {CardFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                                className="flex flex-col items-center text-center gap-5 sm:gap-6 p-6 sm:p-0 rounded-2xl sm:rounded-3xl bg-white hover:bg-[#F9F9F9] shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-contain"
                                        priority
                                    />
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-black">
                                        {feature.title}
                                    </h2>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                                        {feature.description}
                                    </p>
                                </div>

                                <Button
                                    variant="link"
                                    size="sm"
                                    className="hover:text-[#5236FF] font-medium text-sm"
                                >
                                    {feature.btn}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center py-8 sm:py-10 md:py-12">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Line thickness={1} color="black" length={1000} />
                </div>
            </div>

            <div className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-28 bg-neutral-50">
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
        </section>
    );
}