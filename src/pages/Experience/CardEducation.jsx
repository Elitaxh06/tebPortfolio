import React from "react";

function CardEducation({svg, title, subtitle, description}) {
    return(
        <div className="border border-slate-600 rounded-lg mt-10 flex flex-col w-full">
            <div className="flex ml-4 mt-3 ">
                <span className="w-8">
                    {svg}
                </span>
                <h4 className="text-white text-lg font-semibold">{title}</h4>
            </div>
            <p className="text-white text-md ml-4 mt-3">{subtitle}</p>
            <p className="text-slate-300 text-left max-w-full break-words ml-4 mt- mb-4 text-md">{description}</p>

        </div>
    )
}

export { CardEducation };