import React from 'react';
import Nav from './nav';
import GithubIcon from "@/app/components/icons/github";
import InstagramIcon from "@/app/components/icons/instagram";

const Skills: React.FC<{skills?: Array<string> }> = ({ skills = [] }) => {
    return (
        <div className="flex flex-wrap group my-6">
            {skills.map((skill, index) => (
                <div key={index} className="flex m-1 flex-wrap">
                    <div className="animate-gradient inline-block rounded-badge group-hover:gradient-text bg-slate-600 p-0.5">
            <span className="block text-xs font-bold rounded-badge bg-primary px-4 py-2 ">
              {skill}
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
