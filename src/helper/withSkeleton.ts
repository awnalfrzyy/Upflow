import dynamic from "next/dynamic"
import React from "react"

export function withSkeleton<T>(
  factory: () => Promise<{ default: React.ComponentType<T> }>,
  Skeleton: React.ComponentType
) {
  return dynamic(factory, {
    ssr: false,
    loading: () => React.createElement(Skeleton),
  })
}
