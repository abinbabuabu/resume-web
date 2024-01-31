import React from 'react';
import ExternalIcon from "@/app/components/icons/external";
import {Experience} from "@/app/components/model/model";
import Skills from "@/app/components/skills";


const ExperienceTile: React.FC<{ experience: Experience }> = ({experience}) => {
    return (

        <a href={experience.url} target="_blank">
            <div className="relative group my-4 lg:mb-16 rounded ">
                <div
                    className="absolute blur-sm z-999 -ml-3 mr-2 -inset-y-6 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-10 lg:block lg:group-hover:bg-slate-200/5 ">
                </div>
                <h6>{experience?.from} - {experience?.to}</h6>
                <div className="flex flex-row gap-2">
                    <h4 className="font-bold mb-4 group-hover:text-transparent group-hover:gradient-text group-hover:bg-clip-text bg-300% animate-gradient">{experience.position}</h4>
                    <div
                        className="justify-center hover:text-cyan-500 group-hover:block transition ease-in-out delay-100 group-hover:scale-110 duration-100">
                        <ExternalIcon/>
                    </div>
                </div>

                <ul className="list-disc group-hover:text-slate-300 p-2">
                    {experience.details.map((detail, index) => {
                        return (
                            <li className="font-sans text-md" key={`${experience?.id}${index}`}>{detail}</li>
                        )
                    })}
                </ul>

                <Skills skills={experience.skills}/>
            </div>
        </a>

    );
};

export default ExperienceTile;