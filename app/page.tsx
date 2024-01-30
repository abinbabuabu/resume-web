import Hero from "@/app/components/hero";
import About from "@/app/(about)/about";
import Contact from "@/app/contact/page";
import Experience from "@/app/(experience)/experience";


export default function Home() {
    return (

            <body className="mx-auto overflow-x-hidden min-h-screen max-w-screen-xl py-12 md:py-20 lg:py-0">
                <div className="mx-4 lg:flex lg:justify-between lg:gap-4">
                    <div className="w-fit lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <Hero/>
                    </div>
                    <main className="lg:w-1/2">
                        <About/>
                        <Experience/>

                        <Contact/>

                    </main>
                </div>


            </body>

    )
}
