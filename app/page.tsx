import Hero from "@/app/components/hero";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Experience from "@/app/experience/page";

export default function Home() {
    return (
        <body className="overflow-visible pt-32 pb-20 scroll-smooth md:overflow-y-hidden">
            <div className="grid grid-cols-1 mx-8 gap-8 md:grid-cols-5">
                <div className="mt-12 md:col-span-2 md:mt-24">
                    <Hero/>
                </div>
                <main className="md:col-span-3 md:h-screen md:overflow-y-auto md:overflow-x-hidden ">
                    <About/>
                    <Experience/>
                    <Contact/>

                </main>
            </div>


        </body>
    )
}
