import React from 'react';
// import './scss/section7.scss'
import "../main/scss/sectionProductSlide.scss";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';

export default function SectionSlideComponentChild({product, n, refresh, imgLocation}){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({

        cnt: 0,

    });

    const refSlideWrap = React.useRef();


       // 최근본상품 클릭이벤트
       const onClickViewProduct=(e,item, path)=>{
        e.preventDefault();

        let obj = {
            번호: item.번호,
            이미지: `${path}${imgLocation}/${item.이미지}`,
            제품명: item.상품명,
            판매가: (Math.round(item.가격*(1-item.할인율)/100)*100),
        }
        dispatch(viewProduct(obj));
    }


    React.useEffect(()=>{
        let imsi = [];
        if(localStorage.getItem('VIEW-PRODUCT')===null){
            if(Object.keys(selector.viewproduct.current).length > 0){
                imsi = [selector.viewproduct.current];  
                localStorage.setItem("VIEW-PRODUCT", JSON.stringify(imsi));                
                dispatch(viewProductIsFlag(!selector.viewProductIsFlag.isFlag));
            }
        }
        else{
            let result = JSON.parse(localStorage.getItem('VIEW-PRODUCT'));

            let filterResult = result.map((item)=>item.번호===selector.viewproduct.current.번호 ? true : false);
            if(filterResult.includes(true)!==true){
                if(Object.keys(selector.viewproduct.current).length>0){ 
                    result = [selector.viewproduct.current, ...result];
                    localStorage.setItem("VIEW-PRODUCT", JSON.stringify(result));
                    dispatch(viewProductIsFlag(!selector.viewProductIsFlag.isFlag));
                }    
            }   
        }
           
            

    },[selector.viewproduct.current])

    React.useEffect(()=>{
        
        if(localStorage.getItem('VIEW-PRODUCT')!==null) {
            let result = JSON.parse(localStorage.getItem('VIEW-PRODUCT'));
            if(result.length>0){

                dispatch(quickMenuViewProduct(result));              
            }            
        }

    },[selector.viewProductIsFlag.isFlag]);



    // 슬라이드 수 너비 자동화
    React.useEffect(()=>{
        refSlideWrap.current.style.width = `${282 * n}px`;
    },[n]);

    const mainSlide=()=>{
        refSlideWrap.current.style.left = `${-1128 * state.cnt}px`; // 282*4=1128
        refSlideWrap.current.style.transition = `all 0.3s ease-in-out`;
    }
    // const subSlide=()=>{
    //     refSlideWrap.current.style.left = `${-282 * state.cnt}px`; // 282*4=1128
    //     refSlideWrap.current.style.transition = `all 0.3s ease-in-out`;
    // }

    React.useEffect(()=>{
        mainSlide();
    },[state.cnt])

    const onClickPrevBtn=(e)=>{
        e.preventDefault();
        if(state.cnt<=0){
            setState({
                ...state,
                cnt: 0
            })
        }
        else {
            setState({
                ...state,
                cnt: state.cnt-1
            })
        }
    }
    const onClickNextBtn=(e)=>{
        e.preventDefault();
        console.log(state.cnt)

        if(state.cnt>=(n/4)-1){
            setState({
                ...state,
                cnt: (n/4)-1
            })
        }
        else {
            setState({
                ...state,
                cnt: state.cnt+1
            })
        }
    }

    const onClickRefresh=(e)=>{
        e.preventDefault(product);
        let product1 = product.item;
        // product1.sort();
        product1.sort(function(a, b){return 0.5 - Math.random()});

        console.log(product1);
        
        setState({
            ...state,
            product: product1,
            isRandom: true,
        })
    }


    return (
        <div className="container">
            <div className="title">
                <h1>{product.title}</h1>
            </div>
            <div className="content">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={refSlideWrap} className="slide-wrap">
                           {
                                product.item.map((item,idx)=>{
                                    return(
                                        <li className={`slide slide${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')}>
                                                <div className="img-box">
                                                    <a href="!#">
                                                        <div className="main-img"><img src={`./images/intro/${imgLocation}/${item.이미지}`} alt="" /></div>
                                                        <div className="main-sticker">
                                                            { item.M정기배송 && <img className="sticker main-sticker-delivery" src='./images/intro/section7/IMG1681XzJ889805863.png' alt="" />}
                                                            { item.M프로 && <img className="sticker main-sticker-pro" src='./images/intro/section7/IMG1684oyb914888391.png' alt="" />}
                                                            { item.M단독상품 && <img className="sticker main-sticker-onlyone" src='./images/intro/section7/IMG1681Vpe889708160.png' alt="" />}
                                                        </div>
                                                        
                                                    </a>
                                                </div>
                                                <div className="info-box">
                                                    <a href="!#">

                                                        {
                                                            item.포인트==='' && (
                                                                <span className='delivery-star'>
                                                                    <i className={`delivery ${item.배송}`}></i> 
                                                                    <div className='star'>
                                                                        <i className='star-icon'></i>
                                                                        <strong className='total-score'>{item.별점}</strong>
                                                                        <em className='total-num'>({item.토탈})</em>
                                                                    </div>
                                                                </span>
                                                            )
                                                        }
                                                     
                                                    <h4>{item.포인트}</h4>
                                                
                                                        
                                                            <h3 className={`${item.상품명고정===true ? 'on' : ''}`}>{item.상품명}</h3>
                                                        
                                                        
                                                    <span className='price'>
                                                        {
                                                            item.할인율!==0 && <strong>{Math.round(item.할인율*100)}<i>%</i></strong>
                                                        }
                                                        {
                                                            item.할인율===0 && <strong className='on'>{Math.round(item.할인율*100)}<i>%</i></strong>
                                                        }
                                                        <em>{(Math.round(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KO')}<i>원</i></em>
                                                        <h5>{item.가격.toLocaleString('ko-KO')}원</h5>
                                                    </span>
                                                    <p>{item.개별가격}</p>
                                                    <span className='sub-sticker'>
                                                        { item.S신상품 && <i className='new'><img src="./images/intro/section/IMG1681Neg889936366.png" alt="" /></i>}
                                                        { item.S추가증정 && <i className='add-pre'><img src="./images/intro/section/IMG1681RXW889944088.png" alt="" /></i>}
                                                        { item.S추가적립 && <i className='add-point'><img src="./images/intro/section/IMG1681Mbe889953022.png" alt="" /></i>}
                                                        { item.SRACE && <i className='race'><img src="./images/intro/section/IMG1687Txz850332633.png" alt="" /></i>}
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                           }
                            

                        </ul>
                    </div>
                    <div className="prev-allow-btn-box">
                        <button className={`prev-allow-btn${state.cnt===0 ? ' on' : ''}`} onClick={onClickPrevBtn}></button>
                    </div>
                    <div className="next-allow-btn-box">
                        <button className={`next-allow-btn${state.cnt===(n/4)-1 ? ' on' : ''}`} onClick={onClickNextBtn}></button>
                    </div>
                    <div className="bottom-btn-box">
                        {
                            refresh === true && <button className='refresh' onClick={onClickRefresh}><span>추천상품 새로고침</span><i><img src="./images/intro/section3/ico_refresh.png" alt="" /></i></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};