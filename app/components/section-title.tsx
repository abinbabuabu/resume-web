import React from "react";

export default function SectionTitle({title = "Section Title"}) {
    return (
        <div className="sticky top-0 z-20 -mx-6 w-screen px-6 py-4 backdrop-blur md:relative">
            <h2 className="text-xl font-bold ">{title}</h2>
        </div>
    )
}
