import React from 'react';
import '../scss/sub4Modal.scss';
import { useDispatch } from 'react-redux';
import { sub4Modal } from '../../../reducer/sub4Modal';

export default function Sub4ComponentModal(){
 
    const dispatch = useDispatch();

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(sub4Modal(false));
        
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return (
        <div id='sub4Modal'>
            <div className="container">
                <div className="window-title">
                    <h1>1팩 담기 사용백과</h1>
                    <button onClick={onClickClose} title='닫기'>
                        <i className="material-icons">close</i>
                    </button>
                </div>
                <div className="content">
                    <div className="banner-box">
                        <img src="./images/sub/sub4/IMG1692gxm855074212.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
