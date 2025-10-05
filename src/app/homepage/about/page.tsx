import HeaderAbout from "@/components/about-parent/header-about";
import HeaderSectionAbout from "@/components/about-parent/header-section";

export default function About() {
    return (
        <div className="py-30">
            <div className="">
                <HeaderAbout />
            </div>
            <div className="">
                <HeaderSectionAbout />
            </div>
        </div>
    )
};
