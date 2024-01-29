import React from 'react';
import ExperienceTile from "@/app/components/experience-tile";
import SectionTitle from "@/app/components/section-title";

export default function Experience() {
    return (
        <section id="experience" className="mt-5 text-normalText">
            <SectionTitle title="Experience"/>
            <ExperienceTile/>
            <ExperienceTile/>
            <ExperienceTile/>
            <ExperienceTile/>
            <ExperienceTile/>

        </section>
    )
}
