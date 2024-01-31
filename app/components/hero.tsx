import React from 'react';
import SocialHandles from "@/app/components/social-handles";
import NavBar from "@/app/components/nav";
import {navItems, socialHandles} from "@/data/content";

import {Special_Elite} from 'next/font/google'

const fontSpecialElite = Special_Elite({ weight:"400", subsets: ['latin'] })

export default function Hero() {
    return (
        <main className="lg:pl-16 md:pl-8 ">
            <header>
                <h4 className={`${fontSpecialElite.className} my-2 text-lg text-normalText `}>Hello, &nbsp; I&apos;m</h4>

                <a href='/'>
                    <h2 className={`${fontSpecialElite.className} inline text-textOnPrimary my-2 text-4xl md:text-6xl font-bold hover:text-transparent
                hover:gradient-text hover:bg-clip-text bg-300% animate-gradient`}>Abin Babu</h2>
                </a>


                <p className={`${fontSpecialElite.className} w-fit font-bold relative  text-xl text-normalText before:absolute before:inset-0 before:animate-typewriter before:bg-primary
after:absolute after:inset-0 after:w-[0.1em] after:animate-caret after:bg-white after:h-[1.4rem] `}>
                    Software Engineer <span className="text-accent">@</span>SAP &nbsp;
                </p>

                <NavBar navItems={navItems}/>

                <SocialHandles socialHandles={socialHandles}/>


            </header>
        </main>
    )
}
