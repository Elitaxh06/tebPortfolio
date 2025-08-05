import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Description } from "./Description";
import { NavLink } from "react-router";

import myCv from "../../assets/img/CvEnglish.pdf" 


import "./Home.css";
function Home() {
    return(
        <main className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-6 md:mb-0 lg:mb-0 sm:mb-6">
            
            <div className="">
                <Description />
            </div>
            <div className="flex flex-col items-center mr-5 ">
                <div className="w-full lg:ml-0 md:ml-4 sm:ml-4 ml-3">
                    <Navbar />
                    <h1 className="text-white text-6xl font-bold mt-20">Hi 👋, <br /> I am <span className="text-yellow-400">Esteban</span></h1>
                    <p className="text-white mt-8 w-96">I'm a full stack developer with a stronger focus on frontend. I enjoy building intuitive websites with a strong emphasis on user experience (UX) and clean, functional design. While I also care about UI, I'm more focused on making the interaction feel smooth and user-friendly.
                    </p>
                    <p className="text-white mt-2 w-96">
                    I'm constantly learning and keeping up with the latest tools, technologies, and best practices in web development.
                    </p>
                    <p className="text-white mt-2 w-96">
                    Beyond code, I'm a good listener, open to feedback, and enjoy working in teams where I can share ideas, help others, and contribute to a positive and collaborative environment.
                    </p>
                </div>
                <div className="mt-10 flex gap-5">
                    <button onClick={()=> window.open(myCv, "_blank")} className="hover:scale-105 hover:font-semibold transition-transform duration-300 h-8 w-32 rounded-lg cursor-pointer" id="buttonCv">View my Cv 👀</button>
                    <NavLink to="projects" className="hover:scale-105 transition-transform duratoin-300 hover:font-semibold flex items-center justify-center bg-yellow-400 h-8 rounded-lg w-32 cursor-pointer "><span>Projects</span></NavLink>
                </div>
                {/* <Cv /> */}
            </div>
            
        </main>
    )
}

export { Home };