import React from "react";
import '../scss/sub5.scss';

export default function Sub5ChildSection2(){
    
    // 선택자
    const slideWrap = React.useRef();

    // 상태관리변수
    const [state, setState] = React.useState({
        cnt: 0
    })

    // 슬라이드 이동함수
    const mainSlide=()=>{ 
        slideWrap.current.style.transition = 'all 0.3s ease-in-out';
        slideWrap.current.style.transform = `translateX(${-645 * state.cnt}px)`;
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
        <section id="section2" className="section">
            <div className="title">
                <h3>MD추천 브랜드</h3>
            </div>
            <div className="content">
                <div className="md-brand">
                    <ul ref={slideWrap} className="slide-wrap">
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1648sfu789775259.png" alt="" />
                                    </div>
                                    <span>맛있닭</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1682Ols657232538.png" alt="" />
                                    </div>
                                    <span>랭커</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1648eLF549530125.png" alt="" />
                                    </div>
                                    <span>잇메이트</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1649qXg724176171.png" alt="" />
                                    </div>
                                    <span>러브잇</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1649eUJ642974611.png" alt="" />
                                    </div>
                                    <span>네이처엠</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1649kct724312045.png" alt="" />
                                    </div>
                                    <span>치품닭</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1649qHj642738465.png" alt="" />
                                    </div>
                                    <span>1am</span>
                                </a>
                            </div>
                        </li>
                        <li className="slide">
                            <div className="brand-name">
                                <a href="!#">
                                    <div className="logo">
                                        <img src="./images/sub/sub5/IMG1660yJR895311477.png" alt="" />
                                    </div>
                                    <span>닥터유</span>
                                </a>
                            </div>
                        </li>
                        
                    </ul>
                    <button onClick={onClickLeftArrow} className="left-btn">
                        <i className="fa fa-angle-left"></i>
                    </button>
                    <button onClick={onClickRightArrow} className="right-btn">
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}