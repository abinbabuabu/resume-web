import {SocialHandleTypes} from "@/data/content";

export interface Experience {
    id?: string;
    from: string;
    to: string
    position: string;
    details: Array<string>;
    skills : Array<string>;
    url: string;
}

export interface NavItem {
    label: string;
    url: string;
}

export interface SocialHandle {
    type: SocialHandleTypes;
    url: string;
}