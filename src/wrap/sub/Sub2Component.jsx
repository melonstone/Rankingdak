import React from 'react';
import './scss/sub2.scss';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';

export default function Sub2Component(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    
    const [state, setState] = React.useState({
        product1: [],
        product2: [],
        product3: [],
        product4: [],
        product5: [],
        product6: [],
        product7: [],
        product8: [],
        product9: [],
        product10: []
    });
    
    const onClickTabMenu1=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:100
        })
    }
    const onClickTabMenu2=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:2000
        })
    }
    const onClickTabMenu3=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:3600
        })
    }
    const onClickTabMenu4=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:6000
        })
    }
    const onClickTabMenu5=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:8000
        })
    }
    const onClickTabMenu6=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:9100
        })
    }
    const onClickTabMenu7=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:10200
        })
    }
    const onClickTabMenu8=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:11300
        })
    }    
    

    React.useEffect(()=>{

        axios({
            url: './data/sub/sub2.json',
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                product1: res.data.product1,
                product2: res.data.product2,
                product3: res.data.product3,
                product4: res.data.product4,
                product5: res.data.product5,
                product6: res.data.product6,
                product7: res.data.product7,
                product8: res.data.product8
            });
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])


    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item, path)=>{
        e.preventDefault();

        let obj = {
            번호: item.번호,
            이미지: `${path}/sub2/${item.이미지}`,
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
        <section id="sub2" className="section">
            <div className="container">
                <div className="content">
                    <ul>
                        <li onClick={onClickTabMenu1}><a href="!#"><span>12월의 특별한 덤 혜택🎄</span></a></li>
                        <li onClick={onClickTabMenu2}><a href="!#"><span>랭킹닭컴 연말결산🏆</span></a></li>
                        <li onClick={onClickTabMenu3}><a href="!#"><span>랭킹닭컴 중화반점🍜</span></a></li>
                        <li onClick={onClickTabMenu4}><a href="!#"><span>12월의 할인&증정</span></a></li>
                        <li onClick={onClickTabMenu5}><a href="!#"><span>필요할 때 언제든 특급배송</span></a></li>
                        <li onClick={onClickTabMenu6}><a href="!#"><span>맛도 육즙도 통! 닭가슴살</span></a></li>
                        <li onClick={onClickTabMenu7}><a href="!#"><span>지갑 지켜주는 갓성비템💸</span></a></li>
                        <li onClick={onClickTabMenu8}><a href="!#"><span>몸을 위한 단백한 선택🥛</span></a></li>
                    </ul>
                </div>
                <div className="frame-sm">                    
                    <div className="category-box box1">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701WCy307864463.jpg" alt="" /></a>
                        </div>
                        <ul className="product-box">
                            {
                                state.product1.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="category-box box2">
                        <div className="banner-img">
                                <a href="!#"><img src="./images/sub/sub2/IMG1701igW317614414.jpg" alt="" /></a>
                        </div>
                        <ul className="product-box">
                            {
                                state.product2.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="category-box box3">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701MED395206583.jpg" alt="" /></a>
                        </div>                    
                        <ul className="product-box">
                            {
                                state.product3.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>                        
                    </div>
                    <div className="category-box box4">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701PPM318004886.jpg" alt="" /></a>
                        </div>                    
                        <ul className="product-box">
                            {
                                state.product4.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="category-box box5">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701JXX317877942.jpg" alt="" /></a>
                        </div>
                        <ul className="product-box">
                            {
                                state.product5.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="category-box box6">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701qSH318193347.jpg" alt="" /></a>
                        </div>
                        <ul className="product-box">
                            {
                                state.product6.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="category-box box7">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701prb318357788.jpg" alt="" /></a>
                        </div>
                        <ul className="product-box">
                            {
                                state.product7.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="category-box box8">
                        <div className="banner-img">
                            <a href="!#"><img src="./images/sub/sub2/IMG1701CXr318658660.jpg" alt="" /></a>
                        </div>                        
                        <ul className="product-box">
                            {
                                state.product8.map((item, idx)=>{
                                    return (
                                        <li className={`product-list list${idx+1}`} key={item.번호}>
                                            <div className="gap" onClick={(e)=>onClickViewProduct(e,item,'./images/sub/')}>
                                                <div className="product-img">
                                                    <a href="!#">
                                                        <div className="image">
                                                            <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
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
                                                            <span><img src="./images/sub/sub2/ico_star.png" alt="" />{item.별점}</span>
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
                                                            { item.신상품 && <img className='new' src="./images/sub/sub2/new.png" alt="" /> }
                                                            { item.추가적립 && <img className='add' src="./images/sub/sub2/add_point.png" alt="" /> }
                                                            { item.추가증정 && <img className='add' src="./images/sub/sub2/more.png" alt="" /> }
                                                            { item.RACE && <img className='race' src="./images/sub/sub2/race.png"   alt="" /> }
                                                            { item.MD추천 && <img className='add' src="./images/sub/sub2/md.png" alt="" /> }
                                                            { item.오렌지할인 && <img className='add' src="./images/sub/sub2/orange.png" alt="" /> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};