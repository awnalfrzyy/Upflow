"use client"

import { Button } from "../../ui/button";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        category1: "Marketing",
        category2: "Analysis",
        date: "21 Februari 2025",
        title: "10 Top Tips for Making Your SaaS Product Sticky",
        desc: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
        image: "/pexels-canvastudio-3194521.jpg",
    },
    {
        category1: "Design",
        category2: "UI/UX",
        date: "12 Maret 2025",
        title: "How Great UI Design Impacts User Retention",
        desc: "Learn how thoughtful design choices improve user engagement and long-term product loyalty.",
        image: "/pexels-tranmautritam-326501.jpg",
    },
    {
        category1: "Code",
        category2: "Frontend Developer",
        date: "15 Mei 2025",
        title: "Mastering the Art of Reusable Components",
        desc: "A guide to creating reusable and efficient UI components for scalable apps.",
        image: "/pexels-divinetechygirl-1181467.jpg",
    },
];

export default function Blog() {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const handleNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const currentSlide = slides[current];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="min-h-screen bg-transparent px-28 py-20 flex flex-col gap-12 overflow-hidden">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
                <Button variant="disabled" className="w-fit">Blog</Button>
                <h1 className="font-bold text-4xl text-gray-900 max-w-[539px] leading-tight">
                    Powerful insights to boost your productivity
                </h1>
            </div>

            <div className="relative flex items-center justify-center w-full">
                <div className="relative w-[800px] h-[480px] rounded-3xl overflow-hidden ">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-10 text-white max-w-xl">
                                <div className="flex gap-3 mb-3">
                                    <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                        {currentSlide.category1}
                                    </Button>
                                    <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                        {currentSlide.category2}
                                    </Button>
                                </div>

                                <p className="text-sm text-white/70">{currentSlide.date}</p>
                                <h2 className="text-3xl font-bold mt-2 leading-snug">{currentSlide.title}</h2>
                                <p className="text-white/80 text-sm mt-3 leading-relaxed">
                                    {currentSlide.desc}
                                </p>

                                <Button variant="link" className="mt-4 text-white font-semibold hover:text-white/80">
                                    View Class →
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute left-10">
                    <Button
                        size="icon"
                        onClick={handlePrev}
                        className="bg-black/20 text-white hover:bg-black/40 rounded-full"
                    >
                        <ChevronLeft />
                    </Button>
                </div>
                <div className="absolute right-10">
                    <Button
                        size="icon"
                        onClick={handleNext}
                        className="bg-black/20 text-white hover:bg-black/40 rounded-full"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
