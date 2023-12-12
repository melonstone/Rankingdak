import React from 'react';
import '../sub/scss/SubSigninPwReset.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SubSignInPwResetComponent () {

    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = React.useState({

        isBtn: false,
        

        아이디: location.state.아이디,
        비밀번호: '',
        비밀번호확인: '',

        pwGuidText: '비밀번호는 6 ~ 16자 제한입니다.',
        pwCheckGuidText: '',

    })

    const onChangePw=(e)=>{
        const {value} = e.target;
        let isBtn = false;

        const regExp1 = /^(.){6,16}$/g;
        const regExp2 = /((?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[`~!@#$%^&*])+)/g;
        const regExp3 = /\s/g;
        const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;

        let pwGuidText = '비밀번호는 6 ~ 16자 제한입니다.';

        if(value.length>=6 && regExp2.test(value)===false){
            pwGuidText = '6 ~ 16자 영문, 숫자, 특수문자 1개 이상씩 혼용이 필수입니다.'
        }
        else if (value.length===0){
            pwGuidText = '비밀번호는 6 ~ 16자 제한입니다.';
        }
        else if(value===state.비밀번호){
            isBtn = true;
            pwGuidText = '';
        }
        else {
            pwGuidText = '';
        }

        setState({
            ...state,
            비밀번호: value,
            pwGuidText: pwGuidText,
            isBtn: isBtn,
        })
    }
    React.useEffect(()=>{
        let pwCheckGuidText = '';
        const regExp2 = /((?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[`~!@#$%^&*])+)/g;

        if(regExp2.test(state.비밀번호)===true){
            pwCheckGuidText = '확인비밀번호는 6 ~ 16자 제한입니다.';
        }
        setState({
            ...state,
            pwCheckGuidText: pwCheckGuidText,
        })

    },[state.비밀번호])
    const onChangePwCheck=(e)=>{
        const {value} = e.target;
        let isBtn = false;

        const regExp1 = /^(.){6,16}$/g;
        const regExp2 = /((?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[`~!@#$%^&*])+)/g;
        const regExp3 = /\s/g;
        const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;

        let pwCheckGuidText = '';

        if(value.length>=6 && regExp2.test(value)===false){
            pwCheckGuidText = '확인비밀번호는 6 ~ 16자 영문, 숫자, 특수문자 1개 이상씩 혼용이 필수입니다.'
        }
        else if (value.length===0){
            pwCheckGuidText = '확인비밀번호는 6 ~ 16자 제한입니다.';
        }
        else if (value!==state.비밀번호){
            pwCheckGuidText = '비밀번호가 일치하지 않습니다.';
        }
        else if(value===state.비밀번호){
            isBtn = true;
            pwCheckGuidText = '';
        }
        else {
            pwCheckGuidText = '';
        }

        setState({
            ...state,
            비밀번호확인: value,
            pwCheckGuidText: pwCheckGuidText,
            isBtn: isBtn,
        })
    }

    const onSubmitPwReset=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('userId', state.아이디);
        formData.append('userPw', state.비밀번호);

        axios({
            url: 'http://eyou46.dothome.co.kr/rankingdak/rankingdak_pw_reset.php',
            method: 'POST',
            data: formData,
        })
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                if(res.data===1){
                    alert('비밀번호 변경이 완료됐습니다.')
                    navigate('/login');
                }
                else {
                    alert('비밀번호 변경이 실패하였습니다. 다시 시도 해주세요')
                }
            }
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div id='signin-pw-reset'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>비밀번호 재설정</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitPwReset}>
                            <ul>
                                <li>
                                    <div className="gap">
                                        <div className="input-box">
                                            <input 
                                                type="text"
                                                id="userId"    
                                                name="userId"
                                                value={location.state.아이디}
                                                disabled  
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <div className="input-box">
                                            <input 
                                                type="password"
                                                id="userPw"    
                                                name="userPw"
                                                placeholder='새 비밀번호 입력'
                                                onChange={onChangePw}
                                            />
                                        </div>
                                    </div>
                                    <div className="guid-box">
                                        <p>{state.pwGuidText}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <div className="input-box">
                                            <input 
                                                type="password"
                                                id="userPwCheck"    
                                                name="userPwCheck"
                                                placeholder='새 비밀번호 확인'
                                                onChange={onChangePwCheck}
                                            />
                                        </div>
                                    </div>
                                    <div className="guid-box">
                                        <p>{state.pwCheckGuidText}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input 
                                            type="submit"
                                            id="updateBtn"    
                                            name="updateBtn"
                                            value={'변경하기'}
                                            disabled={!state.isBtn}
                                            className={state.isBtn?'on':''}
                                        />
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
