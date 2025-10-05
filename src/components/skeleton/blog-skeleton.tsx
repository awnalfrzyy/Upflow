import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkeleton() {
    return (
        <div className="min-h-screen bg-white px-28 py-20 flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center gap-4">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-10 w-[400px]" />
            </div>

            <div className="w-full flex justify-center">
                <div className="relative w-[800px] h-[480px] rounded-3xl overflow-hidden">
                    <Skeleton className="absolute inset-0" />
                    <div className="absolute bottom-0 left-0 p-10 space-y-4">
                        <Skeleton className="h-6 w-[120px]" />
                        <Skeleton className="h-8 w-[300px]" />
                        <Skeleton className="h-4 w-[450px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
