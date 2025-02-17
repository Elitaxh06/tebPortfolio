import React from "react";
import { Description } from "../home/Description";
import { Navbar } from "../../components/navbar/Navbar";
import  myProjects  from "../../data/myProjects.json";
function Projects() {
    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 h-screen">
             <div className="lg:mr-72 mr-0">
                <Description />
            </div>
            <div className="flex flex-col items-center mr-5">
                <div className="w-full">
                    <Navbar />
                    <h2 className="text-white text-4xl font-bold mt-20">Projects</h2>
                    {myProjects.map((project, index) => (
                        <div key={index}>
                            <h3>{project.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Projects };