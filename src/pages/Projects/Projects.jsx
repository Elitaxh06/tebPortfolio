import React from "react";
import { Description } from "../home/Description";
import { Descriptionn } from "../../components/Cv/Description2";
import { Navbar } from "../../components/navbar/Navbar";
import { ReactIcon } from "../../components/icons/React";
import { TailwindIcon } from "../../components/icons/tailwind";
import { JavascriptIcon } from "../../components/icons/javascript";
import { BootstrapIcon } from "../../components/icons/bootstrap";
import { AngularIcon } from "../../components/icons/angular";
import { TypescriptIcon } from "../../components/icons/typescript";
import  myProjects  from "../../data/myProjects.json";
import "./Projects.css";
function Projects() {
    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  mb-10">
            <div className="hidden md:block lg:mr-72 mr-0">
                <Descriptionn />
            </div>
            <div className="block md:hidden lg:mr-72 mr-0">
                <Description />
            </div>
            <div className="flex flex-col items-center mr-5">
                <div className="w-full">
                    <Navbar />
                    <h2 className="text-white text-4xl font-bold mt-20">Projects</h2>
                    {myProjects.map((project, index) => (
                        <div key={index} className="flex flex-col items-center mt-5 border-2 border-slate-600  hover:border-cyan-500 shadow-lg rounded-3xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                                <div className="">
                                    <img src={project.img} className="h-full w-full md:rounded-t-3xl lg:rounded-l-3xl" alt="" />
                                </div>
                                <div className="mt-3">
                                    <h4 className="text-white text-lg font-semibold">{project.name}</h4>
                                    <p className="text-slate-300">{project.description}</p>
                                    {project.tech === 'react, javascript, tailwind' && (
                                        <div className="grid grid-cols-2 fgr lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 px-4 mt-3 w-full">
                                            <ReactIcon />
                                            <JavascriptIcon />
                                            <TailwindIcon />
                                        </div>
                                    )}
                                    {project.tech === 'react, javascript, bootstrap' && (
                                        <div className="grid grid-cols-2 fgr lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 px-4 w-full mt-3">
                                            <ReactIcon />
                                            <JavascriptIcon />
                                            <BootstrapIcon />
                                        </div>
                                    )}
                                    {project.tech === 'angular, typescript, bootstrap' && (
                                        <div className="grid grid-cols-2 fgr lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 px-4 w-full mt-3">
                                            <AngularIcon />
                                            <TypescriptIcon />
                                            <BootstrapIcon />
                                        </div>
                                    )}
                                    <p className="text-slate-300"></p>
                                    <p className="text-slate-300"></p>
                                    <div className="flex gap-3 mt-3 mb-3 text-cyan-400 text-sm items-center justify-center">
                                        <a target="_blank" href={project.link} className="flex items-center justify-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" stroke-linecap="round" strokelinejoin="round" className="lucide lucide-external-link w-4 h-4 mr-1"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                            View Project
                                        </a>
                                        <a target="_blank" href={project.github} className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-4 h-4 mr-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Projects };