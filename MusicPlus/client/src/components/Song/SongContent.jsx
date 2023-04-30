import Layout from "../Layout/Layout.jsx";
import {useLocation} from "react-router-dom";
import {Col, Row, Button, Modal, Card} from "react-bootstrap";
import "./index.css"
import LyricPart from "./LyricPart";
import CommentPart from "./CommentPart";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_API} from "../../utils/env.js";
import {UserContext} from "../../utils/AppContextProvider.jsx";

export default function SongContent(){
    const [showModal, setShowModal] = useState(false);
    const [keyword, setKeyword] = useState("")
    const location = useLocation();
    const {userDetail, setUserDetail} = useContext(UserContext)
    const [count, setCount] = useState(0)
    const [text, setText] = useState("");

    const handleChange = (event) => {
        // 获取 textarea 中的内容
        const value = event.target.value;
        setText(value)
        console.log(text)
    };



    async function postComment(content){
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json', // 设置请求头，指定数据类型为JSON
                    'Authorization': 'Basic ' + btoa(`${userDetail.username}:${userDetail.password}`)
                }
            };
            await axios.post(`${BACKEND_API}/api/comment/new`,{
                songId: keyword,
                comment: content
            },config).then(
                (response)=>{
                    console.log("taibangle")
                }
            )
        } catch (error) {
            console.log(error);
        }
        setCount(count+1)
    }



    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setKeyword(searchParams.get('keyword'));



        // const getResult = async () => {
        //     try {
        //         // await axios.get(`${BACKEND_API}/api/search?keyword=${keyword}&pageNum=${1}&pageSize=${20}`).then(
        //         //     (response)=>{
        //         //         setResult(response.data.data.song)
        //         //         setSinger(response.data.data.singer)
        //         //         setAlbum(response.data.data.album)
        //         //         // console.log(response.data.data.singer)
        //         //         setIsLoading(false);
        //         //     }
        //         // )
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
        // getResult()

    }, [location]);

    return(
        <Layout>
            <Row className="mt-4">
                <h1>{keyword}</h1>
            </Row>
            <Row className="mt-4">
                <Col className="song justify-content-md-center mb-4">
                    <LyricPart id={keyword}></LyricPart>
                </Col>
                <Col className="comment justify-content-md-center ms-4">
                    <CommentPart songId={keyword} num={count}></CommentPart>
                </Col>
            </Row>
            <Row>
                <Button onClick={()=>setShowModal(true)}>comment something</Button>
                <Modal show={showModal} onHide={()=>setShowModal(false)}>
                    <Card className="card">
                        <Card.Header>
                            <svg onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-x card" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Card标题</Card.Title>
                            <textarea onChange={(event)=> handleChange(event)} className="input mb-2"  rows={5}/>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Button onClick={()=>{postComment(text);setShowModal(false);}}>submit</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Modal>
            </Row>
        </Layout>
    )
}

