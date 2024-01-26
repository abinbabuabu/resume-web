import React from 'react';

export default function Home() {
    return (
        <nav className="flex-col sm:justify-start md:my-24 hidden md:flex">
            {[
                ['Home', '/dashboard'],
                ['Team', '/team'],
                ['Projects', '/projects'],
                ['Reports', '/reports'],
            ].map(([title, url]) => (
                <ul>
                    <a key={title} className="group flex items-center py-3 active" href="#url">
                    <span
                        className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span
                            className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{title}</span>
                    </a>
                </ul>

            ))}
        </nav>
    )
}


