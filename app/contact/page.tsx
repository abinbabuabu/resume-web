import React from 'react';
import SectionTitle from "@/app/components/section-title";
import SocialHandles from "@/app/components/social-handles";

export default function Home() {
    return (
        <section className="mb-6">
                <SectionTitle title="Let's talk !"/>
                <p>
                    I'm on the lookout for fresh opportunities where I can not only grow but also contribute my skills
                    and knowledge.
                    If you have exciting projects, job openings, or ideas, I'd love to hear about them.
                </p>
            <div className="flex flex-col">
                <div className="w-14 m-auto">
                    <SocialHandles/>
                </div>
                <div className="m-auto">
                    Developed with <span className="text-red-500">❤</span> by Abin Babu
                </div>
            </div>


        </section>
    )
}
