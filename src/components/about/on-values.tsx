'use client'

import { motion } from "framer-motion"
import { Button } from "../ui/button";
import { Lightbulb, Award, Users, ShieldCheck } from "lucide-react"; // lucide icons

// Data Section
const Data = [
    { icon: Lightbulb, title: "Innovation", text: "Constantly seeking creative solutions to push boundaries and create impact." },
    { icon: Award, title: "Excellence", text: "Committed to delivering top-notch results with precision and quality." },
    { icon: Users, title: "Team Work", text: "Collaboration and shared vision drive our success every single day." },
    { icon: ShieldCheck, title: "Responsibility", text: "Taking ownership and accountability for every decision and outcome." },
];

export default function OnValues() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-20 gap-12">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <Button variant="disabled">Our Values</Button>
                <h1 className="font-bold text-4xl md:text-5xl text-black max-w-[650px] mx-auto py-6">
                    The story and values behind
                    our company
                </h1>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
                {Data.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="
          flex items-start gap-4 
          bg-white rounded-xl shadow-sm 
          hover:shadow-md 
          p-5 transition-all duration-300
          h-auto
        "
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 p-6 bg-[#6046FF] rounded-xl text-neutral-800 items-center">
                                <Icon size={26} strokeWidth={2} />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-1 text-left">
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
}
