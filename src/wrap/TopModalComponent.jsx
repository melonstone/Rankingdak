import React from 'react';
import './scss/topModal.scss'

import { useDispatch } from "react-redux";
import { topModal } from "../reducer/topModal";

export default function TopModalComponent({isTopModalMethod}){

    const dispatch = useDispatch();

    const onClickCloseBtn=(e)=>{
        e.preventDefault();
        
        let expires = 1;
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + expires );

        const obj = {
            id: `topModalDay1`,
            expires: toDay.getTime()
        }
        localStorage.setItem('RANKING_TOP_MODAL', JSON.stringify(obj) );

        dispatch(topModal(false));
    }

    return (
        <div id='topModal'>
            <div className="container">
                <div className="content">
                    <div className="topModal-left-box">
                        <div className="img-box">
                            <img src="./images/intro/topmodal/topModal3_y.jpg" alt="" />
                        </div>
                    </div>
                    <div className="topModal-right-box">
                        <div className="img-box">
                            <img src="./images/intro/topmodal/topModal4_p.jpg" alt="" />
                        </div>
                    </div>
                    <button onClick={onClickCloseBtn}></button>
                </div>
            </div>
        </div>
    );
};
