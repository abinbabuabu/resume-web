import React from 'react';
import Nav from './nav';
import GithubIcon from "@/app/components/icons/github";
import InstagramIcon from "@/app/components/icons/instagram";

export default function SocialHandles() {
    return (
        <div className="my-8 flex flex-row gap-4">
            <GithubIcon/>
            <InstagramIcon/>
        </div>
    )
}
