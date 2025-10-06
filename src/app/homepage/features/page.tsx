import Analys from "@/components/features/components/analys";
import HeaderFeatures from "@/components/features/components/header-features";
import Integration from "@/components/features/components/integration";
import PricingSection from "@/components/homepage/components/pricing-section";
import Line from "@/components/ui/line";


export default function Featurespage() {
    return (
        <div className="">
            <HeaderFeatures />
            <Analys />
            <section className="h-60 w-full flex justify-center items-center">
                <Line thickness={1} color="black" length={1000} />
            </section>
            <Integration />
            <PricingSection />
        </div>
    )
};
