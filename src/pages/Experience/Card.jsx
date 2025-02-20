import React from "react";

function Card({svg, title, description,description2}) {
    return(
        <div className="border border-slate-600 rounded-lg mt-10 flex flex-col w-150">
            <div className="flex ml-4 mt-3 ">
                <span className="w-8">
                    {svg}
                </span>
                <h4 className="text-white text-lg font-semibold">{title}</h4>

            </div>

            <p className="text-slate-300 text-left w-120 ml-4 mt-3 text-sm">{description}</p>
            <p className="text-slate-300 text-left w-120 ml-4 mt-3 mb-5 text-sm">{description2}</p>

        </div>
    )
}

export { Card };