import React from 'react';
import ExperienceTile from "@/app/components/experience-tile";
import SectionTitle from "@/app/components/section-title";
import {experiences} from "@/data/experiences";

export default function Experience() {
    return (
        <section id="experience" className="pt-24 text-normalText">
            <SectionTitle title="Experience"/>
            {experiences.map(exp =>{
                return (
                    <ExperienceTile key={exp.position} experience={exp}/>
                )
            })}

        </section>
    )
}
