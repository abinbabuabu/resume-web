import React from 'react';
import SectionTitle from "@/app/components/section-title";
import SocialHandles from "@/app/components/social-handles";
import {letsConnectMsg, socialHandles} from "@/data/content";

export default function Home() {
    return (
        <section className="mb-6 text-normalText group">
                <SectionTitle title="Let's talk !"/>
                <p className='group-hover:text-slate-300'>
                    {letsConnectMsg}
                </p>
            <footer>
                <div className="flex flex-col ">
                    <div className="m-auto">
                        <SocialHandles socialHandles={socialHandles}/>
                    </div>
                    <div className="m-auto">
                        Developed with <span className="text-red-500">❤</span> by Abin Babu
                    </div>
                </div>
            </footer>


        </section>
    )
}
