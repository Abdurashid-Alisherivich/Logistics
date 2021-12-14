import React, { useEffect, useState } from "react";
import axios from "axios";
import './hero-news.scss';

const HeroNews = () => {

    const [getNews, setGetNews] = useState([]);
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/product");
        setGetNews(res.data);
    }, []);
    console.log(getNews);


    return (
        <>
            
            <div className="hero-news-page">
                <br />
                {
                    getNews.map((elem) => {
                        return (

                            
                            <div className="hero-news-all" key={elem._id}>
                                <div className="hero-news-text">
                                    <h1 className="text-title">{elem.name}</h1>
                                    <br className="remove-br" />
                                    <p className="text-desc">{elem.description}</p>
                                </div>

                                <div className="hero-news-image">
                                    <img
                                        src={"http://localhost:5000/" + elem.imagePath}
                                        alt="newsImage"
                                        className="news-image"
                                        
                                    />
                                </div>
                                
                            </div>
                            
                        )

                    })
                }
                <br />
            </div>

        </>
    )
}
export default HeroNews