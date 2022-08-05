import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-slate-700 via-indigo-900 to-violet-900">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
                    <div
                        className="text-xl text-center font-bold text-white justify-self-center"
                    >
                        Quantico-News
                    </div>
                </div>
            </nav>
            <div className="">

                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                    <div id="tabs" className="flex justify-between">
                        <div className="w-full grid grid-cols-1 text-lg bg-slate-700 text-slate-100 focus:text-indigo-200 hover:text-violet-400 justify-center text-center pt-2 pb-1">
                            <NavLink to="/" onClick={() => setNavbarOpen(!navbarOpen)} className="focus:text-indigo-200">
                                <div><i className="fa-solid fa-house-user"></i></div> Home</NavLink>
                        </div>
                        <div className="w-full text-lg bg-slate-700 text-slate-100 focus:text-indigo-200 hover:text-violet-400 justify-center inline-block text-center pt-2 pb-1">
                            <NavLink to="/search" onClick={() => setNavbarOpen(!navbarOpen)} className="focus:text-indigo-200">
                                <div><i className="fa-solid fa-magnifying-glass"></i></div>Search</NavLink>
                        </div>
                        <div className="w-full text-lg bg-slate-700 text-slate-100 focus:text-indigo-200 hover:text-violet-400 justify-center inline-block text-center pt-2 pb-1">
                            <NavLink to="/contact" onClick={() => setNavbarOpen(!navbarOpen)} className="focus:text-indigo-200">
                                <div><i className="fa-solid fa-address-card"></i></div>Contact</NavLink>
                        </div>
                        <div className="w-full text-lg bg-slate-700 text-slate-100 focus:text-indigo-200 hover:text-violet-400 justify-center inline-block text-center pt-2 pb-1">
                            <NavLink to="/about" onClick={() => setNavbarOpen(!navbarOpen)} className="focus:text-indigo-200">
                                <div><i className="fa-solid fa-users"></i></div>About</NavLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Navbar