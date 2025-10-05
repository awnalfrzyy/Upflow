export function PricingSectionSkeleton() {
    return (
        <div className="min-h-screen flex items-center justify-center px-28 py-20 bg-white">
            <div className="relative w-full flex flex-row items-center justify-between overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black/20 to-black/20 px-16 py-20 text-white shadow-xl animate-pulse">
                <section className="flex flex-col gap-6 max-w-lg z-10">
                    <div className="h-10 w-3/4 bg-white/30 rounded-lg" />
                    <div className="space-y-3">
                        <div className="h-4 w-full bg-white/20 rounded-lg" />
                        <div className="h-4 w-5/6 bg-white/20 rounded-lg" />
                        <div className="h-4 w-4/6 bg-white/20 rounded-lg" />
                    </div>

                    <div className="flex w-full max-w-md items-center gap-3 mt-6">
                        <div className="h-12 flex-1 bg-white/20 rounded-full" />
                        <div className="h-12 w-32 bg-white/40 rounded-full" />
                    </div>
                </section>

                <div className="relative flex items-center justify-center">
                    <div className="w-[420px] h-[420px] bg-white/20 rounded-3xl" />
                    <div className="absolute -bottom-10 right-60 w-[260px] h-[260px] bg-white/30 rounded-3xl" />
                </div>

                <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    )
}
