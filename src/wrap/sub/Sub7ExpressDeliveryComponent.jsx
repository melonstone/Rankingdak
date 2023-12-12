import React from 'react';
import './scss/sub7.scss';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';

export default function Sub7ExpressDeliveryComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [state,setState] = React.useState({
        isClose:false,
        isList1:true,
        isList2:false,
        isList3:false,
        isList4:false,
        isList5:false,
        isList6:false,
        isList7:false,
        isList8:false,
        isList9:false,
        isList10:false,
        isList11:false,
        isList12:false,
        isList13:false,
        제품1:[],
        제품2:[],
        제품3:[],
        제품4:[],
        제품5:[],
        제품6:[],
        제품7:[],
        제품8:[],
        제품9:[],
        제품10:[],
        제품11:[],
        제품12:[],
        제품13:[],
        이미지경로:''
    })


    

    React.useEffect(()=>{

        let fileName = `sub7`

        axios({
            url:`./data/sub/${fileName}.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                이미지경로: fileName,
                제품1 : res.data.product1,
                제품2 : res.data.product2,
                제품3 : res.data.product3,
                제품4 : res.data.product4,
                제품5 : res.data.product5,
                제품6 : res.data.product6,
                제품7 : res.data.product7,
                제품8 : res.data.product8,
                제품9 : res.data.product9,
                제품10 : res.data.product10,
                제품11 : res.data.product11,
                제품12 : res.data.product12,
                제품13 : res.data.product13
                
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    },[]);

    const onClickClose=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isClose:!state.isClose
        })
        return;
    }

    const onClickList=(e,n)=>{
        e.preventDefault();
        let isList1 = true;
        let isList2 = false;
        let isList3 = false;
        let isList4 = false;
        let isList5 = false;
        let isList6 = false;
        let isList7 = false;
        let isList8 = false;
        let isList9 = false;
        let isList10 = false;
        let isList11 = false;
        let isList12 = false;
        let isList13 = false;
        if(n===1){
            isList1=true;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===2){
            isList1=false;
            isList2 = true;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===3){
            isList1=false;
            isList2 = false;
            isList3 = true;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===4){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = true;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===5){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = true;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===6){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = true;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===7){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = true;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===8){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = true;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===9){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = true;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===10){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = true;
            isList11 = false;
            isList12 = false;
            isList13 = false;
        }
        else if(n===11){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = true;
            isList12 = false;
            isList13 = false;
        }
        else if(n===12){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = true;
            isList13 = false;
        }
        else if(n===13){
            isList1=false;
            isList2 = false;
            isList3 = false;
            isList4 = false;
            isList5 = false;
            isList6 = false;
            isList7 = false;
            isList8 = false;
            isList9 = false;
            isList10 = false;
            isList11 = false;
            isList12 = false;
            isList13 = true;
        }
        setState({
            ...state,
            isList1:isList1,
            isList2:isList2,
            isList3:isList3,
            isList4:isList4,
            isList5:isList5,
            isList6:isList6,
            isList7:isList7,
            isList8:isList8,
            isList9:isList9,
            isList10:isList10,
            isList11:isList11,
            isList12:isList12,
            isList13:isList13
        })
    }


    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item,path)=>{
        e.preventDefault();
        // console.log(item.이미지);
        let obj = {
            번호: item.번호,
            이미지: `${path}/sub7/category1/${item.이미지}`,
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
        <div id='sub7'>
            <div className="container">
                <div className="category">
                    <div className="title">
                        <h2>특급배송</h2>
                    </div>
                    <ul className='category-list'>
                        <li className={`category1${state.isClose?' on':''}`} onClick={onClickClose}><a href="!#"><strong>카테고리</strong><i className="material-icons">keyboard_arrow_up</i></a></li>
                        <li className={`category2 list1${state.isList1?' on':''}`} onClick={(e)=>onClickList(e,1)}><a href="!#"><i>-</i><span>1팩담기</span></a></li>
                        <li className={`category2 list2${state.isList2?' on':''}`} onClick={(e)=>onClickList(e,2)}><a href="!#"><i>-</i><span>전제품</span></a></li>
                        <li className={`category2 list3${state.isList3?' on':''}`} onClick={(e)=>onClickList(e,3)}><a href="!#"><i>-</i><span>스테이크</span></a></li>
                        <li className={`category2 list4${state.isList4?' on':''}`} onClick={(e)=>onClickList(e,4)}><a href="!#"><i>-</i><span>훈제/프로틴</span></a></li>
                        <li className={`category2 list5${state.isList5?' on':''}`} onClick={(e)=>onClickList(e,5)}><a href="!#"><i>-</i><span>소시지/햄</span></a></li>
                        <li className={`category2 list6${state.isList6?' on':''}`} onClick={(e)=>onClickList(e,6)}><a href="!#"><i>-</i><span>볼/큐브</span></a></li>
                        <li className={`category2 list7${state.isList7?' on':''}`} onClick={(e)=>onClickList(e,7)}><a href="!#"><i>-</i><span>소프트/수비드</span></a></li>
                        <li className={`category2 list8${state.isList8?' on':''}`} onClick={(e)=>onClickList(e,8)}><a href="!#"><i>-</i><span>슬라이스/소스</span></a></li>
                        <li className={`category2 list9${state.isList9?' on':''}`} onClick={(e)=>onClickList(e,9)}><a href="!#"><i>-</i><span>도시락/볶음밥</span></a></li>
                        <li className={`category2 list10${state.isList10?' on':''}`} onClick={(e)=>onClickList(e,10)}><a href="!#"><i>-</i><span>즉석/간편식</span></a></li>
                        <li className={`category2 list11${state.isList11?' on':''}`} onClick={(e)=>onClickList(e,11)}><a href="!#"><i>-</i><span>맛보기/패키지</span></a></li>
                        <li className={`category2 list12${state.isList12?' on':''}`} onClick={(e)=>onClickList(e,12)}><a href="!#"><i>-</i><span>건강반찬</span></a></li>
                        <li className={`category2 list13${state.isList13?' on':''}`} onClick={(e)=>onClickList(e,13)}><a href="!#"><i>-</i><span>육류/수산</span></a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="main-img">
                        <img src="./images/sub/sub7/IMG1692CTH922492191.jpg" alt="" />
                    </div>
                    <div className="sub-title">
                        {state.isList1 && <span>1팩담기</span>}
                        {state.isList2 && <span>전제품</span>}
                        {state.isList3 && <span>스테이크</span>}
                        {state.isList4 && <span>훈제/프로틴</span>}
                        {state.isList5 && <span>소시지/햄</span>}
                        {state.isList6 && <span>볼/큐브</span>}
                        {state.isList7 && <span>소프트/수비드</span>}
                        {state.isList8 && <span>슬라이스/소스</span>}
                        {state.isList9 && <span>도시락/볶음밥</span>}
                        {state.isList10 && <span>즉석/간편식</span>}
                        {state.isList11 && <span>맛보기/패키지</span>}
                        {state.isList12 && <span>건강반찬</span>}
                        {state.isList13 && <span>육류/수산</span>}
                    </div>
                    <div className="menu">
                        <div className="total">
                            <p><span>총 156개</span> 상품이 있습니다</p>
                        </div>
                        <ul>
                            <li><a href="!#">추천순</a></li>
                            <i>|</i>
                            <li><a href="!#">신상품순</a></li>
                            <i>|</i>
                            <li><a href="!#">판매량순</a></li>
                            <i>|</i>
                            <li><a href="!#">낮은가격순</a></li>
                            <i>|</i>
                            <li><a href="!#">높은가격순</a></li>
                        </ul>
                    </div>
                    <ul className='product-list'>
                        {
                            state.isList1 && (
                                state.제품1.map((item,idx)=>{
                                    return (
                                        <li key={idx}>
                                        <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                            <a href="!#">
                                                <div className="product-img">
                                                    <img src={`./images/sub/sub7/category1/${item.이미지}`} alt="" />
                                                    <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                                </div>
                                            </a>
                                            <div className="bottom">
                                                <div className="row row1">
                                                    <div className="icon-img">
                                                        <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                    </div>
                                                    <div className="preview">
                                                        <i className="fa fa-star"></i>
                                                        <span>{item.평점}</span>
                                                        <p>({item.리뷰})</p>
                                                    </div>
                                                </div>
                                                <div className="row row2">
                                                    <h2>{item.상품명}</h2>
                                                </div>
                                                <div className="row row3">
                                                    <div className="left">
                                                        <div className="price">
                                                            <strong>{(item.할인율)*100}<span>%</span></strong>
                                                            <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                            <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                        </div>
                                                        <div className="price2">
                                                            <p>{item.팩당}</p>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                    </div>
                                                </div>
                                                <div className="row row4">
                                                    <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                    <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                    <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                    <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                    <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                })
                               
                            )
                        }
                        {
                        state.isList2 && (
                            state.제품2.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category2/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율*100}<span>%</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList3 && (
                            state.제품3.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category3/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율===0?"":item.할인율*100}<span>{item.할인율===0?"":'%'}</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격===0?"":item.가격.toLocaleString('ko-KR')}<span>{item.가격===0?"":"원"}</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList4 && (
                            state.제품4.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category4/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율===0?"":item.할인율*100}<span>{item.할인율===0?"":'%'}</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격===0?"":item.가격.toLocaleString('ko-KR')}<span>{item.가격===0?"":"원"}</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList5 && (
                            state.제품5.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category5/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율===0?"":item.할인율*100}<span>{item.할인율===0?"":'%'}</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격===0?"":item.가격.toLocaleString('ko-KR')}<span>{item.가격===0?"":"원"}</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList6 && (
                            state.제품6.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category6/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율===0?"":item.할인율*100}<span>{item.할인율===0?"":'%'}</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격===0?"":item.가격.toLocaleString('ko-KR')}<span>{item.가격===0?"":"원"}</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList7 && (
                            state.제품7.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category7/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율===0?"":item.할인율*100}<span>{item.할인율===0?"":'%'}</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격===0?"":item.가격.toLocaleString('ko-KR')}<span>{item.가격===0?"":"원"}</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList8 && (
                            state.제품8.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category8/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율===0?"":item.할인율*100}<span>{item.할인율===0?"":'%'}</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격===0?"":item.가격.toLocaleString('ko-KR')}<span>{item.가격===0?"":"원"}</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList9 && (
                            state.제품9.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category2/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율*100}<span>%</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList10 && (
                            state.제품10.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category2/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율*100}<span>%</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList11 && (
                            state.제품11.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category11/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율*100}<span>%</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList12 && (
                            state.제품12.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category12/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율*100}<span>%</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        {
                        state.isList13 && (
                            state.제품13.map((item,idx)=>{
                                return (
                                <li key={idx}>
                                    <div className="product" onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <a href="!#">
                                            <div className="product-img">
                                                <img src={`./images/sub/sub7/category13/${item.이미지}`} alt="" />
                                                <img className={`add1${item.배송==="정기배송"?' on':''}`} src="./images/sub/sub7/category2/IMG1681XzJ889805863.png" alt="" />
                                                <img className={`add2${item.프로==="프로"?' on':''}`} src="./images/sub/sub7/IMG1684oyb914888391.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="bottom">
                                            <div className="row row1">
                                                <div className="icon-img">
                                                    <img src="./images/sub/sub7/IMG1648CEL614146730.png" alt="" />
                                                </div>
                                                <div className="preview">
                                                    <i class="fa fa-star"></i>
                                                    <span>{item.평점}</span>
                                                    <p>({item.리뷰})</p>
                                                </div>
                                            </div>
                                            <div className="row row2">
                                                <h2>{item.상품명}</h2>
                                            </div>
                                            <div className="row row3">
                                                <div className="left">
                                                    <div className="price">
                                                        <strong>{item.할인율*100}<span>%</span></strong>
                                                        <h3>{(item.할인가).toLocaleString('ko-KR')}<span>원</span></h3>
                                                        <p>{item.가격.toLocaleString('ko-KR')}<span>원</span></p>
                                                    </div>
                                                    <div className="price2">
                                                        <p>{item.팩당}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button><img src="./images/sub/sub7/ico_btns_cart.png" alt="" /></button>
                                                </div>
                                            </div>
                                            <div className="row row4">
                                                <img className={`chooga1${item.신상품==="신상품"?' on':''}`} src="./images/sub/sub7/IMG1681Neg889936366.png" alt="" />
                                                <img className={`chooga2${item.추가증정==="추가증정"?' on':''}`} src="./images/sub/sub7/category2/IMG1681RXW889944088.png" alt="" />
                                                <img className={`chooga3${item.추가적립==="추가적립"?' on':''}`} src="./images/sub/sub7/category2/IMG1681Mbe889953022.png" alt="" />
                                                <img className={`chooga4${item.체중조절==="체중조절"?' on':''}`} src="./images/sub/sub7/category2/IMG1681pWa889986238.png" alt="" />
                                                <img className={`rank${item.랭크==="랭크"?' on':''}`} src="./images/sub/sub7/IMG1687Txz850332633.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        )
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};
