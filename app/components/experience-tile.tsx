import React from 'react';
import ExternalIcon from "@/app/components/icons/external";

export default function ExperienceTile() {
    return (
        <div className="relative group my-8 md:hover:z-30 rounded w-10/12  ">
            <div className="absolute -inset-x-6 -inset-y-6 -z-10 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-10 lg:block lg:group-hover:bg-slate-100/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
            </div>
            <h6>2019 - 2020</h6>
            <div className="flex flex-row gap-2">
                <h4 className="font-bold mb-4 group-hover:text-transparent group-hover:gradient-text group-hover:bg-clip-text bg-300% animate-gradient">Developer - SAP</h4>
                <div
                    className="justify-center hover:text-cyan-500 group-hover:block transition ease-in-out delay-100 group-hover:scale-110 duration-300">
                    <ExternalIcon/>
                </div>
            </div>

            <ul className="list-disc group-hover:text-white">
                <li>Specialising in Angular, Typescript, Ngrx, Module-Federated mirco-frontends.</li>
                <li>Developed highly customizable metadata driven ui solutions.</li>
                <li>Responsible for designing (low-level) and developing cross-module re-useable ui's.</li>
            </ul>
        </div>
    )
}
