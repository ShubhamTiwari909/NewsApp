import React from 'react'
import AboutCard from './SmallComponents/AboutCard'
import DarkModeButton from './SmallComponents/DarkmodeButton'

function About({ darkMode,darkModeEnabled,darkModeTrigger }) {

    const aboutDetails = [
        {
            Title: 'Quantico News',
            Description: `The Quantico News always provides you the latest news from all around the world.
            You also can filter the news and see only news of your interest.The searching feature allows you to check whatever
            you want and The full news can be read by clicking the read button which will show the complete news article to you.
            So, Make yourself updated by checking on Quantico news.
            Thank You for your support❤`
        },
        {
            Title: 'Creator',
            Description: 'The creator name is Shubham Tiwari , Graduated in Bachelors of Computer Application and A full-stack web developer',
        },
        {
            Title: 'Source',
            Description: `The data which we get is from the Contextual Web Search Api created by Roi Krakovski`
        }
    ]
    return (
        <div className={`${darkModeEnabled ? darkMode.darkModeBgColor : darkMode.lightModeBgColor} z-0 mt-10`}>
            <DarkModeButton darkModeEnabled={darkModeEnabled} darkModeTrigger={darkModeTrigger} />
            <div className="grid px-4 md:grid-cols-3 place-content-center py-10 lg:py-20">
                {aboutDetails.map(item => {
                    return (
                        <div key={item.Title}>
                            <AboutCard Title={item.Title} Description={item.Description} />
                        </div>
                    )
                })}
            </div>
            <div className="grid place-content-center pb-5">
                <button className="px-4 py-2 bg-slate-800 text-indigo-200 rounded-full place-self-center ring-2 ring-offset-2 ring-indigo-400">
                    <a href="https://www.buymeacoffee.com/waaduheck" target="_blank" rel="noopener noreferrer">Donate</a>
                </button>
            </div>
        </div>
    )
}

export default About