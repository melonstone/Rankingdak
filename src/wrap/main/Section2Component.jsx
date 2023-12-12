import React from "react";
import './scss/section2.scss';
import axios from "axios";

export default function Section2Component() {

    const slideWrap = React.useRef();  
    
    const [state, setState] = React.useState({
        cnt : 0,
    });

    const mainSlide=()=>{
        slideWrap.current.style.transition = 'all 0.6s ease-in-out';
        slideWrap.current.style.transform = `translateX(${-980 * state.cnt}px)`;
    }        
    
    React.useEffect(()=>{
        mainSlide();        
    },[state.cnt]);

    const onClickNext=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt: +1
        });
    }

    const onClickPrev=(e)=>{
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
            })
        }
    }  
   
    return (
        <section id="section2">
            <div className="slide-container">
                <div className="slide-view">
                    <div className="category-btn">
                        <button onClick={onClickPrev} className={'prev-arrow-btn'}></button>
                        <button onClick={onClickNext} className={'next-arrow-btn'}></button>
                        <ul className="slide-wrap">                          
                            <li ref={slideWrap}>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category1.png" alt="" />
                                    </div>
                                        <figcaption>신상품</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category2.png" alt="" />
                                    </div>
                                    <figcaption>선물하기</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category3.png" alt="" />
                                    </div>
                                    <figcaption>닭가슴살</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category4.png" alt="" />
                                    </div>
                                    <figcaption>즉석 간편식</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category5.png" alt="" />
                                    </div>
                                    <figcaption>도시락·볶음밥</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category6.png" alt="" />
                                    </div>
                                    <figcaption>소고기</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category7.png" alt="" />
                                    </div>
                                    <figcaption>돼지·오리고기</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category8.png" alt="" />
                                    </div>
                                    <figcaption>닭안심살</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category9.png" alt="" />
                                    </div>
                                    <figcaption>샐러드·과일</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category10.png" alt="" />
                                    </div>
                                    <figcaption>베이커리·치즈</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category11.png" alt="" />
                                    </div>
                                    <figcaption>과자·간식·떡</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category12.png" alt="" />
                                    </div>
                                    <figcaption>음료·차·프로틴</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category13.png" alt="" />
                                    </div>
                                    <figcaption>비건식품</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category14.png" alt="" />
                                    </div>
                                    <figcaption>계란·난백·콩</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category15.png" alt="" />
                                    </div>
                                    <figcaption>수산·해산</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category16.png" alt="" />
                                    </div>
                                    <figcaption>견과·고구마·감자</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category17.png" alt="" />
                                    </div>
                                    <figcaption>건강식품</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category18.png" alt="" />
                                    </div>
                                    <figcaption>반찬·밀키트·안주</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category19.png" alt="" />
                                    </div>                                
                                    <figcaption>소스·오일</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category20.png" alt="" />
                                    </div>
                                    <figcaption>식단·패키지</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category21.png" alt="" />
                                    </div>
                                    <figcaption>펫푸드</figcaption>
                                </figure>
                                <figure className="category-wrap">
                                    <div className="img-wrap">
                                        <img src="./images/intro/section2/category22.png" alt="" />
                                    </div>
                                    <figcaption>운동·생활용품</figcaption>
                                </figure>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </div>
        </section>
    );
};