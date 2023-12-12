import React from 'react';
import '../sub/scss/SubLogin.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signIn } from '../../reducer/signIn';

export default function SubAdminLoginComponent () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',
        비밀번호: '',
        로그인정보: {},
        
        자동로그인: '',
        아이디저장: '',
    })

    const onClickIdSearch=(e)=>{
        e.preventDefault();
        navigate('/adminSigninIdSearch');
    }
    const onClickPwSearch=(e)=>{
        e.preventDefault();
        navigate('/adminSigninPwSearch');
    }

    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        })
    }
    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        })
    }

    const onClickSignup=(e)=>{
        navigate('/adminSignupAgree');
    }

    const onChangeAutoLogin=(e)=>{
        setState({
            ...state,
            자동로그인: e.target.checked
        })
    }
    const onChangeIdSave=(e)=>{
        setState({
            ...state,
            아이디저장: e.target.checked
        })
    }
    

    const onSubmitLogin=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('adminId', state.아이디);
        formData.append('adminPw', state.비밀번호);

        axios({
            url: 'http://eyou46.dothome.co.kr/rankingdak/rankingdak_admin_signin.php',
            method: 'POST',
            data: formData,
        })
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                if(res.data===0){
                    alert('로그인 실패하였습니다. 아이디, 비밀번호가 맞는지 다시 확인해주세요');
                }
                else {
                    let toDay1 = new Date();
                    toDay1.setDate(toDay1.getDate() + 1);
                    let toDay2 = new Date();
                    toDay2.setDate(toDay2.getDate() + 365);

                    const 로그인정보 = {
                        구분: '관리자',
                        아이디: res.data.아이디,
                        이름: res.data.이름,
                        휴대폰: res.data.휴대폰,
                        이메일: res.data.이메일,
                        가입일: res.data.가입일,
                        만료일: `${state.자동로그인===true?toDay2.getTime():toDay1.getTime()}`,
                        
                    }
                    localStorage.setItem('RANKING_SIGNIN_DATA', JSON.stringify(로그인정보));

                    dispatch(signIn(로그인정보));
                    alert('관리자님, 랭킹닭컴에 오신 것을 환영합니다.');

                    navigate('/index');
                }
            }

            
        })
        .catch((err)=>{

        })
    }

    

    return (
        <div id='login'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>안녕하세요, <em>관리자</em>님</h2>
                        <span><strong><img src="./images/sub/login/logo.png" alt="" /></strong><em>입니다.</em></span>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitLogin} action="">
                            <ul>
                                <li>
                                    <div className="gap">
                                        <input
                                            type="text"
                                            id='adminId'
                                            name='adminId'
                                            placeholder='아이디'
                                            value={state.아이디}
                                            onChange={onChangeId}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input
                                            type="password"
                                            id='adminPw'
                                            name='adminPw'
                                            placeholder='비밀번호'
                                            value={state.비밀번호}
                                            onChange={onChangePw}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="checkbox" id='autoLogin' name='autoLogin' value={'자동로그인'} onChange={onChangeAutoLogin}/>
                                        <label htmlFor="autoLogin">자동로그인</label>
                                        <input type="checkbox" id='idSave' name='idSave' value={'아이디저장'} onChange={onChangeIdSave} />
                                        <label htmlFor="idSave">아이디저장</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="submit" id='loginBtn' name='loginBtn' value={'로그인'} />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap idpw-gap">
                                        <a href="!#" onClick={onClickIdSearch}>아이디 찾기</a>
                                        <i>|</i>
                                        <a href="!#" onClick={onClickPwSearch}>비밀번호 찾기</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <ul className="login-icon-box">
                                            <li>
                                                <a href="!#" className='blind'>네이버 로그인</a>
                                            </li>
                                            <li>
                                                <a href="!#" className='blind'>아이폰 로그인</a>
                                            </li>
                                            <li>
                                                <a href="!#" className='blind'>카카오톡 로그인</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input onClick={onClickSignup} type="button" id='signinBtn' name='signinBtn' value={'간편회원가입'} />
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
