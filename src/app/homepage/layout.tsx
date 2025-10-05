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
            <main className="">

                {children}
            </main>
            <Footer />
        </main>

    );
};
