import Carrer from "@/components/about/carrer";
import HeaderAbout from "@/components/about/header-about";
import HeaderSectionAbout from "@/components/about/header-section";
import OnValues from "@/components/about/on-values";
import OurMission from "@/components/about/ourMission";

export default function About() {
    return (
        <main className="flex flex-col py-30">
            <HeaderAbout />
            <HeaderSectionAbout />
            <OurMission />
            <OnValues />
            <Carrer />
        </main>
    );
}
