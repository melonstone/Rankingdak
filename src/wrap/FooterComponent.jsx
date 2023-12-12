import React from 'react';
import './scss/Footer.scss';

export default function FooterComponent(){
    
    const [state, setState] = React.useState({
        isList: false,
        isIcon: false
    });

    // 패밀리사이트 버튼클릭시 리스트 출력
    const onClickSelectBtn=(e)=>{
        e.preventDefault();
        let isList = state.isList;
        let isIcon = state.isIcon

        if(isList===false){
            isList = true;
            isIcon = true;
        }
        else {
            isList = false;
            isIcon = false;
        }

        setState({
            ...state,
            isList: isList,
            isIcon: isIcon
        });
    }
    
    
    return (
        <footer id="footer">
            <div className="title-menu">
                <div className="title-container">
                    <ul>
                        <li><a href="!#">회사소개</a></li>
                        <i>|</i>
                        <li><a href="!#">공지사항</a></li>
                        <i>|</i>
                        <li><a href="!#">입점 · 제휴 · 광고문의</a></li>
                        <i>|</i>
                        <li><a href="!#">이용약관</a></li>
                        <i>|</i>
                        <li><a href="!#">개인정보처리방침</a></li>
                    </ul>
                    <div className="family-box">
                        <button onClick={onClickSelectBtn} className='select-btn'>
                            <span>패밀리사이트</span>
                            <i className={`material-icons${state.isIcon===true? ' on': ''}`} style={{color: '#666'}}>keyboard_arrow_up</i>
                        </button>
                        {/* 패밀리사이트 */}
                        <ul className={`family-list${state.isList===true? ' on' : ''}`}>
                            <li><a href="!#">랭킹닭컴</a></li>
                            <li><a href="!#">개근질마트</a></li>
                            <li><a href="!#">개근질닷컴</a></li>
                            <li><a href="!#">피키다이어트</a></li>
                            <li><a href="!#">다이어트전문 레시피 다쿡</a></li>
                            <li><a href="!#">바디프로필 전문 스튜디오U</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <img src="./images/intro/footer/footer_logo.png" alt="" />
                </div>
                <div className="company">
                    <ul>
                        <li><strong>(주)푸드나무</strong></li>
                        <li>
                            <em>
                                대표: 김영문 
                                <i>|</i> 
                                주소 : 서울특별시 마포구 월드컵북로 396, 15층(상암동, 누리꿈스퀘어 비지니스타워) 
                                <i>|</i>
                                사업자등록번호 : 105-87-81968
                                <a href="!#" className="info">사업자정보 확인</a>
                                <i>|</i>
                                통신판매업신고번호 : 제2015-서울마포-1058호
                                <i>|</i>
                                개인정보보호책임자 : 이재길
                            </em>
                        </li>
                        <li>
                            <p className='copyright'>Copyright©랭킹닭컴 All rights reserved.</p>
                        </li>
                    </ul>
                </div>
                <div className="customer-center">
                    <ul className='caption'>
                        <li><strong>고객센터</strong></li>
                        <li>
                            <div className="tel-box">
                                <img src="./images/intro/ico_tel.png" alt="" />
                                <h6>02-6405-8088</h6>
                            </div>
                        </li>
                        <li><em>FAX. 02-6351-8088</em><span>E-mail. admin@foodnamoo.com</span></li>
                    </ul>
                    <div className="customer-btn">
                        <a href="!#"><span>고객의 제안</span></a>
                        <a href="!#"><span>1:1 문의</span></a>
                    </div>
                    <ul className='sns_icons'>
                        <li><a href="!#"></a></li>
                        <li><a href="!#"></a></li>
                        <li><a href="!#"></a></li>
                        <li><a href="!#"></a></li>
                        <li><a href="!#"></a></li>
                        <li><a href="!#"></a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    <a href="!#">
                        <img src="./images/intro/footer/ico_wooribank.png" alt="" />
                        <span>우리은행 구매 안전 서비스 가입사실 확인</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}