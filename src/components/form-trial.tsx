import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Image from "next/image"

export default function FormTrial() {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-[#684FFF] to-[#A388FF] px-6 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20 text-white shadow-xl">
                    <div className="flex flex-col gap-6 z-10">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                            Start your growth journey today
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                            Subscribe to get the latest updates, tips, and exclusive deals for your team.
                            Grow faster and stay ahead with our powerful platform.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/20 border border-white/40 text-white placeholder:text-white/60 focus-visible:ring-white/40 px-4 sm:px-6 py-5 sm:py-7 rounded-full flex-1"
                            />
                            <Button
                                type="submit"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#684FFF] rounded-full hover:bg-gray-100 font-semibold whitespace-nowrap"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden lg:flex items-center justify-center">
                        <Image
                            src="elements/Image(3).svg"
                            alt="Panel Illustration"
                            width={400}
                            height={400}
                            className="drop-shadow-2xl z-10"
                            priority
                        />
                        <Image
                            src="elements/Image(2).svg"
                            alt="Panel Illustration Small"
                            width={220}
                            height={220}
                            className="absolute -bottom-5 right-10 z-20"
                            priority
                        />
                    </div>

                    <div className="absolute -top-20 -left-20 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    )
};
