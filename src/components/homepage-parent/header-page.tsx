"use client"

import { withSkeleton } from "@/helper/withSkeleton"
import HeaderSkeleton from "@/components/skeleton/header-Homepage-skeleton"

// Panggil utilitasnya dengan factory dan skeleton
const HeaderPage = withSkeleton(
    () => import("@/components/homepage-parent/components/header"),
    HeaderSkeleton
)

export default function Header() {
    return <HeaderPage />
}
