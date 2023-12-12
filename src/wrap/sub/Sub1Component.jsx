import React from 'react';
import './scss/sub1.scss';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';

export default function Sub1Component(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);


    const [state,setState] = React.useState({
        cnt:0,
        orangeclick1:true,
        orangeclick2:false,
        changeimage1:true,
        changeimage2:false,
        changeimage3:false,
        changeimage4:false,
        changeimage5:false,
        changeimage6:false,
        changeimage7:false,
        changeimage8:false,
        changeimage9:false,
        changeimage10:false,
        changeimage11:false,
        changeimage12:false,
        changeimage13:false,
        changeimage14:false,
        changeimage15:false,
        changeimage16:false,
        changeword1:true,
        changeword2:false,
        changeword3:false,
        changeword4:false,
        changeword5:false,
        changeword6:false,
        changeword7:false,
        changeword8:false,
        changeword9:false,
        changeword10:false,
        changeword11:false,
        changeword12:false,
        changeword13:false,
        rankingtab1:true,
        rankingtab2:false,
        rankingtab3:false,
        rankingtab4:false,
        Conponent1:true,
        Conponent2:false,
        Conponent3:false,
        Conponent4:false,
        Conponent5:false,
        제품:[],
        제품2:[],
        제품3:[],
        제품4:[]
    });

    React.useEffect(()=>{
        axios({
            url:`data/sub/sub1.json`,
            method:'GET'
        })
        .then((result)=>{
            setState({
                ...state,
                제품:result.data.product,
                제품2:result.data.product2,
                제품3:result.data.product3,
                제품4:result.data.product4,
                제품5:result.data.product5,
            })
        })
        .catch(()=>{

        })
    },[]);

    const onClickOrangetab1=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            orangeclick1:true,
            orangeclick2:false,
        })
    }

    const onClickOrangetab2=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            orangeclick1:false,
            orangeclick2:true,
        })
    }

    const onClickSlidetab1=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:true,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab2=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:true,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab3=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:true,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab4=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:true,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab5=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:true,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab6=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:true,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab7=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:true,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab8=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:true,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab9=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:true,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab10=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:true,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab11=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:true,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab12=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:true,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab13=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:true,
            changeimage14:false,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab14=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:true,
            changeimage15:false,
            changeimage16:false,
        })
    }
    const onClickSlidetab15=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:true,
            changeimage16:false,
        })
    }
    const onClickSlidetab16=(e)=>{
        e.preventDefault()
        setState({
            ...state,            
            changeimage1:false,
            changeimage2:false,
            changeimage3:false,
            changeimage4:false,
            changeimage5:false,
            changeimage6:false,
            changeimage7:false,
            changeimage8:false,
            changeimage9:false,
            changeimage10:false,
            changeimage11:false,
            changeimage12:false,
            changeimage13:false,
            changeimage14:false,
            changeimage15:false,
            changeimage16:true,
        })
    }

    const onClickRanking1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            rankingtab1:true,
            rankingtab2:false,
            rankingtab3:false,
            rankingtab4:false
        })
    }
    const onClickRanking2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            rankingtab1:false,
            rankingtab2:true,
            rankingtab3:false,
            rankingtab4:false
        })
    }
    const onClickRanking3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            rankingtab1:false,
            rankingtab2:false,
            rankingtab3:true,
            rankingtab4:false
        })
    }
    const onClickRanking4=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            rankingtab1:false,
            rankingtab2:false,
            rankingtab3:false,
            rankingtab4:true
        })
    }

    const onClickCom1=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            Conponent1:true,
            Conponent2:false,
            Conponent3:false,
            Conponent4:false,
            Conponent5:false,
        })
    }
    const onClickCom2=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            Conponent1:false,
            Conponent2:true,
            Conponent3:false,
            Conponent4:false,
            Conponent5:false,
        })
    }
    const onClickCom3=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            Conponent1:false,
            Conponent2:false,
            Conponent3:true,
            Conponent4:false,
            Conponent5:false,
        })
    }
    const onClickCom4=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            Conponent1:false,
            Conponent2:false,
            Conponent3:false,
            Conponent4:true,
            Conponent5:false,
        })
    }
    const onClickCom5=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            Conponent1:false,
            Conponent2:false,
            Conponent3:false,
            Conponent4:false,
            Conponent5:true,
        })
    }

    const onClickWord1=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:true,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord2=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:true,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord3=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:true,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord4=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:true,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord5=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:true,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord6=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:true,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord7=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:true,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord8=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:true,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord9=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:true,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord10=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:true,
            changeword11:false,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord11=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:true,
            changeword12:false,
            changeword13:false,
        })
    }
    const onClickWord12=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:true,
            changeword13:false,
        })
    }
    const onClickWord13=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            changeword1:false,
            changeword2:false,
            changeword3:false,
            changeword4:false,
            changeword5:false,
            changeword6:false,
            changeword7:false,
            changeword8:false,
            changeword9:false,
            changeword10:false,
            changeword11:false,
            changeword12:false,
            changeword13:true,
        })
    }

    const slideWrap = React.useRef();
    const WordSlide = React.useRef();
    const ComSlide = React.useRef();
        

    const mainSlide=()=>{
        slideWrap.current.style.transition = 'all 0.6s ease-in-out';
        slideWrap.current.style.transform = `translateX(${-91 * state.cnt}px)`;

        WordSlide.current.style.transition = 'all 0.6s ease-in-out';
        WordSlide.current.style.transform = `translateX(${-105 * state.cnt}px)`;
        
        ComSlide.current.style.transition = 'all 0.6s ease-in-out';
        ComSlide.current.style.transform = `translateX(${-45 * state.cnt}px)`;
    }        
    
    React.useEffect(()=>{
        mainSlide();        
    },[state.cnt]);

    const onClickNext=(e)=>{
        e.preventDefault();
        if(state.cnt>=7){
            setState({
                ...state,
                cnt: 7
            });
        }
        else {
            setState({
                ...state,
                cnt: state.cnt+1
            });
        }
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


    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item, path)=>{
        e.preventDefault();

        let obj = {
            번호: item.번호,
            이미지: `${path}/sub1/${item.이미지}`,
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

    return (
        <div id='sub1'>
            <div className="container">
                <div className="title">
                    <h2>랭킹</h2>
                    <ul>
                        <li><a href="!#" onClick={onClickRanking1} className={`ranking ${state.rankingtab1?"on":" "}`}>실시간랭킹</a></li>
                        <li><a href="!#" onClick={onClickRanking2} className={`ranking ${state.rankingtab2?"on":" "}`}>별별랭킹</a></li>
                        <li><a href="!#" onClick={onClickRanking3} className={`ranking ${state.rankingtab3?"on":" "}`}>알뜰랭킹</a></li>
                        <li><a href="!#" onClick={onClickRanking4} className={`ranking ${state.rankingtab4?"on":" "}`}>성분별랭킹</a></li>
                    </ul>
                </div>
                <div className="content">    
                    <div className={`ranking-box1 ${state.rankingtab1?"on":" "}`}>
                        <div className="tab-menu">                        
                            <div className="category-btn">
                                <button onClick={onClickPrev} className={'prev-arrow-btn'}></button>
                                <button onClick={onClickNext} className={'next-arrow-btn'}></button>
                                <ul className="slide-wrap">                          
                                    <li ref={slideWrap}>
                                        <figure onClick={onClickSlidetab1} className={`category-wrap ${state.changeimage1?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage1?'@cate_img_on2.png':'@cate_img2.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage1?"on":" "}`}>전체</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab2} className={`category-wrap ${state.changeimage2?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage2?'IMG1653qQg283311458.png':'IMG1650zcQ632647265.png'}`} alt="" />
                                            </div>
                                                <figcaption className={`fig-cap ${state.changeimage2?"on":" "}`}>신상품</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab3} className={`category-wrap ${state.changeimage3?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage3?'IMG1653nLz283340100.png':'IMG1653VVd283342203.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage3?"on":" "}`}>닭가슴살</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab4} className={`category-wrap ${state.changeimage4?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage4?'IMG1653gWd283353838.png':'IMG1653PCF283356314.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage4?"on":" "}`}>즉석 간편식</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab5} className={`category-wrap ${state.changeimage5?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage5?'IMG1653fBN283373467.png':'IMG1653act283377839.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage5?"on":" "}`}>도시락·볶음밥</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab6} className={`category-wrap ${state.changeimage6?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage6?'IMG1653XrT283389216.png':'IMG1653xsk283391582.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage6?"on":" "}`}>소고기</figcaption>
                                        </figure>                                
                                        <figure onClick={onClickSlidetab7} className={`category-wrap ${state.changeimage7?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage7?'IMG1653GXq283424968.png':'IMG1653PnV283427245.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage7?"on":" "}`}>샐러드·과일</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab8} className={`category-wrap ${state.changeimage8?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage8?'IMG1653sBb283441856.png':'IMG1653viW283444286.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage8?"on":" "}`}>베이커리·치즈</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab9} className={`category-wrap ${state.changeimage9?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage9?'IMG1653IPY283469540.png':'IMG1653xeH283472030.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage9?"on":" "}`}>과자·간식·떡</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab10} className={`category-wrap ${state.changeimage10?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage10?'IMG1653vpf283489324.png':'IMG1653WGF283491982.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage10?"on":" "}`}>음료·차·프로틴</figcaption>
                                        </figure>                                
                                        <figure onClick={onClickSlidetab11} className={`category-wrap ${state.changeimage11?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage11?'IMG1653fgf283502050.png':'IMG1653SFK283505070.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage11?"on":" "}`}>계란·난백·콩</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab12} className={`category-wrap ${state.changeimage12?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage12?'IMG1653YSj283560696.png':'IMG1653hlQ283563458.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage12?"on":" "}`}>수산·해산</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab13} className={`category-wrap ${state.changeimage13?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage13?'IMG1653kWm283517335.png':'IMG1653yeh283520716.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage13?"on":" "}`}>견과·고구마·감자</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab14} className={`category-wrap ${state.changeimage14?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage14?'IMG1653VVZ283547441.png':'IMG1653Yqa283550096.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage14?"on":" "}`}>건강식품</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab15} className={`category-wrap ${state.changeimage15?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage15?'IMG1653DGq283530507.png':'IMG1653bYN283534183.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage15?"on":" "}`}>반찬·밀키트·안주</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab16} className={`category-wrap ${state.changeimage16?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage16?'IMG1653cgG283574423.png':'IMG1653cTE283577891.png'}`} alt="" />
                                            </div>                                
                                            <figcaption className={`fig-cap ${state.changeimage16?"on":" "}`}>소스·오일</figcaption>
                                        </figure>                                
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ranking-tab">
                            <h2>오늘의 전체 랭킹 순위!</h2>
                            <ul>
                                <li onClick={onClickOrangetab1}><a href="!#" className={`change-tab ${state.orangeclick1?"on":" "}`}>실시간</a></li>
                                <li onClick={onClickOrangetab2}><a href="!#" className={`change-tab ${state.orangeclick2?"on":" "}`}>판매량</a></li>
                            </ul>
                        </div>                    
                            <ul>
                                {
                                    state.rankingtab1 && (
                                    <li>                                    
                                    <div className="product-list">
                                        <ul>
                                            {
                                                state.제품.map((item, idx)=>{
                                                    return (
                                                            <li className={`list list${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                                <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                                                <a href="!#">
                                                                    <p>{item.제품명}</p>
                                                                    <div className="score">
                                                                        <span className='star'><img src="./images/sub/sub1/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span className='coment'>{item.댓글수}</span>
                                                                    </div>                                                                                                                                
                                                                    <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                                    <h3>{item.적립}</h3>
                                                                    <h4><img src={`./images/sub/sub1/${item.배송}`} alt="" /></h4>
                                                                    <button className='cart'><img src="./images/sub/sub1/ico-single-cart-darkgray.png" alt="" /></button>
                                                                    <i>|</i>
                                                                    <button className='love'>♡</button>
                                                                </a>
                                                            </li>
                                                    )
                                                })                                            
                                            }
                                        </ul>
                                    </div>
                                    </li>   
                                    )
                                }                                                                                           
                            </ul>
                    </div>
                    <div className={`ranking-box2 ${state.rankingtab2?"on":" "}`}>                                                                                    
                            <ul>
                                {
                                    state.rankingtab2 && (
                                    <li>                                    
                                    <div className="product-list">
                                        <ul>
                                            {
                                                state.제품2.map((item, idx)=>{
                                                    return (
                                                        <li className={`list list${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />                                                            
                                                            <p><img src="./images/sub/sub1/ico-medal.png" alt="" />{item.제품명}<i>＞</i></p>

                                                        </li>
                                                    )
                                                })                                            
                                            }
                                        </ul>
                                    </div>
                                    <div className="page-wrap">
                                        <div className="page-number">
                                            <div className="page">
                                                <a href="!#">＜</a>
                                                <a href="!#">1</a>
                                                <a href="!#">2</a>
                                                <a href="!#">3</a>
                                                <a href="!#">4</a>
                                                <a href="!#">5</a>
                                                <a href="!#">6</a>
                                                <a href="!#">7</a>
                                                <a href="!#">8</a>
                                                <a href="!#">9</a>
                                                <a href="!#">＞</a>
                                            </div>
                                        </div>
                                    </div>
                                    </li>
                                    )
                                }                                                            
                            </ul>
                    </div>
                    <div className={`ranking-box3 ${state.rankingtab3?"on":" "}`}>
                        <div className="tab-menu">                        
                            <div className="category-btn">
                                <button onClick={onClickPrev} className={'prev-arrow-btn'}></button>
                                <button onClick={onClickNext} className={'next-arrow-btn'}></button>
                                <ul className="slide-wrap">                          
                                    <li ref={WordSlide}>
                                        <figure onClick={onClickWord1} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword1?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword1?"on":" "}`}>스테이크/훈제</span>                                                
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord2} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword2?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword2?"on":" "}`}>소시지/볼.큐브</span>                                                
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord3} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword3?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword3?"on":" "}`}>수비드/스팀</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord4} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword4?"on":" "}`}>                                            
                                                <span className={`fig-cap ${state.changeword4?"on":" "}`}>슬라이스/소스</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord5} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword5?"on":" "}`}>                                            
                                                <span className={`fig-cap ${state.changeword5?"on":" "}`}>도시락</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord6} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword6?"on":" "}`}>                                            
                                                <span className={`fig-cap ${state.changeword6?"on":" "}`}>볶음밥/주먹밥</span>
                                            </div>
                                        </figure>                                
                                        <figure onClick={onClickWord7} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword7?"on":" "}`}>                                            
                                                <span className={`fig-cap ${state.changeword7?"on":" "}`}>간편식</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord8} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword8?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword8?"on":" "}`}>소고기/수산</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord9} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword9?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword9?"on":" "}`}>계란/난백/콩</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord10} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword10?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword10?"on":" "}`}>견과/고구마/감자</span>
                                            </div>
                                        </figure>                                
                                        <figure onClick={onClickWord11} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword11?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword11?"on":" "}`}>베이커리/치즈</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord12} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword12?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword12?"on":" "}`}>반찬/밀키트/안주</span>
                                            </div>
                                        </figure>
                                        <figure onClick={onClickWord13} className="category-wrap">
                                            <div className={`img-wrap ${state.changeword13?"on":" "}`}>
                                                <span className={`fig-cap ${state.changeword13?"on":" "}`}>소스/음료</span>
                                            </div>
                                        </figure>                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ranking-tab">
                            <h2>1팩당 최저가 제품은?</h2>
                            <span>?알뜰킹은 각 브랜드의 1팩의 최저가 제품을 기준으로 선정됩니다.</span>
                        </div>
                        <ul>
                        {
                            state.rankingtab3 && (
                                <li>                                    
                                {
                                state.제품3.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                                        </div>                                        
                                                    </a>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="top">
                                                        <em className='delivery-box'>
                                                            { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                            { item.배송종류==="무료배송" && <em className='free'></em> }
                                                        </em>
                                                        <div className="score">
                                                            <span><img src="./images/sub/sub1/ico_star.png" alt="" />{item.별점}</span>
                                                            <span>{item.댓글수}</span>
                                                        </div>
                                                    </div>
                                                    <div className="middle">
                                                        <a href="!#">{item.제품명}</a>
                                                    </div>
                                                    <div className="bottom">
                                                        <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                        <p>{item.개별가격}</p>
                                                        <div className="badge-box">
                                                            { item.신상품 && <img className='new' src="./images/sub/sub1/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub1/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub1/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub1/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub1/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub1/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                                </li>
                                )
                            }
                        </ul>                        
                    </div>
                    <div className={`ranking-box4 ${state.rankingtab4?"on":" "}`}>
                        <div className="tab-menu">                        
                            <div className="flug-tab">
                                <ul className='flug-wrap'>
                                    <li onClick={onClickCom1} className={`flug-box ${state.Conponent1?"on":" "}`}><a href="!#"><span className={`flug ${state.Conponent1?"on":" "}`}>단백질</span></a></li>
                                    <li onClick={onClickCom2} className={`flug-box ${state.Conponent2?"on":" "}`}><a href="!#"><span className={`flug ${state.Conponent2?"on":" "}`}>칼로리</span></a></li>
                                    <li onClick={onClickCom3} className={`flug-box ${state.Conponent3?"on":" "}`}><a href="!#"><span className={`flug ${state.Conponent3?"on":" "}`}>나트륨</span></a></li>
                                    <li onClick={onClickCom4} className={`flug-box ${state.Conponent4?"on":" "}`}><a href="!#"><span className={`flug ${state.Conponent4?"on":" "}`}>지방</span></a></li>
                                    <li onClick={onClickCom5} className={`flug-box ${state.Conponent5?"on":" "}`}><a href="!#"><span className={`flug ${state.Conponent5?"on":" "}`}>탄수화물</span></a></li>
                                </ul>
                            </div>
                            <div className="category-btn">
                                <button onClick={onClickPrev} className={'prev-arrow-btn'}></button>
                                <button onClick={onClickNext} className={'next-arrow-btn'}></button>
                                <ul className="slide-wrap">                          
                                    <li ref={ComSlide}>
                                        <figure onClick={onClickSlidetab1} className={`category-wrap ${state.changeimage1?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage1?'IMG1653dsF284753685.png':'IMG1653APN284756262.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage1?"on":" "}`}>스테이크/훈제</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab2} className={`category-wrap ${state.changeimage2?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage2?'IMG1653wsH284776648.png':'IMG1653JFP284779531.png'}`} alt="" />
                                            </div>
                                                <figcaption className={`fig-cap ${state.changeimage2?"on":" "}`}>소시지/볼.큐브</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab3} className={`category-wrap ${state.changeimage3?"on":" "}`}>
                                            <div className="img-wrap">
                                                <img src={`./images/sub/sub1/${state.changeimage3?'IMG1653iJy284800823.png':'IMG1653SFM284803578.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage3?"on":" "}`}>수비드/스팀</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab4} className={`category-wrap ${state.changeimage4?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage4?'IMG1657CPu504768377.png':'IMG1657pem504771265.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage4?"on":" "}`}>슬라이스/소스</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab5} className={`category-wrap ${state.changeimage5?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage5?'IMG1653fBN283373467.png':'IMG1653mJY284817630.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage5?"on":" "}`}>도시락</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab6} className={`category-wrap ${state.changeimage6?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage6?'IMG1657zqj505054105.png':'IMG1657KFN505057246.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage6?"on":" "}`}>볶음밥/주먹밥</figcaption>
                                        </figure>                                
                                        <figure onClick={onClickSlidetab7} className={`category-wrap ${state.changeimage7?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage7?'IMG1653sBb283441856.png':'IMG1653viW283444286.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage7?"on":" "}`}>간편식</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab8} className={`category-wrap ${state.changeimage8?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage8?'IMG1653Wis284829289.png':'IMG1653CVq284831945.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage8?"on":" "}`}>소고기/수산</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab9} className={`category-wrap ${state.changeimage9?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage9?'IMG1653fgf283502050.png':'IMG1653SFK283505070.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage9?"on":" "}`}>계란/난백/콩</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab10} className={`category-wrap ${state.changeimage10?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage10?'IMG1653kWm283517335.png':'IMG1653yeh283520716.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage10?"on":" "}`}>견과/고구마/감자</figcaption>
                                        </figure>                                
                                        <figure onClick={onClickSlidetab11} className={`category-wrap ${state.changeimage11?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage11?'IMG1653sBb283441856.png':'IMG1653viW283444286.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage11?"on":" "}`}>베이커리/치즈</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab12} className={`category-wrap ${state.changeimage12?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage12?'IMG1653DGq283530507.png':'IMG1653bYN283534183.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage12?"on":" "}`}>반찬/밀키트/안주</figcaption>
                                        </figure>
                                        <figure onClick={onClickSlidetab13} className={`category-wrap ${state.changeimage13?"on":" "}`}>
                                            <div className="img-wrap">
                                            <img src={`./images/sub/sub1/${state.changeimage13?'IMG1653vpf283489324.png':'IMG1653WGF283491982.png'}`} alt="" />
                                            </div>
                                            <figcaption className={`fig-cap ${state.changeimage13?"on":" "}`}>소스/음료</figcaption>
                                        </figure>                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ranking-tab">
                            <h2>영양별 최고를 골라먹자!</h2>
                            <span>?성분별 1팩당 제품순위를 노출합니다.</span>
                        </div>
                        <ul>
                        {
                            state.rankingtab4 && (
                                <li>                                    
                                {
                                state.제품4.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                                        </div>                                        
                                                    </a>
                                                </div>
                                                <div className="product-caption">
                                                    <div className="top">
                                                        <em className='delivery-box'>
                                                            { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                            { item.배송종류==="무료배송" && <em className='free'></em> }
                                                        </em>
                                                        <div className="score">
                                                            <span><img src="./images/sub/sub1/ico_star.png" alt="" />{item.별점}</span>
                                                            <span>{item.댓글수}</span>
                                                        </div>
                                                    </div>
                                                    <div className="middle">
                                                        <a href="!#">{item.제품명}</a>
                                                    </div>
                                                    <div className="bottom">
                                                        <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                        <p>{item.개별가격}</p>
                                                        <div className="badge-box">
                                                            { item.신상품 && <img className='new' src="./images/sub/sub1/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub1/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub1/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub1/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub1/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub1/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                                </li>
                                )
                            }
                        </ul>                        
                    </div>
                </div>                
            </div>
        </div>
    );
};
