import React from 'react';
import ExperienceTile from "@/app/components/experience-tile";
import SectionTitle from "@/app/components/section-title";

export default function Experience() {
    return (
        <section className="my-5">
            <SectionTitle title="Experience"/>
            <ExperienceTile/>
            <ExperienceTile/>
            <ExperienceTile/>
            <ExperienceTile/>

        </section>
    )
}
