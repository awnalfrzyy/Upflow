'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
    return (
        <div className="gap-8 sm:gap-12 lg:gap-20 flex flex-col lg:flex-row items-center justify-center min-h-screen py-8 sm:py-12 lg:py-0  w-full max-w-7xl mx-auto">

            {/* Text Content - Comes first on mobile, second on desktop */}
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

            {/* Image Content - Comes second on mobile, first on desktop */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
            >
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl">
                    <Image
                        src="/PanelOne.png"
                        alt="Panel Illustration"
                        width={560}
                        height={560}
                        className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl shadow-lg"
                    />
                </div>
            </motion.div>
        </div>
    );
}