import React, { useState } from 'react'
import axios from 'axios'
import { FaSearchengin } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import Card from './SmallComponents/Card'
import DarkModeButton from './SmallComponents/DarkmodeButton'


function Search({darkMode,darkModeEnabled,darkModeTrigger}) {
    const [newsData, setNewsData] = useState([])
    const [query, setQuery] = useState("")
    const [loadings, setLoading] = useState("")

    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
            q: query,
            pageNumber: '1',
            pageSize: '50',
            autoCorrect: 'true',
        },
        headers: {
            'X-RapidAPI-Key': '57a099fbc9msh14d1195ebbaf26bp1159c0jsnfe005085f3f8',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };


    const searchNews = (e) => {
        e.preventDefault();
        setLoading("Loading...")
        setTimeout(() => {
            setLoading("")
        }, 2500);
        axios.request(options).then(function (response) {
            setNewsData(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div className={`${darkModeEnabled ? darkMode.darkModeBgColor : darkMode.lightModeBgColor} pt-20`}>
            <DarkModeButton darkModeEnabled={darkModeEnabled} darkModeTrigger={darkModeTrigger} />
            <form className="h-48 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 place-items-center"
                onSubmit={searchNews}>
                <div className="justify-self-center lg:justify-self-end md:justify-self-end ">
                    <BsGlobe2 size="2rem" color="slateblue" />
                </div>

                <input type="text" name="query" placeholder='search...' value={query} onChange={(e) => setQuery(e.target.value)}
                    className="ring-2 ring-gray-dark px-3 rounded-xl py-2 outline-none hover:scale-110 hover:ring-green-400
                transition-all duration-700 ease-in-out" required />
                <div className="justify-self-center lg:justify-self-start">
                    <button type="submit"
                        className="flex space-x-3 mr-7 font-semibold 
                    text-gray-100 rounded-lg ring-2 ring-indigo-400 px-6 py-2 hover:bg-white hover:text-white hover:ring-green-400
                    mx-8">
                        <FaSearchengin size="1.5rem" color="slateblue" />
                    </button>
                </div>
            </form>

            <h1 className={`text-center text-2xl ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} font-bold mt-5`}>{query}</h1>
            <h1 className={`text-center text-2xl ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor} font-bold mt-5`}>{loadings}</h1>

            <div className="grid lg:grid-cols-2">
                {newsData && newsData.map(news => {
                    return (
                        <div key={news.id}>
                            <Card darkMode={darkMode}
                                Title={news.title}
                                Description={news.description}
                                Date={news.datePublished}
                                Link={news.url}
                                Image={news.image.url} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Search