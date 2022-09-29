import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './SmallComponents/Card';
import ButtonGroup from './SmallComponents/ButtonGroup'
import SelectGroup from './SmallComponents/SelectGroup';
import DarkModeButton from './SmallComponents/DarkmodeButton'


function News({darkMode,darkModeEnabled,darkModeTrigger}) {
    const [newsData, setNewsData] = useState([])
    const [query, setQuery] = useState(localStorage.getItem('Query') === null ? 'world' : localStorage.getItem('Query'))
    console.log(localStorage.getItem('Query'))
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
            q: localStorage.getItem('Query') === null ? 'world' : localStorage.getItem('Query'),
            pageNumber: '1',
            pageSize: '50',
            autoCorrect: 'true',
        },
        headers: {
            'X-RapidAPI-Key': '57a099fbc9msh14d1195ebbaf26bp1159c0jsnfe005085f3f8',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };


    useEffect(() => {
        axios.request(options).then(function (response) {
            setNewsData(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(newsData));
    }, []);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setNewsData(items);
        }
    }, []);

    return (
        <div className={`${darkModeEnabled ? darkMode.darkModeBgColor : darkMode.lightModeBgColor} py-20`}>
            <DarkModeButton darkModeEnabled={darkModeEnabled} darkModeTrigger={darkModeTrigger} />
            <ButtonGroup darkMode={darkMode} darkModeEnabled={darkModeEnabled} setQuery={setQuery} />
            <SelectGroup darkMode={darkMode} darkModeEnabled={darkModeEnabled} setQuery={setQuery} />
            <h1 className="text-center text-2xl text-indigo-600 font-bold mt-5">{query}</h1>
            <div>{newsData.length === 0 ?
                <div className={`flex justify-center space-x-5 my-4 text-2xl ${darkModeEnabled ? darkMode.darkModeTextColor : darkMode.lightModeTextColor}`}>
                    <p>Loading</p>
                    <div className="w-5 h-5 mt-2 rounded-full animate-spin border-t-2 border-t-indigo-500
                    ring-2 ring-indigo-500 ring-offset-2"></div>
                </div>
                :
                ""
            }</div>
            <div className="grid lg:grid-cols-2">
                {newsData && newsData.map(news => {
                    return (
                        <Card darkMode={darkMode}
                            key={news.id}
                            Title={news.title}
                            Description={news.description}
                            Date={news.datePublished}
                            Link={news.url}
                            Image={news.image.url} />
                    )
                })}
            </div>
        </div>
    )
}

export default News
