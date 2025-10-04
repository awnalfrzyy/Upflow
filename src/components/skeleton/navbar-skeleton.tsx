import { Skeleton } from "@/components/ui/skeleton";

export function NavbarSkeleton() {
    return (
        <nav className="w-full px-52 py-10 bg-transparent flex justify-between">
            <Skeleton className="h-10 w-[120px] rounded-full" />

            <div className="w-[607px] py-3 bg-neutral-500/20 rounded-full text-center items-center justify-center">
                <ul className="flex justify-between px-10 items-center">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-4 w-16 rounded" />
                    ))}
                </ul>
            </div>

            <Skeleton className="h-10 w-24 rounded-full" />
        </nav>
    );
}
