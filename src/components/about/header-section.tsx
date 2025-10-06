'use client'

import { motion } from "framer-motion"
import AnimatedCounter from "../ui/counter"

export default function HeaderSectionAbout() {

    const counters = [
        { to: 100, formatSymbol: "M", text: "Client Satisfaction" },
        { to: 24, formatSymbol: "H", text: "Expert Support Team" },
        { to: 98, formatSymbol: "K+", text: "Sales Count" },
        { to: 208, formatSymbol: "+", text: "Client Worldwide" },
    ]

    return (
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
    )
}
