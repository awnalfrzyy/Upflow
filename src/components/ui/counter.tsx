'use client'

import { motion, useMotionValue, animate } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedCounterProps {
    from?: number
    to: number
    duration?: number
    className?: string
    wrapperClassName?: string
    format?: "plain" | "rupiah" | "short" | ((n: number) => string)
}

export default function AnimatedCounter({
    from = 0,
    to,
    duration = 2,
    className,
    wrapperClassName,
    format = "plain",
}: AnimatedCounterProps) {
    const count = useMotionValue(from)
    const [val, setVal] = useState(from)

    useEffect(() => {
        const controls = animate(count, to, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => setVal(Math.floor(v)),
        })
        return controls.stop
    }, [count, to, duration])

    const formatValue = (n: number) => {
        if (typeof format === "function") return format(n)
        switch (format) {
            case "rupiah":
                return "Rp " + n.toLocaleString("id-ID")
            case "short":
                return n.toLocaleString("id-ID") + "+"
            default:
                return n.toLocaleString("id-ID")
        }
    }

    return (
        <div className={wrapperClassName}>
            <motion.span className={className}>{formatValue(val)}</motion.span>
        </div>
    )
}
