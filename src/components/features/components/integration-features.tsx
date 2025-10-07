'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const cards = [
    {
        image: "/facebook.svg",
        title: "Facebook",
        type: "Social",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    },
    {
        image: "/twitter.svg",
        title: "Twitter",
        type: "Social",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    },
    {
        image: "/tiktok.svg",
        title: "Tiktok",
        type: "Social",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    },
    {
        image: "/pinterest.svg",
        title: "Pinterest",
        type: "Social",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    },
    {
        image: "/twitch.svg",
        title: "Twitch",
        type: "Social",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    },
    {
        image: "/google-sheets.svg",
        title: "Google Sheets",
        type: "Data",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    },
]

export default function IntegrationFeatures() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-18 bg-neutral-50">
            {/* Header */}
            <div className="pb-30 text-center">
                <Button variant="disabled" className="mb-4">Features</Button>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="font-bold text-3xl md:text-5xl text-black max-w-[540px] mx-auto leading-tight">
                        Powerful features to boost your productivity
                    </h1>
                </motion.div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
                {cards.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.type}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </div>

                        <div className="pt-6 flex">
                            <Button
                                variant="link"
                                className="px-0 font-medium text-[#6B6B6B] hover:text-[#5236FF] transition-colors"
                            >
                                View Integration
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
