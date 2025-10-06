'use client'

import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Card = [
    { title: "Web Designer & Developer", type: "San Francisco, CA | Full Time", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    { title: "Frontend Engineer", type: "Remote | Contract", text: "Work with React, TypeScript, and Tailwind CSS. Build clean, scalable, and performant UIs." },
    { title: "Backend Developer", type: "New York, NY | Full Time", text: "Design scalable backend services using Node.js and collaborate closely with the frontend team." },
    { title: "UI/UX Designer", type: "Remote | Part Time", text: "Craft stunning and user-friendly designs that elevate the product experience." },
    { title: "Mobile Developer", type: "Jakarta, ID | Full Time", text: "Develop modern mobile apps using Flutter or React Native with focus on performance and UX." },
    { title: "QA Engineer", type: "Singapore | Remote", text: "Ensure the highest quality by designing and executing comprehensive testing processes." },
];

export default function Career() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center py-20 text-center">

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mx-auto mb-16"
            >
                <Button variant="disabled">Career</Button>
                <h1 className="font-bold text-4xl text-black py-6 w-[500px]">
                    Join our SaasupLet’s work together
                </h1>
            </motion.div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-center">
                {Card.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                            <p className="text-gray-700 text-sm mt-4 leading-relaxed">{item.text}</p>
                        </div>
                        <div className="pt-6">
                            <Button variant="outline" className="w-full">
                                Apply Now
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
