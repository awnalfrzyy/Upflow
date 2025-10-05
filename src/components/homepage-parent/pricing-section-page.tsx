"use client"

import { withSkeleton } from "@/helper/withSkeleton"
import { PricingSectionSkeleton } from "@/components/skeleton/pricing-section-skeleton"

// Panggil utilitasnya dengan factory dan skeleton
const PricingSection = withSkeleton(
    () => import("@/components/homepage-parent/components/pricing-section"),
    PricingSectionSkeleton
)

export default function PricingSectionPage() {
    return <PricingSection />
}
