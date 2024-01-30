import {Experience, NavItem} from "@/app/components/model/model";

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
        url:'#experience'
    }
]

export const experiences: Array<Experience> = [
    {
        from:'2021',
        to:'2022',
        position: 'Developer@SAP',
        details: [
            'Specialising in Angular, Typescript, Ngrx, Module-Federated mirco-frontends.',
            'Developed highly customizable metadata driven ui solutions.',
            'Responsible for designing (low-level) and developing cross-module re-useable ui\'s.'
        ],
        skills: ['Typescript']
    }
]