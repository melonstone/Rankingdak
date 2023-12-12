import React from 'react';


export default function Sub3ComponentChild({benefit}){
    return (

            <ul className='content-benefit'>

                {
                    benefit.length > 0 && (
                        benefit.map((item)=>{
                            return (
                                <li className={`benefit benefit${item.number}`} key={item.number} >
                                    <div className="benefit-img">
                                        <img src={`/images/sub/sub3/${item.banner}`} alt="" />
                                    </div>
                                    <div className="benefit-info">
                                        <div className="left-box">
                                            <h2>{item.mainTxt1}<br/>
                                            {item.mainTxt2}
                                            </h2>
                                            <h4>{item.subTxt1}<br/>
                                            {item.subTxt2}<br/>
                                            {item.subTxt3}<br/>
                                            {item.subTxt4}<br/>
                                            </h4>
                                        </div>
                                        <div className="right-box">
                                            <ul className='list-box'>
                                                    {
                                                        item.list.map((item)=>{ 
                                                            return (
                                                                <li className='list' key={item.번호}>
                                                                    <a href="!#">
                                                                        <img className='on' src={`/images/sub/sub3/${item.이미지}`} alt="" />
                                                                        {item.가격===0 && (<span></span>)}
                                                                        <em>{(item.가격).toLocaleString('ko-KR')}<i>원</i></em>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    )
                    
                }
            </ul>
            
                    
    );
};

