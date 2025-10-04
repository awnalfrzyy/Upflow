import Features from "@/components/homepage-parent/features";
import FeaturesSection from "@/components/homepage-parent/features-section";
import Header from "@/components/homepage-parent/header";



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
        </div>
    )
};
