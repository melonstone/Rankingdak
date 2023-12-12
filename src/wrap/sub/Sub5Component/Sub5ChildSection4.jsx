import React from "react";
import '../scss/sub5.scss';

export default function Sub5ChildSection4(){
 
    return (
        <section id="section4" className="section">
            <div className="input-box">
                <input type="text" name="searchBrand" id="searchBrand" placeholder="브랜드명을 검색해보세요"/>
                <span className="search-box">
                    <button className="search-btn">
                        <i className="search-icon"></i>
                    </button>
                </span>
            </div>
        </section>
    )
}