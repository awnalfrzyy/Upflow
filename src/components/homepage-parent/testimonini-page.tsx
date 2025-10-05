"use client"

import dynamic from "next/dynamic"
import { TestimonialSkeleton } from "../skeleton/testinomonial-homepage-skeleton"

// Lazy load komponen aslinya (TestimonialReal)
const Testimonial = dynamic(() => import("./components/testimonial"), {
    loading: () => <TestimonialSkeleton />, // tampil saat loading
    ssr: false,
})

export default function TestimonialPage() {
    // Wrapper: bisa buat efek fade-in, props tambahan, dll
    return <Testimonial />
}
