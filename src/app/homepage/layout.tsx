import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";



export default function HomepageLayouts({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main>
            <Navbar />
            <main className="px-40">

                {children}
            </main>
            <Footer />
        </main>

    );
};
