import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Description } from "./Description";
import { NavLink } from "react-router";
import "./Home.css";
function Home() {
    return(
        <main className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 h-screen">
            <div className="lg:mr-72 mr-0">
                <Description />
            </div>
            <div className="flex flex-col items-center mr-5">
                <div className="w-full">
                    <Navbar />
                    <h1 className="text-white text-6xl font-bold mt-20">Hi 👋, <br /> I am <span className="text-yellow-400">Esteban Pizarro</span></h1>
                    <p className="text-white mt-8 w-96">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, inventore nesciunt veniam quidem velit corrupti vel quasi consequuntur culpa labore reprehenderit ab magni atque laborum exercitationem. Doloremque, aliquid rem. Distinctio?</p>
                </div>
                <div className="mt-10 flex gap-5">
                    <button className="hover:scale-105 transition-transform duration-300 h-8 w-32 rounded-lg cursor-pointer" id="buttonCv">View my Cv 👀</button>
                    <NavLink to="projects" className="hover:scale-105 transition-transform duratoin-300 flex items-center justify-center bg-yellow-400 h-8 rounded-lg w-32 cursor-pointer"><span>Projects</span></NavLink>
                </div>
                {/* <Cv /> */}
            </div>
            
        </main>
    )
}

export { Home };