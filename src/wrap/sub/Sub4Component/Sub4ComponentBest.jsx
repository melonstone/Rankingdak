import React from 'react';
import '../scss/sub4.scss';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../../reducer/viewproduct';
import { viewProductIsFlag } from '../../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../../reducer/quickMenuViewProduct';

export default function Sub4ComponentBest({bestProduct}){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    
    // 컨테이너 지정변수
    const refContainer = React.useRef();


    // 상태관리변수
    const [state, setState] = React.useState({
        cnt: 0,
        con1: true,
        con2: false
    })
    

    // 베스트상품 이동 메서드
    const mainSlide=()=>{
        refContainer.current.style.transition = 'all 0.5s ease-in-out';
        refContainer.current.style.transform = `translateX(${-998 * state.cnt}px)`;
    }


    // 베스트상품 이동버튼
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

    // 베스트상품 동그라미버튼
    const onClickControlBtn=(e, n)=>{
        e.preventDefault();

        if(n===0){
            setState({
                ...state,
                cnt: 0
            });
        }
        else if(n===1){
            setState({
                ...state,
                cnt: 1
            });
        }
    }


    // cnt변수에 반응하는 유즈이펙트
    React.useEffect(()=>{        
        mainSlide();
        if(state.cnt===0){
            setState({
                ...state,
                con1: true,
                con2: false
            })
        }
        else if(state.cnt===1){
            setState({
                ...state,
                con1: false,
                con2: true
            })
        }
    },[state.cnt]);


    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item,path)=>{
        e.preventDefault();
        // console.log(item.이미지);
        let obj = {
            번호: item.번호,
            이미지: `${path}/sub4/${item.이미지}`,
            제품명: item.제품명,
            판매가: item.가격,
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
        <div className="best-product">
                    <div className="title">
                        <h2>베스트 상품</h2>
                        <div className="controller">
                            <button onClick={(e)=>onClickControlBtn(e, 0)} className={state.con1===true? 'on' : ''}></button>
                            <button onClick={(e)=>onClickControlBtn(e, 1)} className={state.con2===true? 'on' : ''}></button>
                        </div>
                    </div>
                    <div className="best-box">
                        <ul ref={refContainer} className="best-container">
                            {
                                bestProduct.map((item, idx)=>{
                                    return (
                                        <li className={`product product${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                            <div className="img-box">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="caption">
                                                <div className="row1">
                                                    <div className="delivery-box">
                                                        <em className="fast"></em>
                                                    </div>
                                                    <div className="rating">
                                                        <span className="score">{item.별점}</span>
                                                        <span className="total-num">{item.댓글수}</span>
                                                    </div>
                                                </div>
                                                <div className="row2">
                                                    <a href="!#">{item.제품명}</a>
                                                </div>
                                                <div className="row3">
                                                    <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                                </div>
                                                <div className="badge-box">
                                                    { item.RACE && <img className='race' src="./images/intro/section7/race.png" alt="" />}
                                                </div>
                                                <button className="cart-btn"></button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button onClick={onClickLeftArrow} className="left-arrow">
                            <i className="material-icons">keyboard_arrow_left</i>
                        </button>
                        <button onClick={onClickRightArrow} className="right-arrow">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </div>
    );
};
