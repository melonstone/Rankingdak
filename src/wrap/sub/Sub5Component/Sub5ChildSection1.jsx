import React from "react";
import '../scss/sub5.scss';

export default function Sub5ChildSection1(){
    
    // 선택자
    const slideWrap = React.useRef();

    // 상태관리변수
    const [state, setState] = React.useState({
        cnt: 0
    })

    // 슬라이드 이동함수
    const mainSlide=()=>{ 
        slideWrap.current.style.transition = 'all 0.5s ease-in-out';
        slideWrap.current.style.transform = `translateX(${-1130 * state.cnt}px)`;
    }

    // 슬라이드 이동버튼
    // 왼쪽버튼
    const onClickLeftArrow=(e)=>{
        e.preventDefault();
        
        if(state.cnt<=0){
            setState({
                ...state,
                cnt: 0
            });
        }
        else{
            setState({
                ...state,
                cnt: state.cnt-1
            });
        }
    }
    // 오른쪽버튼
    const onClickRightArrow=(e)=>{
        e.preventDefault();
        
        if(state.cnt>=1){
            setState({
                ...state,
                cnt: 1
            });
        }
        else {
            setState({
                ...state,
                cnt: state.cnt+1
            });
        }      
    }
    

    // cnt변수에 반응하는 유즈이펙트
    React.useEffect(()=>{        
        mainSlide();
    },[state.cnt]);

    return (
        <section id="section1" className="section">
            <div className="title">
                <h3>인기브랜드</h3>
            </div>
            <div className="content">
                <div className="popular-brand">
                    <ul ref={slideWrap} className="slide-wrap">
                        <li className="slide slide1">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1649Uey592990027.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1648lhC789791068.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>맛있닭</strong>
                                    <p>Life is Delicious!</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide2">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1682nPY657248397.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1682oyT657241038.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>랭커</strong>
                                    <p>Rank up with Ranker!!</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide3">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1679TUo449090833.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1649itM724210195.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>러브잇</strong>
                                    <p>We Love to Eat!</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide4">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1649oEn724407023.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1649pAb724434243.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>신선애</strong>
                                    <p>유통과정의 변화로 만들어낸 신선함</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide5">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1678Ryh667833472.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1649iyq640354141.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>프로틴어스</strong>
                                    <p>프로틴의 신세계</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide6">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1679icu448791838.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1649umh642984989.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>네이쳐엠</strong>
                                    <p>자연의 마음을 담은 최고의 음식</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide7">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1652uDT424538861.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1652ZWE424459741.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>한끼통살</strong>
                                    <p>입맛을 저격할 특제 소스를 품은 닭가슴살</p>
                                </div>
                            </div>
                        </li>
                        <li className="slide slide8">
                            <div className="brand-list">
                                <div className="img-box">
                                    <a href="!#">
                                        <img src="./images/sub/sub5/IMG1654oWV131325616.jpg" alt="" />
                                        <div className="logo-box">
                                            <img className="logo" src="./images/sub/sub5/IMG1654zhs131307411.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="caption-box">
                                    <strong>랩노쉬</strong>
                                    <p>건강한 영양 밸런스로 식단 고민 종결</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button onClick={onClickLeftArrow} className="left-btn">
                        <i className="material-icons">keyboard_arrow_left</i>
                    </button>
                    <button onClick={onClickRightArrow} className="right-btn">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </button>
                </div>
            </div>
        </section>
    )
}