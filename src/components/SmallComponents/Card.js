import React from 'react'
import QuanticoNews from '../Images/QuanticoNews.jpg'
import './Card.css'

function Card({ Title, Description, Link, Date, Image,darkMode,darkModeEnabled }) {
    console.log(darkMode)
    return (
        <div>
            <div className={`grid lg:grid-cols-2 p-5 gap-3`}>
                <div className="lg:place-self-center">
                    <img className="rounded-xl coverImage"
                        src={Image === "" ? QuanticoNews : Image} alt="No cover profile for this news" />
                </div>
                <div className="grid py-4">
                    <div className="mt-2 mb-4">
                        <h1 className={`${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} text-lg font-bold `}>
                            {Title}
                        </h1>
                        <h1 className={`${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} text-xs mt-1`}>{Date.slice(0,10)}</h1>
                        <h1 className={`${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} text-xs mt-1`}>{Date.slice(11)} <span>{Number(Date.slice(11,13)) > 12 ? 'pm' : 'am'}</span></h1>
                    </div>
                    <h1 className={`text-sm ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} mb-1 lg:text-lg overflow-hidden`}
                        style={{ height: "55px" }}>
                        {Description}
                    </h1>
                    <p className={`mb-8 text-center text-2xl font-bold ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor}`}>......</p>
                    <div className="justify-self-center">
                        <a href={Link} target="_blank" rel="noopener noreferrer"
                            className={`text-xs ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} font-bold border-2 border-lime-300 px-4 py-2 rounded-full`}>
                            Read
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card