import React from 'react';
import "./scss/section4.scss";
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';

export default function Section4ComponentChild({product, n, timeSale}){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({

        cnt: 0,
        product: [],
        isRandom: false,

        toggle: 0,

    });

    const [ count, setCount ] = React.useState({
        D: 0,
        H: 0,
        M: 0,
        S: 0,
        setId: 0,
    })
    


    const refSlideWrap = React.useRef(<ul></ul>);

    React.useEffect(()=>{
        refSlideWrap.current.style.width = `${380 * n}px`;
    },[n]);

    const mainSlide=()=>{
        refSlideWrap.current.style.transition = "all 0.3s ease-in-out";
        refSlideWrap.current.style.left = `${-760 * state.cnt}px`;
        if(state.cnt!==0){
            returnSlide();
        }
    }

   

    const returnSlide=()=>{
        if(state.cnt>n/2-1){
            setState({
                ...state,
                cnt: 0,
                toggle: 1
            })
            refSlideWrap.current.style.transition = "all 0.3s ease-in-out";
            refSlideWrap.current.style.left  = `${-380 * 0}px`
        }
        else if(state.cnt<0){
            setState({
                ...state,
                cnt: n-1,
                toggle: 1
            })
            refSlideWrap.current.style.transition = `none`;
            refSlideWrap.current.style.left = `${-380 * n}px`
        }
    }

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

        if(state.cnt>=(n/2)-1){
            setState({
                ...state,
                cnt: (n/2)-1
            })
        }
        else {
            setState({
                ...state,
                cnt: state.cnt+1
            })
        }
    }

    React.useEffect(()=>{
        if (timeSale.timeSale){ // NaN (오류) 뜨는걸 방지
            
            const setId = setInterval(()=>{
            let start = new Date(timeSale.timeSaleStart); // 시작일
            let time = timeSale.timeSaleSet; // 시간 타이머 (48시간)
            let now = new Date();
            start.setHours(start.getHours()+time); 
    
            // console.log(start);
    
            let D = 0;
            let H = 0;
            let M = 0;
            let S = 0;
    
            let count = start - now; // 타임세일 끝나는 시간 - 현재 
    
            if(now>=start){
                clearInterval(setId);
                D = 0;
                H = 0;
                M = 0;
                S = 0;
            }
            else {
                D = Math.floor(count/(24*60*60*1000));
                H = Math.floor(count/(60*60*1000)) % time;
                M = Math.floor(count/(60*1000)) % 60;
                S = Math.floor(count/(1000)) % 60;
    
            }
    
            setCount({
                ...count,
                D: D,
                H: H < 10 ? `0${H}` : H,
                M: M < 10 ? `0${M}` : M,
                S: S < 10 ? `0${S}` : S,
              })
                },1000)
            }
    },[timeSale]);

    React.useEffect(()=>{
        mainSlide();
    },[state.cnt])

    React.useEffect(()=>{

        if(state.toggle===0){
            mainSlide();
        }
        else {
            setState({
                ...state,
                toggle: 0
            })
            setTimeout(()=>{
                mainSlide();
            },100)
        }

        // 슬라이드 동작 타이머
        let slideTime = 0;
        slideTime = setInterval(()=>{
            setState({
                ...state,
                cnt: state.cnt+1
            })
        },3000)
        return() => clearInterval(slideTime);

    },[state.cnt])




    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item,path)=>{
        e.preventDefault();

        let obj = {
            번호: item.번호,
            이미지: `${path}section4/${item.이미지}`,
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
        <div className="container">
                <div className="title">
                    <span>
                        <strong><i><img src="./images/intro/section4/ico_timesale_title.png" alt="" /></i>지금 이순간</strong>
                    </span>
                    <span>
                        <strong>깜짝 타임세일!</strong> 
                    </span>
                    <p>오늘이 가면 없을 기회, 놓치지 마세요.</p>

                </div>
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul ref={refSlideWrap} className="slide-wrap" >
                                {
                                   product.item.length > 0 && 
                                    (
                                        product.item.map((item,idx)=>{
                                            return(
                                                <li className={`slide slide${idx+1}`} key={item.번호}>
                                                    <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')}>
                                                        <div className="img-box">
                                                            <a href="!#">
                                                                <div className="main-img"><img src={`./images/intro/section4/${item.이미지}`} alt="" /></div>
                                                                <div className="main-sticker">
                                                                    { item.M정기배송 && <img className="sticker main-sticker-delivery" src='./images/intro/section4/IMG1681XzJ889805863.png' alt="" />}
                                                                    { item.M프로 && <img className="sticker main-sticker-pro" src='./images/intro/section4/IMG1684oyb914888391.png' alt="" />}
                                                                    { item.M단독상품 && <img className="sticker main-sticker-onlyone" src='./images/intro/section4/IMG1681Vpe889708160.png' alt="" />}
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='time-sale-box'>
                                                            <img src="./images/intro/section4/ico_timesale.png" alt="" />

                                                            <strong>{count.D}일</strong>
                                                            <em>{count.H}</em>
                                                            <i>:</i>
                                                            <em>{count.M}</em>
                                                            <i>:</i>
                                                            <em>{count.S}</em>
                                                            
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
                                                                { item.S신상품 && <i className='new'><img src="./images/intro/section4/IMG1681Neg889936366.png" alt="" /></i>}
                                                                { item.S추가증정 && <i className='add-pre'><img src="./images/intro/section4/IMG1681RXW889944088.png" alt="" /></i>}
                                                                { item.S추가적립 && <i className='add-point'><img src="./images/intro/section4/IMG1681Mbe889953022.png" alt="" /></i>}
                                                                { item.SRACE && <i className='race'><img src="./images/intro/section4/IMG1687Txz850332633.png" alt="" /></i>}
                                                            </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    )
                                }
                                

                            </ul>
                        </div>
                        <div className="prev-allow-btn-box">
                            <button className={`prev-allow-btn${state.cnt===0 ? ' on' : ''}`} onClick={onClickPrevBtn}></button>
                        </div>
                        <div className="next-allow-btn-box">
                            <button className={`next-allow-btn${state.cnt===(n/2)-1 ? ' on' : ''}`} onClick={onClickNextBtn}></button>
                        </div>
                    </div>
                </div>
            </div>
    );
};