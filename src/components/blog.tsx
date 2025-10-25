'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { blogs } from "@/data/blog"

export default function HeaderBlog() {
    return (
        <section className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center mb-10 sm:mb-12 md:mb-16"
            >
                <Button variant="disabled" className="mb-4">
                    Blog
                </Button>
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black max-w-[680px] mx-auto leading-tight">
                    News & Articles
                </h1>
            </motion.div>
            <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(360px,2fr))] justify-center  gap-4 sm:gap-6 md:gap-8  w-full max-w-7xl mx-auto">
                {blogs.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="relative group w-full h-64  scale-95 sm:scale-100 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white z-10">
                            <p className="text-xs sm:text-sm opacity-80">{item.date}</p>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1 mb-2 leading-snug group-hover:text-[#A99FFF] transition-colors">
                                {item.title}
                            </h2>
                            <p className="text-sm md:text-base text-gray-200 line-clamp-3">
                                {item.text}
                            </p>
                            <div className="pt-4">
                                <Button
                                    variant="link"
                                    className="text-white hover:text-[#A99FFF] px-0 font-medium transition-colors"
                                >
                                    Read More →
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
