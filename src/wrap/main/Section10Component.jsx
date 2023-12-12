import React from 'react';
import axios from 'axios';
import './scss/section10.scss'
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';

export default function Section10Component(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const slideWrap = React.useRef();

    const [cnt,setCnt] = React.useState(0);
    
    const [state,setState] = React.useState({
        타이틀:'',
        슬라이드:[],
        n:0
    });
    
    React.useEffect(()=>{
        let folderName = 'section10';
        axios({
            url:`data/intro/${folderName}.json`,
            method:'GET'
        })
        .then((result)=>{
            setState({
                ...state,
                타이틀:result.data.title,
                슬라이드:result.data.slide,
                n:result.data.slide.length
            })
        })
        .catch(()=>{

        })
    },[])

    React.useEffect(()=>{
        let n = state.n;
        slideWrap.current.style.width = `${380*n}px`;
    },[state.n])

    const mainSlide=()=>{
        slideWrap.current.style.transition = `all 0.3s ease-in-out`;
        slideWrap.current.style.left= `${-1140*cnt}px`;
    }

    const slide=()=>{
        slideWrap.current.style.transition = `all 0.3s ease-in-out`;
        slideWrap.current.style.left= `${-760*cnt}px`;
    }


    React.useEffect(()=>{
        if(cnt===2){
            slide();
        }
        else{
            mainSlide();
        }
    },[cnt]);

    

    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt=>cnt-1);
    }

    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt=>cnt+1);
    }
    

    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item, path)=>{
        e.preventDefault();

        let obj = {
            번호: item.번호,
            이미지: `${path}/section10/${item.이미지}`,
            제품명: item.부가설명,
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

        <div id='section10'>
            <div className="container">
                <div className="title">
                    <h2>{state.타이틀}</h2>
                </div>
                <div className="content">
                    <ul className='slide-wrap' ref={slideWrap}>
                        {
                            state.슬라이드.map((item,idx)=>{
                                return (
                                    <li className={`list list${idx+1}`} key={item.번호}>
                                        <div className="package-list">
                                            <img src={`./images/intro/section10/${item.이미지}`} alt=""  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} />
                                            <strong>{item.부가설명}</strong>
                                        </div>
                                    </li>
                                )
                            })
                            
                        }
                    </ul>
                    <button 
                        className={`prev-btn${cnt<1?' on':''}`} 
                        onClick={onClickPrev} 
                        disabled={cnt<=0?'off':''}
                    >
                        <i className="material-icons">navigate_next</i>
                    </button>
                    <button 
                        className={`next-btn${cnt>1?' on':''}`} 
                        onClick={onClickNext}  
                        disabled={cnt>1?'off':''}
                    >
                        <i className="material-icons">navigate_next</i>
                    </button>
                </div>
            </div>
        </div>
    );
};
