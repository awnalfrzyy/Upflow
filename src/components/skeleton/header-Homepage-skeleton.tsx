

export default function HeaderSkeleton() {
    return (
        <div className="relative h-screen w-full flex items-center px-48 animate-pulse">
            <div className="gap-10 flex items-center justify-between w-full">
                <section className="w-[510px] flex flex-col gap-6 z-10">
                    <div className="h-10 bg-neutral-300 rounded w-3/4" />
                    <div className="h-10 bg-neutral-300 rounded w-1/2" />
                    <div className="h-10 bg-neutral-300 rounded w-2/3" />

                    <div className="h-4 bg-neutral-300 rounded w-full mt-4" />
                    <div className="h-4 bg-neutral-300 rounded w-5/6" />

                    <div className="flex gap-4 mt-6">
                        <div className="h-10 w-28 bg-neutral-300 rounded-full" />
                        <div className="h-10 w-28 bg-neutral-300 rounded-full" />
                    </div>
                </section>

                <div className="z-10">
                    <div className="w-[420px] h-[420px] bg-neutral-300 rounded-2xl" />
                </div>
            </div>
        </div>
    );
}
