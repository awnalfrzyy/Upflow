

export default function HeaderSkeleton() {
    return (
        <div className="relative h-screen w-full flex items-center px-48 animate-pulse">
            {/* Skeleton Content Section */}
            <div className="gap-10 flex items-center justify-between w-full">
                <section className="w-[510px] flex flex-col gap-6 z-10">
                    {/* Title */}
                    <div className="h-10 bg-neutral-300 rounded w-3/4" />
                    <div className="h-10 bg-neutral-300 rounded w-1/2" />
                    <div className="h-10 bg-neutral-300 rounded w-2/3" />

                    {/* Paragraph */}
                    <div className="h-4 bg-neutral-300 rounded w-full mt-4" />
                    <div className="h-4 bg-neutral-300 rounded w-5/6" />

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <div className="h-10 w-28 bg-neutral-300 rounded-full" />
                        <div className="h-10 w-28 bg-neutral-300 rounded-full" />
                    </div>
                </section>

                {/* Illustration skeleton */}
                <div className="z-10">
                    <div className="w-[820px] h-[820px] bg-neutral-300 rounded-2xl" />
                </div>
            </div>

            {/* Background skeleton */}
            <div className="absolute right-0 -top-20 h-full flex">
                <div className="w-[1020px] h-[1020px] bg-neutral-200 rounded-full" />
            </div>
        </div>
    );
}
