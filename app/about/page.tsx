import React from 'react';
import SectionTitle from '../components/section-title';

export default function About() {
    return (
        <section className="md:pl-0 lg:pr-16 md:pr-8 md:pt-20">
            <div>
                <SectionTitle title="About me"/>

                <p>I use code to solve real-world problems :-)</p>

                <p>
                    I started my journey as a software engineer while pursuing my bachelor's degree, met
                    few amazing people there and we bootstrapped{' '}
                    <a href="https://www.emildasolutions.com/">emilda solutions</a>, to solve customer
                    problems through web & mobile solutions. Fast-forward to today, I'm helping the world
                    run better with <a href="https://www.sap.com/india/index.html">SAP</a>.
                </p>

                <p>
                    In my <a href="/#jobs">career</a>, I've worn multiple hats as a mobile developer,
                    backend developer, and frontend developer. Passion for tinkering and figuring out new
                    things keeps me moving...
                </p>

                <p>Here are a few technologies I’ve been working with recently:</p>
            </div>
        </section>
    )
}

