import Hero from "@/app/components/hero";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Experience from "@/app/(experience)/experience";


export default function Home() {
    return (

            <body className="pl-8 pr-4 md:p-0 overflow-x-hidden justify-center md:overflow-y-hidden md:h-screen ">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
                    <div className="mt-12 md:col-span-2 md:mt-24">
                        <Hero/>
                    </div>
                    <main className="text-base md:col-span-3 md:pl-10 md:h-screen md:overflow-y-auto md:overflow-x-hidden scroll-smooth ">
                        <About/>

                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>

                        <Experience/>

                    </main>
                </div>


            </body>

    )
}
