import React from 'react';
import './scss/mainModal.scss';
import { useDispatch } from 'react-redux';
import { mainModal } from '../reducer/mainModal';

export default function MainModalComponent (){

    const dispatch = useDispatch();

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(mainModal(false));
    }

    

    return (
        <div id='mainModal'>
            <div className="container">
                <a href="!#" className='modalImg'><img src="./images/intro/MainModal/IMG1697kaC159164642.jpg" alt="" /></a>
                <a href="!#"
                    className='Btn'
                    onClick={onClickClose}
                >
                    <img src="./images/intro/MainModal/btn_close.png" alt="" />
                </a>
            </div>
        </div>
    );
};
