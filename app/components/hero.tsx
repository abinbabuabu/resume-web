import React from 'react';
import Nav from './nav';
import SocialHandles from "@/app/components/social-handles";

export default function Hero() {
    return (
        <main className="lg:pl-16 md:pl-8 " >
            <header>
                <h4 className="my-2 text-lg text-normalText ">Hello I&apos;m</h4>
                <h2 className="inline text-textOnPrimary  my-2 text-h1 font-bold hover:text-transparent hover:gradient-text hover:bg-clip-text bg-300% animate-gradient">Abin Babu</h2>
                <p className="w-fit font-bold relative  text-xl text-normalText before:absolute before:inset-0 before:animate-typewriter before:bg-primary
after:absolute after:inset-0 after:w-[0.1em] after:animate-caret after:bg-white">
                    Software Engineer  <span className="text-accent">@</span> SAP
                </p>

                <Nav/>

                <SocialHandles/>


            </header>
        </main>
    )
}
