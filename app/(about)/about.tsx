import React from 'react';
import SectionTitle from '../components/section-title';
import Skills from "@/app/components/skills";
import {primarySkills} from "@/data/content";

export default function About() {
    return (
        <section id="about" className="text-base text-normalText md:pl-0 lg:pr-16 md:pr-8 md:pt-20 styledLink">
            <div>

                <SectionTitle title="About me"/>


                <p className=""> My superpower ? I use code to solve problems!</p>
                <br/>

                <p className="">
                    I started my journey as a software engineer while pursuing my bachelor&apos;s degree, met
                    few amazing people there and we bootstrapped{' '}
                    <a href="https://www.emildasolutions.com/">emilda solutions</a>, to solve customer
                    problems through web & mobile solutions. Fast-forward to today, I&apos;m helping the world
                    run better with <a href="https://www.sap.com/india/index.html">SAP</a>.
                </p>

                <br/>

                <p>
                    In my <a href="/#jobs">career</a>, I&apos;ve worn multiple hats as a mobile developer,
                    backend developer, and frontend developer. Passion for tinkering and figuring out new
                    things keeps me moving...
                </p>

                <br/>

                <p>Here are a few technologies I’ve been working with recently:</p>

                <Skills skills={primarySkills}/>


            </div>
        </section>
    )
}

