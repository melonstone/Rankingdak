import React from 'react';
import '../sub/scss/Sub3.scss'
import Sub3ComponentChild from './Sub3ComponentChild'
import axios from 'axios';
import { useSearchParams, useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Sub3Component(){

    
    const [ sub, setSub ] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [ state, setState ] = React.useState({

        benefit: [],
        title: {},
        mainBanner: {},
        contentBanner: {},
        move: {},
        md: {},
        
    });
    React.useEffect(()=>{
        setSub({
            test: 'sub3_11'
        })
    },[])

    React.useEffect(()=>{
        console.log(sub.get('test'));
        
        axios({
            url: './data/sub/'+ sub.get('test') + '.json',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    benefit : res.data.benefit,
                    title : res.data.title,
                    mainBanner : res.data.mainBanner,
                    contentBanner : res.data.contentBanner,
                    move : res.data.move,
                    md : res.data.md,
                })
            }
            
        })
        .catch((err)=>{
            console.log(err);
        })
    },[sub]);


    return (
        <div id='sub3'>
            <div className="container">
                <div className="title">
                    <div className="m-title">
                        <ul>
                            { state.title.prev !== '' && ( <li className='title-prev'><button onClick={()=>setSub({test: `${state.move.prevMove}` })}><span>{state.title.prev}</span></button></li>)}
                            <li className='title-center'>{state.title.center}</li>
                            { state.title.next !== '' && ( <li className='title-next'><button onClick={()=>setSub({test: `${state.move.nextMove}`})}><span>{state.title.next}</span></button></li>)}
                        </ul>
                    </div>
                    <div className="banner">
                        <img src={`./images/sub/sub3/${state.mainBanner.이미지}`} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-banner-top">
                        <a href="!#"><img src={`./images/sub/sub3/${state.contentBanner.왼쪽이미지}`} alt="" /></a>
                        <a href="!#"><img src={`./images/sub/sub3/${state.contentBanner.오른쪽이미지}`} alt="" /></a>
                    </div>
                    
                        <Sub3ComponentChild benefit={state.benefit}/>

                    <div className="content-MDsay">
                        <h3>
                        {state.md.mdSay1}<br/>
                        {state.md.mdSay2}
                        </h3>
                        <div className='md'>
                            <span><img src={`./images/sub/sub3/${state.md.mdImg}`} alt="" /></span>
                            <p>{state.md.mdName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

