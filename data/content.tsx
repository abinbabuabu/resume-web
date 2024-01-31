import {Experience, NavItem, SocialHandle} from "@/app/components/model/model";

export const primarySkills = [
    'TypeScript',
    'Angular',
    'RxJs',
    'SpringBoot',
    'Java',
    'MongoDB',
    'gRPC',
    'Flutter',
    'Android',
    'AWS',
    'Docker',
];

export const navItems: Array<NavItem> = [
    {
        label: 'About',
        url: '#about'
    },
    {
        label: 'Experience',
        url: '#experience'
    }
]

export enum SocialHandleTypes {
    INSTAGRAM,
    GITHUB,
    LEETCODE
}

export const socialHandles: Array<SocialHandle> = [
    {
        type: SocialHandleTypes.INSTAGRAM,
        url: '#about',
    },
    {
        type: SocialHandleTypes.GITHUB,
        url: '#experience'
    }
]



export const letsConnectMsg: string = 'I\'m on the lookout for fresh opportunities where' +
    'I can not only grow but also contribute my skills\n' +
    'and knowledge.\n' +
    'If you have exciting projects, job openings, or ideas, I\'d love to hear about them.'