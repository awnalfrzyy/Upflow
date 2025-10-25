"use client"

import React, { ReactNode } from "react";

interface FullBleedProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function FullBleed({ children, className = "", innerClassName = "" }: FullBleedProps) {
  // This component encapsulates the left-1/2 -ml-[50vw] full-bleed pattern
  // and provides a centered inner container with max-width. Use it to
  // avoid repeating the same layout and make responsive tweaks in one place.
  return (
    <div className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${className}`}>
      <div className={`w-full max-w-7xl mx-auto ${innerClassName}`}>{children}</div>
    </div>
  );
}
