'use client'

import Image from "next/image";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { motion } from "framer-motion"

export default function PricingSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="min-h-screen flex items-center justify-center py-20 bg-white">
            <div className="relative w-full flex flex-row items-center justify-between overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#684FFF] to-[#A388FF] px-12 py-18 text-white shadow-xl">
                <section className="flex flex-col gap-6 max-w-lg z-10">
                    <h1 className="text-3xl font-extrabold leading-tight">
                        Start your growth journey today
                    </h1>
                    <p className="text-[16px] font-medium text-white/90 leading-relaxed w-[450px]">
                        Subscribe to get the latest updates, tips, and exclusive deals for your team.
                        Grow faster and stay ahead with our powerful platform.
                    </p>

                    <div className="flex w-full max-w-md items-center gap-3 mt-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/20 border border-white/40 text-white placeholder:text-white/60 focus-visible:ring-white/40 p-7 rounded-full"
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            size="xl"
                            className="bg-white text-[#684FFF] rounded-full  hover:bg-gray-100 font-semibold"
                        >
                            Subscribe
                        </Button>
                    </div>
                </section>

                {/* KANAN */}
                <div className="relative flex items-center justify-center flex-shrink-0">
                    <Image
                        src="/Image(3).svg"
                        alt="Panel Illustration"
                        width={400}
                        height={400}
                        className="drop-shadow-2xl z-10"
                        priority
                    />
                    <Image
                        src="/Image(2).svg"
                        alt="Panel Illustration Small"
                        width={220}
                        height={220}
                        className="absolute -bottom-5 right-70 translate-x-10 translate-y-10  z-20"
                        priority
                    />
                </div>

                <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
            </div>
        </motion.div>
    );
}
