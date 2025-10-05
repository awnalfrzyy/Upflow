import Features from "@/components/homepage-parent/components/features";
import FeaturesSection from "@/components/homepage-parent/components/features-section";
import Header from "@/components/homepage-parent/header-page"
import Hiw from "@/components/homepage-parent/components/hiw";
import Pricing from "@/components/homepage-parent/components/pricing";
import PricingSectionPage from "@/components/homepage-parent/pricing-section-page";
import TestimonialPage from "@/components/homepage-parent/testimonini-page";
import BlogPage from "@/components/homepage-parent/blog-page";



export default function HomePage() {
    return (
        <div className="z-0">
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
