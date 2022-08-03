import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TbArrowsCross} from 'react-icons/tb'
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div
                            className="grid grid-cols-2 place-items-center lg:text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-white"
                        >
                            Quantico-News
                        </div>
                        <button
                            className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-slate-100 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {navbarOpen ? <TbArrowsCross /> : <GiHamburgerMenu />}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col -mx-4 lg:flex-row list-none lg:ml-auto">
                            <li className="">
                                <div onClick={() => setNavbarOpen(!navbarOpen)}
                                    className={`mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Home</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className={`mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/search" onClick={() => setNavbarOpen(!navbarOpen)}>Search</NavLink>
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className={`mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                                >
                                    <NavLink to="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>Contact</NavLink>
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className={`mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                                    onClick={() => setNavbarOpen(!navbarOpen)}>
                                    <NavLink to="/about" onClick={() => setNavbarOpen(!navbarOpen)}>About</NavLink>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar