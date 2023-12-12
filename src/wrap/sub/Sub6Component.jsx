import React from "react";
import './scss/sub6.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Sub6Component(){
    
    const navigate = useNavigate();


    // 상태관리변수
    const [state, setState] = React.useState({
        event: []
    })


    // AXIOS
    React.useEffect(()=>{
        axios({
            url: './data/sub/sub6.json',
            method: 'GET'
        })
        .then((res)=>{
            console.log(res.data);
    
            setState({
                ...state,
                event: res.data.event
            });
    
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

    // 당첨자 발표
    const onClickCongrats=(e)=>{
        e.preventDefault();
        navigate('/sub6Congrats');
    }

    
    return (
        <div id="sub6">
            <div className="container">
                <div className="title">
                    <h2>이벤트</h2>
                </div>
                <div className="content">
                    <div className="event">
                        <div className="event-header">
                            <h3>진행중 이벤트</h3>
                            <ul>
                                <li>전체</li>
                                <li>|</li>
                                <li>진행중 이벤트</li>
                                <li>|</li>
                                <li>종료된 이벤트</li>
                            </ul>
                            <a onClick={onClickCongrats} href="!#">
                                <i className="icon"></i>
                                <span>당첨자 발표 보기</span>
                            </a>
                        </div>
                        <ul className="event-wrap">
                            {
                                state.event.map((item, idx)=>{
                                    return (
                                        <li className="event-list" key={idx}>
                                            <div className="event-box">
                                                <div className="img">
                                                    <img src={`./images/sub/sub6/${item.image}`} alt="" />
                                                </div>
                                                <div className="text">
                                                    <span className="title-text">
                                                        {item.text}
                                                    </span>
                                                    <p className="date">
                                                        {item.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="page-bottom">
                            <div className="pagenation">
                                <button className="prev-btn"></button>
                                <a href="!#"><span className="on">1</span></a>
                                <a href="!#"><span>2</span></a>
                                <button className="next-btn"></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}