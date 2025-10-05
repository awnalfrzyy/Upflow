'use client'

import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const pricingPlans = [
    {
        title: "Basic",
        badge: "Save 30%",
        price: "$7.99",
        period: "/month",
        yearly: "Billed as $96 per year",
        features: [
            "Unlimited members",
            "**Unlimited** feedback",
            "Weekly team Feedback Friday",
            "Custom Kudos **+9 illustration**",
            "Team feedback history",
        ],
        btnVariant: "outline",
    },
    {
        title: "Advanced",
        badge: "Popular",
        price: "$10.99",
        period: "/month",
        yearly: "Billed as $199 per year",
        features: [
            "Unlimited members",
            "**Unlimited** feedback",
            "Weekly team Feedback Friday",
            "Custom Kudos **+9 illustration**",
            "Team feedback history (30 items)",
            "Personal feedback history (6 items)",
            "Slack integration",
        ],
        btnVariant: "default",
    },
];

export default function Pricing() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center px-8 lg:px-48 py-24 bg-white gap-10 lg:gap-x-20">

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-start max-w-lg gap-6"
            >
                <Button variant="disabled">Pricing</Button>
                <h1 className="text-4xl font-bold text-gray-900">Simple and flexible pricing</h1>
                <p className="text-gray-600">
                    It is a long established fact that a reader will be distracted by readable content.
                </p>

                <p className="mt-8 text-gray-700 font-medium">Accepted Payment Methods</p>
                <div className="flex gap-6 mt-4 opacity-80">
                    {["visa", "googlepay", "paypal", "amazon"].map((src, idx) => (
                        <Image
                            key={idx}
                            src={`/${src}.svg`}
                            alt={src}
                            width={40}
                            height={40}
                            className="h-10 w-auto"
                        />
                    ))}
                </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="flex flex-col lg:flex-row gap-8">
                {pricingPlans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 + i * 0.2 }}
                        className={`relative flex flex-col items-center text-center px-10 py-12 rounded-2xl border w-72 ${i === 1 ? "bg-[#F9F9FF] border-[#E3E0FF] shadow-md scale-105" : "bg-white border-gray-200 shadow-sm"
                            }`}
                    >
                        {/* Badge */}
                        <div
                            className={`absolute top-5 right-6 text-xs font-medium px-3 py-1 rounded-full ${i === 0 ? "bg-gray-100 text-gray-700" : "bg-[#EDEBFF] text-[#5236FF]"
                                }`}
                        >
                            {plan.badge}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-4">{plan.title}</h3>

                        <p className="mt-6 text-5xl font-extrabold text-gray-900">
                            {plan.price}
                            <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                        </p>

                        <p className="mt-2 text-sm text-[#5236FF] font-medium bg-[#FFF3D6] rounded-full px-4 py-1">
                            {plan.yearly}
                        </p>

                        <hr className="w-full border-t border-gray-200 my-8" />

                        <ul className="space-y-3 text-gray-700 text-sm">
                            {plan.features.map((f, idx) => (
                                <li
                                    key={idx}
                                    dangerouslySetInnerHTML={{
                                        __html: f.replace(
                                            /\*\*(.*?)\*\*/g,
                                            '<span class="font-semibold text-[#5236FF]">$1</span>'
                                        ),
                                    }}
                                />
                            ))}
                        </ul>

                        <Button
                            variant={plan.btnVariant as "default" | "outline"}
                            className={`mt-10 px-8 py-5 rounded-full text-base font-medium w-full ${i === 1 ? "bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white" : "bg-white border border-gray-300 hover:bg-gray-100 text-[#1E1E1E]"
                                }`}
                        >
                            Get Started
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
