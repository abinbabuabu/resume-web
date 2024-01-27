import React from 'react';
import ExternalIcon from "@/app/components/icons/external";

export default function ExperienceTile() {
    return (
        <div className="hover:backdrop-blur group mb-8">
           <h6>2019 - 2020</h6>
            <div className="flex flex-row gap-2">
                <h4 className="font-bold mb-4 hover:text-cyan-500">Developer - SAP</h4>
                <div className="justify-center hover:text-cyan-500 group-hover:block group-hover:z-30 transition ease-in-out delay-100 group-hover:scale-110 duration-300">
                    <ExternalIcon/>
                </div>
            </div>

            <ul className="list-disc ">
            <li>Specialising in Angular, Typescript, Ngrx, Module-Federated mirco-frontends.</li>
                <li>Developed highly customizable metadata driven ui solutions.</li>
                <li>Responsible for designing (low-level) and developing cross-module re-useable ui's.</li>
            </ul>
        </div>
    )
}
