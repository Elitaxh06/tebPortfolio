import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Description } from "../home/Description";
import { Descriptionn } from "../../components/Cv/Description2";
import  tools  from "../../data/tools.json";
import "./skills.css"
function Skills() {
    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10">
            
            <div className="hidden md:block">
                <Descriptionn />
            </div>
            <div className="block md:hidden ">
                <Description />
            </div>
            <div className="flex flex-col items-center mr-5">
                <div className="w-full lg:ml-0 md:ml-4 sm:ml-4 ml-3">
                    <Navbar />
                    <h2 className="text-white text-4xl font-bold mt-20 lg:text-left md:text-center sm:text-center text-center">Skills</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-5">
                        
                        <div className="card rounded-2xl">
                            <h3 className="text-white ml-2 mt-2 text-lg mb-2 font-semibold">Frontend</h3>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-3 mb-2">
                                
                                <li className="flex items-center justify-start gap-2 ml-1 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                                    </span>
                                    React
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-1 text-sm text-slate-200">
                                        <span className="text-cyan-500 w-4 flex text-sm">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                    </svg>
                                        </span>
                                    JavaScript
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-1 text-sm text-slate-200"> 
                                    <span className="text-cyan-500 w-5 flex">
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" /><path d="M9 15l3 -8l3 8" /><path d="M10 13h4" /></svg>
                                    </span>
                                    Angular
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-1 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>
                                    </span>
                                    Tailwind
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-1 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>
                                    </span>
                                    Bootstrap
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-1 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" /></svg>
                                    </span>
                                    Typescript
                                </li>
                            </ul>
                        </div>
                        <div className="card rounded-2xl w-full">
                            <h3 className="text-white ml-2 mt-2 text-lg mb-2 font-semibold">Backend</h3>
                            <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">
                                <li className="flex items-center justify-start gap-2 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" /><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" /><path d="M11 6l0 .01" /><path d="M13 18l0 .01" /></svg>
                                    </span>
                                    Python
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>
                                    </span>
                                    Node.js
                                </li>
                            </ul>
                        </div>
                        <div className="card rounded-2xl">
                            <h3 className="text-white ml-2 mt-2 text-lg mb-2 font-semibold">Data Base</h3>
                            <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">
                               <li className="flex items-center justify-start gap-2 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" ><path fill="#cfd8dc" d="M23.084 11.277c-1.633-2.449-1.986-5.722-2.063-7.067-4.148.897-8.269 2.506-8.031 3.691.03.149.218.328.53.502l-.488.873c-.596-.334-.931-.719-1.022-1.179-.269-1.341 1.25-2.554 4.642-3.709a42.152 42.152 0 0 1 4.751-1.279l.597-.12V3.6c0 .042.026 4.288 1.916 7.123l-.832.554zM24.751 43H24.5c-8.192 0-17.309-2.573-18.386-6.879-.657-2.63 1.492-5.536 6.214-8.401l.52.854c-4.249 2.579-6.296 5.172-5.763 7.305.935 3.738 9.575 6.068 17.153 6.12.901-1.347 5.742-9.26 2.979-19.873l.967-.252c3.149 12.092-3.218 20.837-3.282 20.924l-.151.202z"/><path fill="#cfd8dc" d="M9.931 39.306c-.539 0-.806-.059-.85-.07a.498.498 0 0 1-.233-.84c.072-.072 7.197-7.208 8.159-12.978l.986.164c-.827 4.964-5.715 10.623-7.656 12.707 1.939-.111 6.835-1.019 16.234-6.28-7.335-.804-8.495-6.676-8.507-6.739l.983-.181c.047.246 1.226 6.011 9.244 6.011h.008a.5.5 0 0 1 .251.933c-11.235 6.509-16.683 7.272-18.619 7.273z"/><path fill="#cfd8dc" d="M14.524 41.7a.499.499 0 0 1-.291-.907c.034-.025 1.813-1.338 3.706-4.228a19.896 19.896 0 0 1-2.196-1.137c-.888-.533-1.559-1.105-2.06-1.691-2.57.678-4.942.946-7.025.769l.084-.996c1.876.159 4.009-.063 6.321-.64-1.573-2.688-.129-5.356-.109-5.392l.874.487c-.067.122-1.265 2.37.249 4.633 2.201-.632 4.549-1.567 6.979-2.782a32.189 32.189 0 0 0 1.225-6.276.501.501 0 0 1 .706-.406c.032.015 3.264 1.491 5.604 2.454a.5.5 0 0 1 .091.876 62.494 62.494 0 0 1-6.778 4.042 27.19 27.19 0 0 1-2.459 5.591c3.702 1.383 6.915 1.404 6.956 1.404a.5.5 0 0 1 .243.938c-4.54 2.522-11.767 3.232-12.072 3.261h-.048zm4.385-4.733c-1.04 1.614-2.062 2.773-2.826 3.53 1.998-.294 5.501-.938 8.408-2.139a23.733 23.733 0 0 1-5.582-1.391zm-4.142-3.536c.393.392.883.775 1.49 1.14.736.442 1.483.817 2.22 1.135a26.116 26.116 0 0 0 2.142-4.568c-2.021.962-3.983 1.73-5.852 2.293zm8.435-9.102a33.95 33.95 0 0 1-.913 4.85 62.45 62.45 0 0 0 5.062-3.026 207.1 207.1 0 0 1-4.149-1.824zM17.924 10.6a.504.504 0 0 1-.325-.12c-1.61-1.378-3.505-4.182-3.585-4.301a.5.5 0 0 1 .654-.718c.011.003.938.385 7.217 1.431a.499.499 0 0 1 .29.828c-1.758 1.953-3.979 2.813-4.073 2.848a.527.527 0 0 1-.178.032zm-2.277-3.854c.631.849 1.54 1.996 2.372 2.769a11.186 11.186 0 0 0 2.744-1.798c-2.583-.441-4.159-.755-5.116-.971z"/><path fill="#b71c1c" d="M21.843 24.4a.5.5 0 0 1-.497-.552c.292-2.749-3.926-3.852-3.969-3.862a.5.5 0 0 1-.23-.838c.207-.207 5.139-5.098 11.327-7.784a.5.5 0 0 1 .689.559c-1.186 5.744-6.71 12.044-6.944 12.309a.51.51 0 0 1-.376.168zm-3.388-5.115c1.184.445 3.258 1.475 3.783 3.356 1.449-1.808 4.542-5.973 5.697-9.934-4.387 2.11-8.081 5.292-9.48 6.578z"/><path fill="#b71c1c" d="m13.079 28.36-.475-.88c1.883-1.015 4.04-2.883 5.807-5.054-1.504 1.03-2.365 1.735-2.392 1.758l-.639-.77c.039-.032 1.764-1.447 4.631-3.22.787-1.266 1.392-2.568 1.703-3.816.053-.212.099-.417.136-.615-1.925-.687-3.701-1.094-4.921-1.269a.5.5 0 0 1-.297-.835c.085-.092 2.116-2.268 4.654-3.463a.5.5 0 0 1 .581.114c.067.073 1.44 1.615 1.091 4.805 1.155.45 2.345.997 3.491 1.648 2.759-1.24 5.892-2.356 9.229-3.03a.51.51 0 0 1 .481.168c.117.14.149.333.083.503-1.3 3.332-4.786 6.891-4.934 7.041a.503.503 0 0 1-.748-.04c-1.12-1.408-2.584-2.574-4.163-3.523a55.136 55.136 0 0 0-5.684 3.049c-2.02 3.153-5.069 6.048-7.634 7.429zm14.413-10.964c1.29.832 2.491 1.81 3.484 2.948.828-.898 2.815-3.168 3.942-5.422-2.65.61-5.158 1.493-7.426 2.474zm-4.693-1.274c-.033.163-.071.33-.113.5-.21.839-.544 1.701-.972 2.561a56.183 56.183 0 0 1 3.618-1.898 25.476 25.476 0 0 0-2.533-1.163zm-4.751-2.45c1.111.218 2.48.574 3.941 1.086.152-1.843-.346-2.972-.647-3.472-1.376.718-2.581 1.728-3.294 2.386z"/><path fill="#b71c1c" d="M18.05 18.5c0 4.38-3.65 7.86-6.28 10.4-.44.43-1.93.5-1.93.5.37-.38.79-.78 1.24-1.21 2.5-2.42 5.97-5.73 5.97-9.69 0-4.69-1.89-6.54-3.38-8.02-.66-.67-1.22-1.31-1.56-2.09l.31-.13c.34.15.73.32 1.03.45.24.35.56.69.93 1.06 1.53 1.53 3.67 3.63 3.67 8.73z"/><path fill="#b71c1c" d="M42.935 19.794s-.605.086-.775.106c-8.76.97-17.8 3.49-22.97 5.56-1.87.75-3.81 1.66-5.58 2.68-.01.01-.02.01-.04.02-1.04.6-3.57 1.84-5.62 2.93 3-3.19 8.62-5.65 10.86-6.55 5.07-2.03 13.78-4.48 22.35-5.53-1.01-1.18-3.48-3.68-8.34-5.54-2.84-1.1-7.16-1.72-10.97-2.27-6.06-.87-9.51-1.45-9.84-3.1-.07-.33-.02-.66.13-.98.33.54.8.92 1.11 1.14.15.1.26.16.3.18l.01.01c1.42.75 5.25 1.3 8.44 1.76 3.86.56 8.23 1.19 11.18 2.32 6.87 2.65 9.24 6.44 9.34 6.6.09.15.415.664.415.664z"/></svg>
                                    </span>
                                    Sql Server
                               </li>
                            </ul>
                        </div>
                        <div className="card rounded-2xl">
                            <h3 className="text-white ml-2 mt-2 text-lg mb-2 font-semibold">Programming Tools </h3>
                            <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">
                                <li className="flex items-center justify-start gap-2 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
                                        </svg>
                                    </span>
                                    Git
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                    </span>
                                    Github
                                </li>
                                <li className="flex items-center justify-start gap-2 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3v18l4 -2.5v-13z" /><path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" /><path d="M16 16.5l-11 -10l-2 1l13 13.5" /></svg>
                                    </span>
                                    VsCode
                                </li>
                                <li className="flex items-center justify-start gap-2 pt-3 mb-3 ml-2 text-sm text-slate-200">
                                    <span className="text-cyan-500 w-5 flex">
                                        <svg viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z" fill="#FF6C37"/><path d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z" fill="#FFF"/><path d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z" fill="#FF6C37"/><path d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z" fill="#FFF"/><path d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z" fill="#FF6C37"/><path d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z" fill="#FFF"/><path d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z" fill="#FF6C37"/><path d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z" fill="#FFF"/><path d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z" fill="#FF6C37"/><path d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z" fill="#FFF"/><path d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z" fill="#FF6C37"/><path d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z" fill="#FFF"/><path d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z" fill="#FF6C37"/><path d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z" fill="#FFF"/><path d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z" fill="#FF6C37"/><path d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z" fill="#FFF"/><path d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z" fill="#FF6C37"/><path d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z" fill="#FFF"/><path d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z" fill="#FF6C37"/></svg>
                                    </span>
                                    Postman
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Skills } 