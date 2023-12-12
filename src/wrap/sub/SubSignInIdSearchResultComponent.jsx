import React from 'react';
import '../sub/scss/SubSigninIdSearchResult.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SubSignInIdSearchResultComponent () {

    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = React.useState({

        아이디: '',

    })

    const onClickPwSearch=(e)=>{
        e.preventDefault();
        navigate('/signinPwSearch');
    }

    const onClickCheck=(e)=>{
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div id='signin-search-result'>
            <section id="section1">
                <div className="container">

                    <div className="content">
                        <ul>
                            <li>
                                <div className="gap">
                                    <i className='user-icon'></i>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <h3>
                                        고객님의 아이디는 <br/>
                                        <strong>{location.state.아이디}</strong> 입니다.
                                    </h3>
                                </div>
                            </li>
                            <li>
                                <div className="gap gap2">
                                    <button onClick={onClickPwSearch} className='pwSearch'>비밀번호찾기</button>
                                    <button onClick={onClickCheck} className='check'>확인</button>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    );
};
