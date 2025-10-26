"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/homepage");
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <Image
        src="icons/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        priority
      />
    </div>
  );
}
