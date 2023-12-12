import React from 'react';
import './scss/section1Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { section1Modal } from '../../reducer/section1Modal';

export default function Section1Modal()  {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
  
    const onClickCloseBtn=(e)=>{
        e.preventDefault();
     
        dispatch(section1Modal(false));          
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return (
        <div id='section1Modal' className='service-modal'>
            <div className='container'>
                <div className='banner-box'>
                    <ul>
                        <li><a href="!#"><img src="./images/intro/section1/slide1.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide2.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide3.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide4.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide5.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide6.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide7.jpg" alt="" /></a></li>
                        <li><a href="!#"><img src="./images/intro/section1/slide8.jpg" alt="" /></a></li>
                    </ul>
                    <div className='button-box'>
                        <button onClick={onClickCloseBtn}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

