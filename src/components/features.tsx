'use client'

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { CardFeatures } from "@/data/features";
import FullBleed from "./ui/FullBleed";
import FormTrial from "./form-trial";
import { Cards } from "./cards";

export default function Features() {
    return (
        <FullBleed>
            <section className="overflow-x-hidden">
                <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-28">
                    <div className="container mx-auto px-4 sm:px-2 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-center mb-8 sm:mb-12 md:mb-16"
                        >
                            <Button variant="disabled" className="mb-4">Analytics</Button>
                            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black max-w-xl mx-auto leading-tight px-4">
                                Powerful features to boost your productivity
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
                        >
                            {CardFeatures.map((feature, i) => (
                                <Cards
                                    key={i}
                                    image={feature.image}
                                    title={feature.title}
                                    text={feature.description}
                                />


                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-28">
                    <div className="container mx-auto px-4 sm:px-2 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-center mb-8 sm:mb-12 md:mb-16"
                        >
                            <Button variant="disabled" className="mb-4">Integration</Button>
                            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black max-w-xl mx-auto leading-tight px-4">
                                Connect all your tools and work efficiently.
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
                        >
                            {CardFeatures.map((feature, i) => (
                                <Cards
                                    key={i}
                                    image={feature.image}
                                    title={feature.title}
                                    text={feature.description}
                                />


                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-white">
                    <FormTrial />
                </motion.div>
            </section>
        </FullBleed>
    );
}