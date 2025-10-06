import Features from "@/components/homepage/components/features";
import FeaturesSection from "@/components/homepage/components/features-section";
import Header from "@/components/homepage/header-page"
import Hiw from "@/components/homepage/components/hiw";
import Pricing from "@/components/homepage/components/pricing";
import PricingSectionPage from "@/components/homepage/pricing-section-page";
import TestimonialPage from "@/components/homepage/testimonini-page";
import BlogPage from "@/components/homepage/blog-page";



export default function HomePage() {
    return (
        <div className="z-0 ">
            <Header />
            <div className="py-10">
                <Features />
            </div>
            <div>
                <FeaturesSection />
            </div>
            <div>
                <Hiw />
            </div>
            <div className="mt-20">
                <TestimonialPage />
            </div>
            <div>
                <Pricing />
            </div>
            <div>
                <PricingSectionPage />
            </div>
            <div>
                <BlogPage />
            </div>
        </div>
    )
};
