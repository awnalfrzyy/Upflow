import Navbar from "@/components/navbar";



export default function HomepageLayouts({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="">

                    {children}
                </main>
            </body>
        </html>
    );
};
