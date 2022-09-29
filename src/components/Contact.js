import React from 'react'
import DarkModeButton from './SmallComponents/DarkmodeButton'

function Contact({darkMode,darkModeEnabled,darkModeTrigger}) {
    return (
        <div>
            <DarkModeButton darkModeEnabled={darkModeEnabled} darkModeTrigger={darkModeTrigger} />
            <div className="grid align-items-center pt-20">
                <div className={`p-4 ${darkModeEnabled ? darkMode.darkModeBgColor : darkMode.lightModeBgColor}`}>
                    <h1 className={`text-center py-4 ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} font-bold text-3xl`}>Contacts</h1>
                    <div className="grid grid-cols-2 gap-y-16 place-items-center lg:gap-y-12 text-violet-500 md:gap-4 
                     px-3 py-6 text-6xl md:text-4xl lg:text-6xl">
                        <a
                            rel="noopener noreferrer" href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
                            target="_blank"
                            className="justify-self-center animate__animated animate__backInLeft"
                        ><i className="fa-brands fa-instagram"></i
                        ></a>

                        <a
                            rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
                            target="_blank"
                            className="justify-self-center animate__animated animate__backInDown"
                        ><i className="fa-brands fa-linkedin"></i
                        ></a>
                        <a
                            rel="noopener noreferrer" href="https://wa.me/919627253516"
                            className="justify-self-center animate__animated animate__backInRight"
                        ><i className="fa-brands fa-whatsapp"></i
                        ></a>
                        <a
                            rel="noopener noreferrer" href={`mailto:shubhmtiwri00@gmail.com?body=${''}`}
                            className="justify-self-center animate__animated animate__backInRight"
                        ><i className="fa-solid fa-envelope-circle-check"></i
                        ></a>
                    </div>
                    <div className="my-16 lg:my-8">
                        <h1 className={`text-center my-4 ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} font-bold text-3xl`}>Blogs</h1>
                        <div className="grid  grid-cols-2 gap-y-16 place-items-center lg:gap-y-12 text-violet-500 md:gap-4 
                     px-3 py-6 text-6xl md:text-4xl lg:text-6xl">
                            <a
                                rel="noopener noreferrer" href="https://dev.to/shubhamtiwari909"
                                target="_blank"
                                className="justify-self-center animate__animated animate__backInLeft"
                            ><i className="fa-brands fa-dev"></i></a>

                            <a
                                rel="noopener noreferrer" href="https://medium.com/@shubhmtiwri00"
                                target="_blank"
                                className="justify-self-center animate__animated animate__backInDown"
                            ><i className="fa-brands fa-medium"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact