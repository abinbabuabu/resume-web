import React from "react";

export default function SectionTitle({title = "Section"}) {
    return (
        <div className="text-textOnPrimary sticky top-0 z-20 -mx-6 w-screen px-6 py-2 backdrop-blur md:relative">
            <h2 className="text-lg font-bold md:text-xl ">{title}</h2>
        </div>
    )
}
