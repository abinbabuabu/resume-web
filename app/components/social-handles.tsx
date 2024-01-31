import React from 'react';
import GithubIcon from "@/app/components/icons/github";
import InstagramIcon from "@/app/components/icons/instagram";
import {SocialHandleTypes} from "@/data/content";
import {SocialHandle} from "@/app/components/model/model";

const SocialHandles: React.FC<{ socialHandles: Array<SocialHandle> }> = ({socialHandles = []}) => {
    return (
        <div className="my-8 flex flex-row gap-4">
            {socialHandles.map(handle => {
                return <div key={handle.type.toString()}>
                    <a href={handle.url}>
                        {getSocialIcon(handle.type)}
                    </a>
                </div>
            })}

        </div>
    );
};


export default SocialHandles;


function getSocialIcon(key: SocialHandleTypes) {
    switch (key) {
        case SocialHandleTypes.INSTAGRAM:
            return <InstagramIcon/>
        case SocialHandleTypes.GITHUB:
            return <GithubIcon/>
        default:
            return <InstagramIcon/>
    }
}