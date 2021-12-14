import React, { useEffect, useState } from "react";
import axios from "axios";
import './admin_add_news.scss';
import AddedNews from "./added_news";
// import { useHistory } from 'react-router-dom'
const AdminAddNews = () => {





    // let history = useHistory();
    // const [upload, setUpload] = useState({
    //     name: '',
    //     description: '',
    //     imagePath: '',
    // });

    // const changeHandler = (e) => {
    //     setUpload({...upload, [e.target.name]:e.target.value})
    // }

    // async function SendForm(e){

    //     let formData = new FormData()
    //     const headers = { 
    //         'Authorization': 'Bearer my-token',
    //         'My-Custom-Header': 'foobar'
    //     };
    //     axios({
    //         url: 'http://localhost:5000/product/creatproduct',
    //         method: "POST",
    //         headers: {

    //         },
    //     })
    //     await axios.post('http://localhost:5000/product/creatproduct', upload, { headers })
    //     .then((res)=> {
    //         console.log(res);
    //         // window.location.reload()
    //     }) .catch((err)=> {
    //         console.log(err);
    //     })
    //     e.preventDefault()
    // }
    // const [name, setName] = useState("");
    // const [selectedFile, setSelectedFile] = useState(null);
    // const submitForm = () => {
    //     const formData = new FormData();
    //     // formData.append("name", name);
    //     // formData.append("imagePath", selectedFile);

    //     axios
    //         .post("http://localhost:5000/product/creatproduct", formData)
    //         .then((res) => {
    //             alert("File Upload success");
    //         })
    //         .catch((err) => alert("File Upload Error"));
    // };


    // const changeHandle = (e) => {
    //     setUpload({ ...upload, [e.target.name]: e.target.value });
    // };

    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     // const article = { title: 'React Hooks POST Request Example' };
    //     axios.post("http://localhost:5000/product/creatproduct")
    //         .then(response => setUpload(response.data.id));

    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
    // const reloadPage = (idd) => {
    //     window.location.reload(idd)
    // }



    // const postData = (iid) => {
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:5000/product/creatproduct',
    //         data: form,
    //         headers: {
    //             'Conent-Type': 'multipart/form-data',
    //         },
    //     });

    // }

    // async function SendForm(e) {
    //     const formData = new FormData();

    //     console.log(upload);
    //     axios
    //         .post("http://localhost:5000/product/creatproduct", formData, {
    //             headers: {
    //                 "Conent-Type": "multipart/form-data",
    //             },
    //         })
    //         .then((res) => {
    //             alert(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    // const onClickButton = () => {
    //     window.location.reload(false)
    // }
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [imagePath, setImagePath] = useState()
    const send = event => {
        // console.log("duu");
        const data = new FormData();
        data.append("name", name);
        data.append("description", description);
        data.append("imagePath", imagePath);

        axios.post("http://localhost:5000/product/creatproduct", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        // console.log(data);
    };

    return (
        <>
            <div className="bg-upload-news-page">
                <br />
                <div className="div-for-news-upload">
                    <form
                    action="#"
                    // onSubmit={SendForm}
                    // onSubmit={() => postData()}  
                    // action="http://localhost:5000/product/creatproduct"
                    // method="POST"
                    // encType="multipart/form-data"
                    // onSubmit={()=>{onClickButton()}}
                    // onSubmit="return false"
                    >
                        <br />
                        <br className="for-remove-br2" />
                        <br className="for-remove-br" />
                        <input
                            name="name"
                            id="name"
                            maxLength="25"
                            // onChange={changeHandler}
                            spellCheck="false"
                            type="text"
                            placeholder="Yangilik nomi"
                            className="news-title"
                            // value={names}
                            onChange={event => {
                                const { value } = event.target;
                                setName(value);
                            }}
                        />
                        <br className="for-remove-br2" />
                        <br />
                        <textarea
                            name="description"
                            id="description"
                            maxLength="500"
                            // onChange={changeHandler}
                            spellCheck="false"
                            cols="55"
                            rows="10"
                            type="text"
                            placeholder="Yangilik matni"
                            className="news-description"
                            onChange={event => {
                                const { value } = event.target;
                                setDescription(value);
                            }}
                        ></textarea>
                        <br className="for-remove-br2" />
                        <br />
                        <input
                            name="imagePath"
                            id="imagePath"
                            // onChange={changeHandler}
                            type="file"
                            placeholder="Yangilik rasmi"
                            className="news-upload-image"
                            onChange={event => {
                                const file = event.target.files[0]
                                setImagePath(file)
                            }}
                        />
                        <br />
                        <br />

                        <button
                            onClick={send}
                            // type="submit"
                            className="news-upload-submit"
                        >
                            Jo'natish
                        </button>
                    </form>



                </div>
                <br />

                <div>
                    <table className="table-style">
                        <AddedNews />
                    </table>
                </div>
                {/* ekranga chiqaarish */}
                {/* {mana.map((elem) => {
                    console.log("http://localhost:5000" + elem.imagePath);
                    return (
                        <>
                            <div className="card" key={elem._id}>
                                <h1>{elem.name}</h1>
                                <h3>{elem.description}</h3>
                                <img
                                    src={"http://localhost:5000/" + elem.imagePath}
                                    style={{
                                        width: "400px",
                                        borderRadius: "50%",
                                        height: "400px",
                                        backgroundColor: "grey",
                                    }}
                                    alt="ufffff"
                                />
                            </div>
                        </>
                    );
                })} */}
            </div>
        </>
    )
}
export default AdminAddNews