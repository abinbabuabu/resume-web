import Hero from "@/app/components/hero";
import Nav from "@/app/components/nav";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";

export default function Home() {
    return (
        <body className="sm:overflow-visible md:overflow-hidden scroll-smooth">
            {/*<Nav/>*/}
            <div className="grid gap-8 md:grid-cols-5 sm:grid-cols-1">
                <div className="col-span-2 md:mt-24 sm:mt-12">
                    <Hero/>
                </div>
                <main className="col-span-3 overflow-y-auto md:h-screen">
                    <About/>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                </main>
            </div>


        </body>
    )
}
