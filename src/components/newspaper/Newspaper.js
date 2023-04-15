import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import News from "./News";

const Newspaper = () => {

    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0dbda8bf34ee4c2bb71cf3f3dae6c648'

    const [allNews, setAllNews] = useState([])
    useEffect(()=>{
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setAllNews(data.articles))
    })

    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    allNews.map(news => (
                        <News news={news}/>
                    ))
                }
            </Row>
        </div>
    );
};

export default Newspaper;