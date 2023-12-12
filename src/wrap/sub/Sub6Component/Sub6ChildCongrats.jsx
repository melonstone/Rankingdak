import React from "react";
import '../scss/sub6Congrats.scss';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Sub6ChildCongrats(){

    const navigate = useNavigate();

    // 상태관리변수
    const [state, setState] = React.useState({
        list: []
    });
    
    // AXIOS
    React.useEffect(()=>{
        
        axios({
            url: './data/sub/sub6_2.json',
            method: 'GET'
        })
        .then((res)=>{
            // console.log(res.data);
            
            setState({
                ...state,
                list: res.data.list
            });
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    // 전체 이벤트 보기
    const onClickEvent=(e)=>{
        e.preventDefault();

        navigate('/sub6');
    }

    return (
        <div id="sub6-cong">
            <div className="container">
                <div className="title">
                    <h2>당첨자 발표</h2>
                </div>
                <div className="content">
                    <div className="go-event">
                        <a href="!#" onClick={onClickEvent}>
                            <span>전체 이벤트 보기</span>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                    <div className="list-header">
                        <ul className='column-box'>
                            <li className='col1'><span>번호</span></li>
                            <li className='col2'><span>제목</span></li>
                            <li className='col3'><span>작성자</span></li>
                            <li className='col4'><span>작성일</span></li>
                        </ul>
                    </div>
                    <ul className="list-data">
                        {
                            state.list.map((item, idx)=>{
                                return (
                                    <>
                                        <li>
                                            <ul className='column-box'>
                                                <li className='col col1' key={item.번호}>
                                                    <span>
                                                        {item.번호==='공지' && <i className="notice"></i>}
                                                        {item.번호!=='공지' && item.번호}
                                                    </span>
                                                </li>
                                                <li className='col col2'><span><a href="!#">{item.제목}</a></span></li>
                                                <li className='col col3'><span>{item.작성자}</span></li>
                                                <li className='col col4'><span>{item.작성일}</span></li>
                                            </ul>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}