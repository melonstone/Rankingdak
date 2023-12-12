import React from 'react';
import "./scss/section4.scss";
import axios from 'axios';
import Section4ComponentChild from './Section4ComponentChild';

export default function Section4Component(){

    const [ state, setState ] = React.useState({

        n: 0,
        product : {
            title:'',
            item: [],
        },
        timeSale: {},

    });

    axios({
        url:'./data/intro/section4.json',
        method: 'GET'
    })
    .then((res)=>{
        setState({
            ...state,
            product : {
                title: res.data.product.title,
                item: res.data.product.item
            },
            n : res.data.product.item.length,
            timeSale : {
                timeSale: res.data.timeSale.timeSale,
                timeSaleStart: res.data.timeSale.timeSaleStart,
                timeSaleSet: res.data.timeSale.timeSaleSet,
            },
            
        })
    })
    .catch(()=>{

    })

    return (
        <div id='section4'>
            <Section4ComponentChild product={state.product} n={state.n} timeSale={state.timeSale} />
        </div>
    );
};