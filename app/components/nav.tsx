'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import {NavItem} from "@/app/components/model/model";


const NavBar: React.FC<{navItems?: Array<NavItem>}> = ({navItems = []}) => {
    const pathname = usePathname()
    return (
        <nav className="flex-col sm:justify-start md:my-24 hidden md:flex">
            {navItems.map((navItem) => (
                <ul key={navItem.label}>
                    <a key={navItem.label} className={ `flex items-center py-3 group ${pathname === `${navItem.url}` ? 'active' : 'active' }`} href={navItem.url}>
                    <span
                        className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{navItem.label}</span>
                    </a>
                </ul>

            ))}
        </nav>
    )
}

export default NavBar;


