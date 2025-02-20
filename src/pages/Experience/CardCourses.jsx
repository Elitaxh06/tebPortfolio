import React from "react";

function CardCourses({svg, title, subtitle, description, link, logo}) {
    return(
        <div className="border border-slate-600 rounded-lg mt-10 flex flex-col w-150">
            <div className="flex ml-4 mt-3 ">
                <span className="w-8">
                    {svg}
                </span>
                <h4 className="text-white text-lg font-semibold">{title}</h4>
            </div>
            <p className="text-white text-md ml-4 mt-3">{subtitle}</p>
            <p className="text-slate-300 text-left w-120 ml-4 mt- mb-4 text-md">{description}</p>
            <div className="flex gap-1 items-center ml-4">
                <span className="text-cyan-500">
                    {logo}
                </span>
                <a href={link} target="_blank" className="text-cyan-500">View Certificate</a>
            </div>
        </div>
    )
}

export { CardCourses };