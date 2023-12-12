import React from "react";
import './scss/Main.scss';
import Section1Component from './main/Section1Component'
import Section1Modal from './main/Section1Modal';
import Section2Component from './main/Section2Component';
import Section4Component from './main/Section4Component';
import Section6Component from './main/Section6Component';
import Section10Component from './main/Section10Component';
import Section13Component from './main/Section13Component';
import SectionSlideComponent from './main/SectionSlideComponent';
import { useSelector } from "react-redux";
import axios from "axios";


export default function MainComponent(){

    const selector = useSelector((state)=>state);

    const [sectionCount, setSectionCount] = React.useState([]);

    React.useEffect(()=>{
        axios({
            url:'./data/intro/sectionCount.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setSectionCount(res.data.sectionCount);
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    },[]);

    return (
        <main id="main">
            <Section1Component />
            {
                selector.section1Modal.isSection1Modal && <Section1Modal />
            }
            {
                sectionCount.length > 0 && (
                    sectionCount.map((item,idx)=>{        
                        return(
                            <div key={idx}>
                                { item===2 && <Section2Component /> }
                                { item===4 && <Section4Component /> }
                                { item===6 && <Section6Component /> }
                                { item===10 && <Section10Component /> }
                                { item===13 && <Section13Component /> }
                                { item!==2 && item!==4 && item!==6 && item!==10 && item!==13 && <SectionSlideComponent key={item} num={item} />}
                            </div>
                        )
                    })
                )
            }
            {/* <Section2Component />
            <Section4Component />
            <Section6Component />
            <Section10Component />
            <Section13Component />
            <SectionSlideComponent /> */}
        </main>
    )
}