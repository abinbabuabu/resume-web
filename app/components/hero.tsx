import React from 'react';
import Nav from './nav';
import SocialHandles from "@/app/components/social-handles";

export default function Hero() {
    return (
        <main className="lg:pl-16 md:pl-8" >
            <header>
                <h4 className="my-2 text-base">Hello I&apos;m</h4>
                <h2 className="my-2 text-5xl font-bold">Abin Babu</h2>
                <p className="">
                    I’m a software Engineer, based in Bangalore, India.
                    Currently building Sales Cloud v2 for SAP. Along with exploring new technologies and solving new problems, I also love exploring new places in my motorcycle..
                </p>

                <Nav/>

                <SocialHandles/>


            </header>
        </main>
    )
}
