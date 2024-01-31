import Hero from "@/app/components/hero";
import About from "@/app/(about)/about";
import Contact from "@/app/(contact)/contact";
import Experience from "@/app/(experience)/experience";


export default function Home() {
    return (

            <body className="mx-auto overflow-x-hidden min-h-screen max-w-screen-xl py-12 md:py-20 lg:py-0">
                <div className="mx-4 lg:flex lg:justify-between lg:gap-4">
                    <div
                        className="w-fit lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <Hero/>
                        <div
                            className="absolute rounded inset-0 blur-lg flex justify-center items-center -z-10">
                            <div className="top"></div>
                            <div className="bottom"></div>
                        </div>
                    </div>
                    <main className="lg:w-1/2 bg-primary">
                        <About/>
                        <Experience/>

                        <Contact/>

                    </main>
                </div>


            </body>

    )
}
