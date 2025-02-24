import React from "react";
import { MoreInfo } from "./MoreInfo";
import { Navbar } from "../../components/navbar/Navbar";
import { useNavigate } from "react-router";
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css"
function Contact() {
    const navigate = useNavigate()
    const [state, handleSubmit] = useForm("xjkgpbqj");
    if (state.succeeded) {
        navigate("/")
    }
      return (
        <section className="">
            <div className="flex flex-col items-center justify-center">
                <Navbar />
            </div>
            <h2 className="text-white text-4xl font-bold mt-10 mb-8 text-center">Contact</h2>
                
            <div  className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 ">
            <div className="border-1 border-slate-600 bg-gray-800 rounded-md p-5 ">
                <div>
                    <h3 className="flex items-center text-white font-semibold text-lg"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2 text-blue-300"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg></span>Send me a message</h3>
                </div>
                <div >
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="text-slate-300 text-sm mt-4" htmlFor="name">Nombre</label>
                        <input
                            className="border-2 border-slate-600 rounded-md hover:border-cyan-600 focus:border-cyan-600 focus:ring-3 focus:ring-cyan-600 bg-slate-700 text-white mt-1"
                            id="name"
                            type="text"
                            name="name"
                            required
                            />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                        <label className="text-slate-300 text-sm mt-4" htmlFor="email">Email addres</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="border-2 border-slate-600 rounded-md hover:border-cyan-600 focus:border-cyan-600 focus:ring-3 focus:ring-cyan-600 bg-slate-700 text-white mt-1"
                        />
                        <ValidationError 
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            required
                            />
                        <label className="text-slate-300 text-sm mt-4" htmlFor="email">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="border-2 border-slate-600 rounded-md hover:border-cyan-600 focus:border-cyan-600 focus:ring-3 focus:ring-cyan-600 bg-slate-700 text-white mt-1
                            "
                            required
                            />
                        <ValidationError 
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            required
                            />
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 rounded-sm h-8 text-white mt-4 button" disabled={state.submitting}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="border-1 border-slate-600 bg-gray-800 rounded-md p-5">
                <MoreInfo />
            </div>
            </div>
        </section>
    )
}

export { Contact };