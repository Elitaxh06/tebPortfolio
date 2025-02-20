import React from "react";
function Description() {
    
    return(
        <section className=" border-r border-slate-400 shadow-sm w-full lg:w-96 lg:min-h-screen md:min-h-0 sm:min-h-0 min-h-0 md:w-full sm:w-full">
            <div className="flex flex-col items-center justify-center pt-8">
                <img src={new URL("../../assets/img/ProsonalPhoto1.jpeg", import.meta.url).href} alt="profile" className="object-cover w-56 h-48 rounded-full shadow-lg"/>
                <h3 className="text-3xl text-white mt-2 font-semibold">Esteban Pizarro</h3>
            </div> 
            <article className="mr-4 ml-4 mt-9 flex flex-col">
                <p className="text-slate-300">
                I am passionate about technology has always been a passion of mine, and in recent years, I've taken it more seriously, focusing on becoming a full stack developer. I'm always eager to learn, grow, and contribute my knowledge to innovative teams and projects.
                </p> 
                <a href="mailto:pizarroteb06@outlook.com" target="_blank" className="bg-yellow-400 rounded-md w-full h-11 font-semibold mt-5 flex justify-center items-center hover:scale-105 transition-transform duration-300">Contact me</a><br />
            </article>
            
            <aside className="text-white flex justify-center gap-9 mt-8 ">
                {/* Redes sociales */}
                <a href="https://github.com/Elitaxh06" target="_blank" className="w-11 hover:scale-105 transition-transform duration 300">
                    <svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/esteban-pizarro-5897362a9/" target="_blank" className="w-11 hover:scale-105 transition-transform duration-300"> 
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                </a>
                <a href="https://www.instagram.com/esteban_pizarro25/" target="_blank" className="w-11 hover:scale-105 transition-transform duration-300">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                </a>
                <a href="mailto:pizarroteb06@outlook.com" target="_blank" className="w-11 hover:scale-105 transition-transform duration-300">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
            </aside>
        </section>
    )
}

export { Description };