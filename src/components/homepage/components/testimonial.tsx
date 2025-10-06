"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: "Rizky",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Awin",
        text: "UX-nya smooth, responsif, dan cepat banget! Gue jadi makin semangat ngerjain proyek front-end.",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        name: "Salsa",
        text: "Next.js + Tailwind = combo terbaik 💅. Produktivitas naik, tampilan makin rapih!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
]

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        )
    }

    return (
        <div className="h-screen bg-[#5236FF] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen relative w-full flex flex-col items-center justify-center overflow-hidden text-white">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                <div className="text-center mb-30">
                    <Button variant="disabled" className="bg-white text-[#5236FF] hover:bg-white/90">
                        Testimonial
                    </Button>
                    <h1 className="text-4xl font-bold mt-6">Trusted by millions of creators.</h1>
                </div>

                <div className="relative w-full max-w-2xl flex items-center justify-center">

                    <Button
                        onClick={handlePrev}
                        variant="ghost"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:bg-white/10"
                    >
                        <ChevronLeft className="w-10 h-10 text-white" />
                    </Button>

                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            width: `${testimonials.length * 100}%`,
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-10"
                            >
                                <Avatar className="w-20 h-20 mb-6">
                                    <AvatarImage src={item.avatar} alt={item.name} />
                                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                </Avatar>

                                <p className="text-xl italic max-w-lg leading-relaxed">
                                    “{item.text}”
                                </p>
                                <h3 className="font-semibold text-lg mt-4 text-white/90">
                                    — {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        variant="ghost"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:bg-white/10"
                    >
                        <ChevronRight className="w-10 h-10 text-white" />
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}
