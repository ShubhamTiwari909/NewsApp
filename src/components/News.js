import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';
import ButtonGroup from './ButtonGroup'

function News() {
    const [newsData, setNewsData] = useState([])
    const [query, setQuery] = useState(localStorage.getItem('Query'))

    console.log(query)
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
            q: localStorage.getItem('Query'),
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

    return (
        <div>
            <ButtonGroup setQuery={setQuery} />
            <div className="grid lg:grid-cols-2">
                {newsData && newsData.map(news => {
                    return (
                        <Card
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
