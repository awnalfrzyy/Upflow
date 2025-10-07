import Analys from "@/components/features/components/analys";
import PricingSection from "@/components/homepage/components/pricing-section";
import IntegrationFeatures from "@/components/features/components/integration-features";
import Line from "@/components/ui/line";


export default function Featurespage() {
    return (
        <div className="">
            <Analys />
            <section className="h-10 w-full flex justify-center items-center">
                <Line thickness={1} color="black" length={1000} />
            </section>

            <IntegrationFeatures />
            <PricingSection />
        </div>
    )
};
