import React from 'react';
// import './scss/section7.scss'
import "../main/scss/sectionProductSlide.scss";
import axios from 'axios';
import SectionSlideComponentChild from './SectionSlideComponentChild';

export default function SectionSlideComponent({num}){

    const [ state, setState ] = React.useState({

       
        n: 0,
        product : {
            title:"",
            item: [],
        },
        allView : false,

    });

    React.useEffect(()=>{

        let sectionNumber = `section${num}`

        axios({
            url:`./data/intro/${sectionNumber}.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                imgLocation: sectionNumber,
                product : {
                    title: res.data.product.title,
                    item: res.data.product.item
                },
                refresh : res.data.refresh,
                n : res.data.product.item.length
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    },[]);

    

    return (
        <div id={`section${num}`} className='product-slide'>
            <SectionSlideComponentChild product={state.product} n={state.n} refresh={state.refresh} imgLocation={state.imgLocation} />
        </div>
    );
};