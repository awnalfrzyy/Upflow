"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { ChevronRight, ChevronLeft } from "lucide-react"
import FullBleed from "./ui/FullBleed";
import { cardFeatures, BtnHIW, pricingPlans, testimonials } from "@/data/homepage";
import FormTrial from "./form-trial";
import { Cards } from "./cards";

export default function Home() {
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
        <>
            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute right-0 -top-20 h-full hidden lg:flex pointer-events-none">
                <Image
                    src="elements/Background.svg"
                    alt="Background"
                    width={1020}
                    height={1020}
                    className="object-contain"
                    priority
                    unoptimized
                />
            </motion.div>
            <FullBleed className="overflow-x-hidden">
                {/* HERO SECTION */}
                <div className="min-h-screen flex items-center relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-12 md:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="z-10 order-2 lg:order-1"
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-neutral-900">
                                    Build your <br /> audience and <br /> grow your brand
                                </h1>
                                <p className="text-gray-900 mt-4 sm:mt-6 text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum
                                    ullamcorper sed pharetra sene.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                                    <Button
                                        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                                        variant="secondary"
                                        className="w-full sm:w-auto">Get Started</Button>
                                    <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                className="z-10 order-1 lg:order-2"
                            >
                                <Image
                                    src="elements/PanelOne.png"
                                    alt="Panel Illustration"
                                    width={920}
                                    height={920}
                                    className="w-full h-auto max-w-md lg:max-w-full mx-auto"
                                    priority
                                    unoptimized
                                />
                            </motion.div>
                        </div>
                    </div>


                </div>

                {/* FEATURES SECTION */}
                <div className="min-h-screen flex flex-col justify-center items-center py-12 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center mb-8 md:mb-12"
                        >
                            <Button variant="ghost" className="mb-4">Features</Button>
                            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black max-w-xl mx-auto px-4">
                                Powerful features to boost your productivity
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                            {cardFeatures.map((feature, i) => (
                                <Cards
                                    key={i}
                                    image={feature.image}
                                    title={feature.title}
                                    text={feature.description}
                                    href={feature.href}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="min-h-screen flex items-center relative overflow-hidden">
                    <div className="mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-10 z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

                            <div className="order-1 lg:order-2 flex justify-center">
                                <Image
                                    src="elements/Image(1).svg"
                                    alt="Hero"
                                    width={500}
                                    height={500}
                                    className="w-full max-w-sm sm:max-w-md"
                                />

                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="order-2 lg:order-1 max-w-full sm:max-w-md lg:max-w-xl text-center lg:text-left"
                            >
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight mb-4">
                                    Powerful and easy to use saas builder platform
                                </h1>
                                <p className="text-gray-600 mb-8 text-sm sm:text-base">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>

                                <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start bg-neutral-100 p-2 rounded-xl">
                                    <Image
                                        src="icons/Icon(4).svg"
                                        alt="icon money"
                                        width={64}
                                        height={64}
                                        className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 "
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="text-lg sm:text-xl font-semibold text-black mb-2">
                                            Cost Effective
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>


                {/* HOW IT WORKS SECTION */}
                <div className="min-h-screen flex flex-col justify-center py-12 md:py-20">
                    <div className="containe mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center gap-6 max-w-2xl mx-auto text-center mb-12"
                        >
                            <Button variant="ghost">How It Work</Button>

                            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black px-4">
                                Work smarter with easy access for user..
                            </h1>

                            <div className="flex flex-row gap-3 justify-center">
                                {BtnHIW.map((item, i) => (
                                    <Button key={i} variant="secondary" size="lg" className="text-sm sm:text-base">
                                        {item.title}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="flex flex-col gap-5"
                            >
                                <div className="flex gap-4 items-start">
                                    <Image src="/Icon(5).svg" alt="icon" width={64} height={64} className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16" />
                                    <h2 className="text-xl sm:text-2xl font-semibold text-black text-left">
                                        Create your account & start your work
                                    </h2>
                                </div>

                                <p className="text-gray-700 text-sm sm:text-base">
                                    It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum
                                </p>

                                <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                className="flex justify-center"
                            >
                                <Image
                                    src="elements/Group 15.svg"
                                    alt="illustration"
                                    width={380}
                                    height={380}
                                    className="object-contain w-full max-w-xs sm:max-w-sm"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* PRICING SECTION */}
                <div id="pricing" className="min-h-screen py-12 md:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="lg:col-span-4 flex flex-col gap-6"
                            >
                                <Button variant="ghost" className="w-fit">Pricing</Button>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                    Simple and flexible pricing
                                </h1>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    It is a long established fact that a reader will be distracted by readable content.
                                </p>

                                <div className="mt-4">
                                    <p className="text-gray-700 font-medium mb-4">Accepted Payment Methods</p>
                                    <div className="flex gap-4 flex-wrap opacity-80">
                                        {["visa", "googlepay", "paypal", "amazon"].map((src, idx) => (
                                            <Image
                                                key={idx}
                                                src={`icons/${src}.svg`}
                                                alt={src}
                                                width={40}
                                                height={40}
                                                className="h-8 sm:h-10 w-auto"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                {pricingPlans.map((plan, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
                                        className={`relative flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 py-10 sm:py-12 rounded-2xl border ${i === 1
                                            ? "bg-[#F9F9FF] border-[#E3E0FF] shadow-md md:scale-105"
                                            : "bg-white border-gray-200 shadow-sm"
                                            }`}
                                    >
                                        <div
                                            className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full ${i === 0 ? "bg-gray-100 text-gray-700" : "bg-[#EDEBFF] text-[#5236FF]"
                                                }`}
                                        >
                                            {plan.badge}
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">{plan.title}</h3>

                                        <p className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                                            {plan.price}
                                            <span className="text-base sm:text-lg font-normal text-gray-600">{plan.period}</span>
                                        </p>

                                        <p className="mt-2 text-xs sm:text-sm text-[#5236FF] font-medium bg-[#FFF3D6] rounded-full px-4 py-1">
                                            {plan.yearly}
                                        </p>

                                        <hr className="w-full border-t border-gray-200 my-6 sm:my-8" />

                                        <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm text-left w-full">
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
                                            className={`mt-8 sm:mt-10 px-6 sm:px-8 py-4 sm:py-5 rounded-full text-sm sm:text-base font-medium w-full ${i === 1
                                                ? "bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white"
                                                : "bg-white border border-gray-300 hover:bg-gray-100 text-[#1E1E1E]"
                                                }`}
                                        >
                                            Get Started
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-white">
                    <FormTrial />
                </motion.div>

                {/* TESTIMONIAL SECTION */}
                <div className="min-h-screen  flex flex-col items-center justify-center  py-12 md:py-20 text-white overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="container mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <div className="text-center mb-8 md:mb-12">
                            <Button variant="ghost" className=" bg-[#5236FF] text-white  mb-4">
                                Testimonial
                            </Button>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                                Trusted by millions of creators.
                            </h1>
                        </div>

                        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center px-12 sm:px-16">
                            <Button
                                onClick={handlePrev}
                                variant="ghost"
                                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:bg-white/10"
                            >
                                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black" />
                            </Button>

                            <div className="overflow-hidden w-full">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * 100}%)`,
                                    }}
                                >
                                    {testimonials.map((item, i) => (
                                        <div
                                            key={i}
                                            className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4 sm:px-6"
                                        >
                                            <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mb-6">
                                                <AvatarImage src={item.avatar} alt={item.name} />
                                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                            </Avatar>

                                            <p className="text-base sm:text-lg lg:text-xl italic max-w-2xl leading-relaxed text-black">
                                                {item.text}
                                            </p>
                                            <h3 className="font-semibold text-base sm:text-lg mt-4 text-black">
                                                — {item.name}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <Button
                                onClick={handleNext}
                                variant="ghost"
                                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:bg-white/10"
                            >
                                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black" />
                            </Button>

                        </div>
                    </motion.div>
                </div>
            </FullBleed>
        </>
    );
}