import React from 'react';
import Nav from './nav';
import GithubIcon from "@/app/components/icons/github";
import InstagramIcon from "@/app/components/icons/instagram";

export default function Skills({skills = ['Typescript', 'React', 'Next.js', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe Lightroom', 'Adobe InDesign', 'Adobe Audition', 'Adobe XD', 'Adobe Dreamweaver']}) {
    return (

        <div className="flex flex-wrap group my-6 ">
            {skills.map(skill =>{
                return (
                        <div key={skill} className="flex m-1 flex-wrap">
                            <button
                                className="animate-gradient inline-block rounded-badge group-hover:gradient-text bg-slate-600 p-0.5">
                                <span
                                    className="block text-sm  rounded-badge bg-primary px-2 py-2 text-white"> {skill} </span>
                            </button>
                        </div>

                )
            })}
        </div>


    )
}
