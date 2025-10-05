"use client"

import { withSkeleton } from "@/helper/withSkeleton"
import { BlogSkeleton } from "@/components/skeleton/blog-skeleton"

// Panggil utilitasnya dengan factory dan skeleton
const BlogSection = withSkeleton(
    () => import("@/components/homepage-parent/components/blog"),
    BlogSkeleton
)

export default function BlogPage() {
    return <BlogSection />
}
