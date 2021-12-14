import React, { useEffect, useState } from "react";
import axios from "axios";
import './admin_add_news.scss';

const AddedNews = () => {

    const [getNews, setGetNews] = useState([]);
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/product");
        setGetNews(res.data);
    }, []);
    console.log(getNews);

    const deleteNews = (id) => {
        axios.delete("http://localhost:5000/product/" + id)
            .then(response => {
                if (response.data != null) {
                    // alert("News deleted succesfully");
                    window.location.reload()
                }
            });
    }

    return (
        <table className="table-style1">
            <tr className="hero-tr tr-style">
                <th className="th-style for20">Yangilik nomi</th>
                <th className="th-style for30">Yangilik matni</th>
                <th className="th-style for40">Rasmi</th>
                <th className="th-style for10">Btn</th>
            </tr>
            {
                getNews.map((elem) => {
                    return (
                        <tr key={elem._id} className="tr-style">
                            <td className="td-style for20">{elem.name}</td>
                            <td className="td-style for30"><p>{elem.description}</p></td>
                            <td className="td-style for40">
                                <img
                                    src={"http://localhost:5000/" + elem.imagePath}
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                        border: "1px #fac312 solid",
                                    }}
                                    alt="newsImage"
                                    className="news_adm_img_added"
                                />
                            </td>
                            <td className="td-style td-btn-style for10"><button className="td-style-delBtn" onClick={() => deleteNews(elem._id)}>O'chirish</button></td>
                        </tr>
                    )
                })
            }


        </table>
    )
}
export default AddedNews