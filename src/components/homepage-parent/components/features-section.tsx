'use client'

import Image from "next/image";
import { motion } from "framer-motion"

export default function FeaturesSection() {
    return (
        <motion.div className="h-screen flex items-center relative">
            <div className="flex px-48 z-10 flex-1 ">
                <div className="flex flex-col gap-10 max-w-[470px] ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                        <h1 className="text-4xl font-bold text-neutral-900 leading-tight">
                            Powerful and easy to use <br /> saas builder platform
                        </h1>
                        <p className="text-gray-600">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using lorem Ipsum.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-row gap-4 max-w-sm">
                        <Image
                            src="/Icon(4).svg"
                            alt="icon money"
                            width={64}
                            height={64}
                        />
                        <section className="flex flex-col">
                            <h2 className="text-xl font-semibold text-black">Cost Effective</h2>
                            <p className="text-gray-600 ">
                                Contrary to popular belief, Lore Ipsum is not simply random text.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="bg-[#5236FF] w-72 h-[500px] rounded-tl-3xl rounded-bl-3xl absolute right-0 top-1/2 -translate-y-1/2 z-0" />

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="absolute right-10 top-1/2 -translate-y-1/2 z-10 px-38">
                <Image
                    src="/Image(1).svg"
                    alt="illustration"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </motion.div>
        </motion.div>
    );
}
