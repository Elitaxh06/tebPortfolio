import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css"
function Navbar() {
    return(
        <header id="header" className="h-13 border-3 rounded-lg mt-8 border-yellow-300 text-white flex justify-center items-center">
            <nav>
                <ul className="flex items-center gap-2">            
                        <NavLink to="/" className="text-lg lis">
                            <li className="w-18 h-10 rounded-lg li flex justify-center items-center">
                                About
                            </li>
                        </NavLink>
                        <NavLink to="/projects" className="text-lg lis">
                            <li className="w-20 h-10 rounded-lg li flex justify-center items-center">
                                Projects
                            </li>
                        </NavLink>         
                        <NavLink to="/skills" className="text-lg lis">
                            <li className="w-14 h-10 rounded-lg li flex justify-center items-center">
                                Skills
                            </li>
                        </NavLink>           
                        <NavLink href="" className="text-lg lis">
                            <li className="w-24 h-10 rounded-lg flex li justify-center items-center">
                                Experience
                            </li>
                        </NavLink>           
                </ul>
            </nav>
        </header>
    )
}

export { Navbar };