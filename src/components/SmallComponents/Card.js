import React from 'react'
import QuanticoNews from '../Images/QuanticoNews.jpg'
import './Card.css'

function Card({ Title, Description, Link, Date, Image }) {
    return (
        <div>
            <div className="grid lg:grid-cols-2 p-5 gap-3">
                <div className="lg:place-self-center">
                    <img className="rounded-xl coverImage"
                        src={Image === "" ? QuanticoNews : Image} alt="No cover profile for this news" />
                </div>
                <div className="grid py-4">
                    <div className="mt-2 mb-4">
                        <h1 className="text-stone-600 text-lg font-bold ">
                            {Title}
                        </h1>
                        <h1 className="text-stone-600 text-xs mt-1">{Date}</h1>
                    </div>
                    <h1 className={`text-sm text-stone-600 mb-1 lg:text-lg overflow-hidden`}
                        style={{ height: "55px" }}>
                        {Description}
                    </h1>
                    <p className="mb-8 text-center text-2xl font-bold text-slate-700">......</p>
                    <div className="justify-self-center">
                        <a href={Link} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-gray-600 font-bold border-2 border-lime-300 px-4 py-2 rounded-full">
                            Read
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card