import { Skeleton } from "../ui/skeleton"

export function TestimonialSkeleton() {
    return (
        <div className="h-screen bg-[#5236FF] flex flex-col items-center justify-center text-white">
            {/* Header */}
            <div className="text-center mb-16">
                <Skeleton className="h-10 w-40 mx-auto mb-4 bg-white/20" />
                <Skeleton className="h-8 w-[320px] mx-auto bg-white/20" />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <Skeleton className="w-20 h-20 rounded-full bg-white/30" /> {/* avatar */}
                <Skeleton className="w-[500px] h-6 bg-white/30" />
                <Skeleton className="w-[300px] h-6 bg-white/30" />
                <Skeleton className="w-[200px] h-5 mt-4 bg-white/30" />
            </div>
        </div>
    )
}
