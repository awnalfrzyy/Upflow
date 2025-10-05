import dynamic from "next/dynamic"

export function withSkeleton<T>(
    factory: () => Promise<{ default: React.ComponentType<T> }>,
    Skeleton: React.ComponentType
) {
    return dynamic(factory, {
        ssr: false,
        loading: () => <Skeleton />,
    })
}
