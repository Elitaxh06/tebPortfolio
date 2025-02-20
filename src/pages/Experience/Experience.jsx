import React from "react";
import { Description } from "../home/Description";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "./Card";
import { NavLink } from "react-router";
import { CardEducation } from "./CardEducation";
import { CardCourses } from "./CardCourses";
import { Descriptionn } from "../../components/Cv/Description2";
function Experience() {
    const meIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mr-2 text-blue-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    )
    const educationIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book mr-2 text-blue-300"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
    )
    const coursesIcon = (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mr-2 text-blue-300"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
    )
    const logo =(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4 mr-1"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
    )
    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
             <div className="hidden md:block">
                <Descriptionn />
            </div>
            <div className="block md:hidden ">
                <Description />
            </div>
            {/* <div className="">
                <Description />
            </div> */}
            <div className="flex flex-col items-center mr-5">
                <div className="w-full mb-5 lg:ml-0 md:ml-4 sm:ml-4 ml-3">
                    <Navbar />
                    <h3 className="text-white text-4xl font-bold mt-20">Experience</h3>
                    <Card 
                        svg={meIcon}
                        title="About me"
                        description="Although I don't have formal work experience in web development, I have invested time in personal projects, which has allowed me to acquire practical skills in the field."
                        description2=" I am excited to continue learning and ready to contribute my knowledge in a professional setting. My problem-solving ability, creativity, and motivation make me a candidate capable of contributing significantly to real projects. I am prepared to face new challenges and continue growing as a developer in a dynamic team."
                    />
                    <CardEducation 
                        svg={educationIcon}
                        title="Education"
                        subtitle="Higher Technician in Full Stack Web Development"
                        description="UCreativa - Universidad, Costa Rica - 2024"
                    />
                    <CardCourses 
                        svg={coursesIcon}
                        title="Courses and Certifications"
                        subtitle="React.js Course with Vite.js and Tailwind CSS"
                        description="Platzi - 2024"
                        link="https://platzi.com/p/eliaspizarro/curso/7396-react-vite-tailwindcss/diploma/detalle/"
                        logo={logo}
                    />
                    
                </div>

                <div className="">

                </div>
                
            </div>
            
        </section>
    )               

}

export { Experience };