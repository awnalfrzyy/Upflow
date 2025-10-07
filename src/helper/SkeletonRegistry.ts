// src/helper/skeletonRegistry.ts
import HeaderSkeleton from "@/components/skeleton/header-Homepage-skeleton"
import { BlogSkeleton } from "@/components/skeleton/blog-skeleton"
import { PricingSectionSkeleton } from "@/components/skeleton/pricing-section-skeleton"
import { TestimonialSkeleton } from "@/components/skeleton/testinomonial-homepage-skeleton"


export const SkeletonRegistry = {
    header: HeaderSkeleton,

    pricingSection: PricingSectionSkeleton,
    testimonial: TestimonialSkeleton,
    blog: BlogSkeleton,
}
