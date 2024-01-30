import React from 'react';
import SectionTitle from "@/app/components/section-title";
import SocialHandles from "@/app/components/social-handles";
import {letsConnectMsg} from "@/data/content";

export default function Home() {
    return (
        <section className="mb-6 text-normalText">
                <SectionTitle title="Let's talk !"/>
                <p>
                    {letsConnectMsg}
                </p>
            <footer>
                <div className="flex flex-col">
                    <div className="w-14 m-auto">
                        <SocialHandles/>
                    </div>
                    <div className="m-auto">
                        Developed with <span className="text-red-500">❤</span> by Abin Babu
                    </div>
                </div>
            </footer>


        </section>
    )
}
