import React from "react";
import { Routes, Route} from "react-router"
import { Home } from "../pages/home/Home";
import { Projects } from "../pages/Projects/Projects";
import { Skills } from "../pages/Skills/Skills";
function Routing() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )

}


export { Routing };