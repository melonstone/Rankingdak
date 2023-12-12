import React from "react";
import './scss/sub5.scss';
import Sub5ChildSection1 from "./Sub5Component/Sub5ChildSection1";
import Sub5ChildSection2 from "./Sub5Component/Sub5ChildSection2";
import Sub5ChildSection3 from "./Sub5Component/Sub5ChildSection3";
import Sub5ChildSection4 from "./Sub5Component/Sub5ChildSection4";
import Sub5ChildSection5 from "./Sub5Component/Sub5ChildSection5";
import Sub5ChildSection6 from "./Sub5Component/Sub5ChildSection6";

export default function Sub5Component(){
    
    return (
        <div id="sub5">
            <div className="container">
                <div className="sub5-title">
                    <h2>브랜드관</h2>
                </div>

                <Sub5ChildSection1 />
                <Sub5ChildSection2 />
                <Sub5ChildSection3 />
                <Sub5ChildSection4 />
                <Sub5ChildSection5 />
                <Sub5ChildSection6 />
                
            </div>
        </div>
    )
    
}