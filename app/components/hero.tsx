import React from 'react';
import SocialHandles from "@/app/components/social-handles";
import NavBar from "@/app/components/nav";
import {navItems} from "@/data/content";

export default function Hero() {
    return (
        <main className="lg:pl-16 md:pl-8 ">
            <header>
                <h4 className="my-2 text-lg text-normalText ">Hello I&apos;m</h4>

                <h2 className="inline text-textOnPrimary my-2 text-4xl md:text-6xl font-bold hover:text-transparent
                hover:gradient-text hover:bg-clip-text bg-300% animate-gradient">Abin Babu</h2>

                <p className="w-fit font-bold relative  text-xl text-normalText before:absolute before:inset-0 before:animate-typewriter before:bg-primary
after:absolute after:inset-0 after:w-[0.1em] after:animate-caret after:bg-white">
                    Software Engineer <span className="text-accent">@</span> SAP
                </p>

                <NavBar navItems={navItems}/>

                <SocialHandles/>


            </header>
        </main>
    )
}
