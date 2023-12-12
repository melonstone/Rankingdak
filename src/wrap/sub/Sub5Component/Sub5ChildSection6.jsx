import React from "react";
import '../scss/sub5.scss';
import axios from "axios";

export default function Sub5ChildSection6(){
 

    // 상태관리변수
    const [state, setState] = React.useState({
        column: []
    })

    // console.log(state.column);

    // AXIOS
    React.useEffect(()=>{
        axios({
            url: './data/sub/sub5.json',
            method: 'GET'
        })
        .then((res)=>{
            console.log(res.data);
    
            setState({
                ...state,
                column: res.data.column
            });
    
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])


    return (
        <section id="section6" className="section">
            <div className="content">
                <ul className="grid">
                    {
                        state.column.map((item, idx)=>{
                            return (
                                <li className={`column column${idx+1}`} key={idx}>
                                    <div className="brand-list-item">
                                        <div className="img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub5/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="text-box">
                                            <span>{item.브랜드명}</span>
                                            <p>{item.설명}</p>
                                            <div className="wish">
                                                <button className="heart"></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}