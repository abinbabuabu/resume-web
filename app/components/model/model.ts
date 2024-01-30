export interface Experience {
    id?: string;
    from: string;
    to: string
    position: string;
    details: Array<string>;
    skills : Array<string>;
}

export interface NavItem {
    label: string;
    url: string;
}