'use client'

import { motion } from "framer-motion"
import AnimatedCounter from "../ui/counter"

export default function HeaderSectionAbout() {

    const formatM = (n: number) => `${n} M`
    const formatH = (n: number) => `${n} H`
    const formatK = (n: number) => `${n} K+`
    const formatPlus = (n: number) => `${n} +`

    const counters = [
        { to: 100, format: formatM },
        { to: 24, format: formatH },
        { to: 98, format: formatK },
        { to: 208, format: formatPlus },
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
                    className="flex flex-col items-center"
                >
                    <AnimatedCounter
                        to={item.to}
                        duration={3}
                        format={item.format}
                        className="text-5xl font-black text-black"
                    />
                </motion.div>
            ))}
        </div>
    )
}
