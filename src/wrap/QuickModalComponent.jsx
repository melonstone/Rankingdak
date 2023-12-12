import React from "react";
import './scss/QuickModal.scss'
import { quickMenuViewProduct } from "../reducer/quickMenuViewProduct";
import { useSelector } from "react-redux";
export default function QuickModalComponent(){


    const [state,setState] = React.useState({
        isProduct:false,
    });


    const [isFixed, setIsFixed] = React.useState(false);

    React.useEffect(()=>{
       window.addEventListener('scroll', function(){
            let isFixed = false;
            if(this.window.scrollY >= 700){
                isFixed = true;
            }
            else{
                isFixed = false;
            }
            setIsFixed(isFixed);
       });     
    },[]);

    
    const onClickGoTop=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    

    const selector = useSelector((state)=>state);

    return (
        <div id="QuickModal"  className={isFixed?' on':''}>
            <div className="container">
                <div className="view-product">
                    <h2>최근 본 상품<span>({selector.quickMenuViewProduct.quickMenuViewProduct.length})</span></h2>
                    {
                        selector.quickMenuViewProduct.quickMenuViewProduct.length>0 && (
                        <ul className="quickSlide">
                        {    
                            selector.quickMenuViewProduct.quickMenuViewProduct.length>0 && (
                                    selector.quickMenuViewProduct.quickMenuViewProduct.map((item,idx)=>{
                                        return (
                                            <li key={item.번호}>
                                                <div className="product">
                                                    <div className="product-img">
                                                        <img src={`${item.이미지}`} alt="" />
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                )
                                
                            )
                        }
                        </ul>
                        )
                    }
                </div>
            </div>
            <div className="add-image1">
                <img src="./images/intro/quickModal/IMG1681UfY890476355.png" alt="" />
            </div>
            <div className="add-image2">
                <img src="./images/intro/quickModal/IMG1692TsC665390591.jpg" alt="" />
            </div>
            <div className="goTop">
                <a href="!#" onClick={onClickGoTop}>
                    <span>TOP</span>
                    <img src="./images/intro/quickModal/ico-go-up.png" alt="" />
                </a>
            </div>
        </div>
    )
}