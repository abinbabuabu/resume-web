'use client'
import React from 'react';
import {usePathname} from "next/navigation";


export default function Home() {
    const pathname = usePathname()
    return (
        <nav className="flex-col sm:justify-start md:my-24 hidden md:flex">
            {[
                ['About', '/about'],
                ['Experience', '#experience'],
                ['Projects', '/projects'],
                ['Reports', '/reports'],
            ].map(([title, url]) => (
                <ul key={title}>
                    <a key={title} className={ `flex items-center py-3 group ${pathname === `/${url}` ? 'active' : 'active' }`} href={url}>
                    <span
                        className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{title}</span>
                    </a>
                </ul>

            ))}
        </nav>
    )
}


