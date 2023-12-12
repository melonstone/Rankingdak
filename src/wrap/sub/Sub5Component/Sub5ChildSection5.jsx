import React from "react";
import '../scss/sub5.scss';

export default function Sub5ChildSection5(){
 
    // 상태관리변수
    const [state, setState] = React.useState({
        전체: false,
        ㄱ: false,
        ㄴ: false,
        ㄷ: false,
        ㄸ: false,
        ㄹ: false,
        ㅁ: false,
        ㅂ: false,
        ㅅ: false,
        ㅆ: false,
        ㅇ: false,
        ㅈ: false,
        ㅋ: false,
        ㅌ: false,
        ㅍ: false,
        ㅎ: false,
        기타: false,
        전체2: false,
        닭가슴살: false,
        샐러드: false,
        도시락: false,
        소고기: false,
        간식: false,
        음료: false,
        간편식: false,
        인기순: true,
        판매량순: false
    })
    
    // 버튼클릭
    const onClickBtn1=(e)=>{
        e.preventDefault();
        let 전체 = state.전체
        
        setState({
            ...state,
            전체: !전체
        })
    }
    const onClickBtn2=(e)=>{
        e.preventDefault();
        let ㄱ = state.ㄱ

        setState({
            ...state,
            ㄱ: !ㄱ
        })
    }
    const onClickBtn3=(e)=>{
        e.preventDefault();
        let ㄴ = state.ㄴ

        setState({
            ...state,
            ㄴ: !ㄴ
        })
    }
    const onClickBtn4=(e)=>{
        e.preventDefault();
        let ㄷ = state.ㄷ

        setState({
            ...state,
            ㄷ: !ㄷ
        })
    }
    const onClickBtn5=(e)=>{
        e.preventDefault();
        let ㄸ = state.ㄸ

        setState({
            ...state,
            ㄸ: !ㄸ
        })
    }
    const onClickBtn6=(e)=>{
        e.preventDefault();
        let ㄹ = state.ㄹ

        setState({
            ...state,
            ㄹ: !ㄹ
        })
    }
    const onClickBtn7=(e)=>{
        e.preventDefault();
        let ㅁ = state.ㅁ

        setState({
            ...state,
            ㅁ: !ㅁ
        })
    }
    const onClickBtn8=(e)=>{
        e.preventDefault();
        let ㅂ = state.ㅂ

        setState({
            ...state,
            ㅂ: !ㅂ
        })
    }
    const onClickBtn9=(e)=>{
        e.preventDefault();
        let ㅃ = state.ㅃ

        setState({
            ...state,
            ㅃ: !ㅃ
        })
    }
    const onClickBtn10=(e)=>{
        e.preventDefault();
        let ㅅ = state.ㅅ

        setState({
            ...state,
            ㅅ: !ㅅ
        })
    }
    const onClickBtn11=(e)=>{
        e.preventDefault();
        let ㅆ = state.ㅆ

        setState({
            ...state,
            ㅆ: !ㅆ
        })
    }
    const onClickBtn12=(e)=>{
        e.preventDefault();
        let ㅇ = state.ㅇ

        setState({
            ...state,
            ㅇ: !ㅇ
        })
    }
    const onClickBtn13=(e)=>{
        e.preventDefault();
        let ㅈ = state.ㅈ

        setState({
            ...state,
            ㅈ: !ㅈ
        })
    }
    const onClickBtn14=(e)=>{
        e.preventDefault();
        let ㅊ = state.ㅊ

        setState({
            ...state,
            ㅊ: !ㅊ
        })
    }
    const onClickBtn15=(e)=>{
        e.preventDefault();
        let ㅋ = state.ㅋ

        setState({
            ...state,
            ㅋ: !ㅋ
        })
    }
    const onClickBtn16=(e)=>{
        e.preventDefault();
        let ㅌ = state.ㅌ

        setState({
            ...state,
            ㅌ: !ㅌ
        })
    }
    const onClickBtn17=(e)=>{
        e.preventDefault();
        let ㅍ = state.ㅍ

        setState({
            ...state,
            ㅍ: !ㅍ
        })
    }
    const onClickBtn18=(e)=>{
        e.preventDefault();
        let ㅎ = state.ㅎ

        setState({
            ...state,
            ㅎ: !ㅎ
        })
    }
    const onClickBtn19=(e)=>{
        e.preventDefault();
        let 기타 = state.기타

        setState({
            ...state,
            기타: !기타
        })
    }
    const onClickBtn20=(e)=>{
        e.preventDefault();
        let 전체2 = state.전체2

        setState({
            ...state,
            전체2: !전체2
        })
    }
    const onClickBtn21=(e)=>{
        e.preventDefault();
        let 닭가슴살 = state.닭가슴살

        setState({
            ...state,
            닭가슴살: !닭가슴살
        })
    }
    const onClickBtn22=(e)=>{
        e.preventDefault();
        let 샐러드 = state.샐러드

        setState({
            ...state,
            샐러드: !샐러드
        })
    }
    const onClickBtn23=(e)=>{
        e.preventDefault();
        let 도시락 = state.도시락

        setState({
            ...state,
            도시락: !도시락
        })
    }
    const onClickBtn24=(e)=>{
        e.preventDefault();
        let 소고기 = state.소고기

        setState({
            ...state,
            소고기: !소고기
        })
    }
    const onClickBtn25=(e)=>{
        e.preventDefault();
        let 간식 = state.간식

        setState({
            ...state,
            간식: !간식
        })
    }
    const onClickBtn26=(e)=>{
        e.preventDefault();
        let 음료 = state.음료

        setState({
            ...state,
            음료: !음료
        })
    }
    const onClickBtn27=(e)=>{
        e.preventDefault();
        let 간편식 = state.간편식

        setState({
            ...state,
            간편식: !간편식
        })
    }
    const onClickBtn28=(e)=>{
        e.preventDefault();
        let 인기순 = state.인기순

        setState({
            ...state,
            인기순: !인기순
        })
    }
    const onClickBtn29=(e)=>{
        e.preventDefault();
        let 판매량순 = state.판매량순

        setState({
            ...state,
            판매량순: !판매량순
        })
    }

    return (
        <section id="section5" className="section">
            <div className="content">
                <div className="filter">
                    <div className="korean">
                        <div className="class-title">
                            <h4>가나다순</h4>
                        </div>
                        <ul className="class-list">
                            <li onClick={onClickBtn1} className={`class${state.전체===true? ' on': ''}`}>
                                <button><span>전체</span></button>
                            </li>
                            <li onClick={onClickBtn2} className={`class more${state.ㄱ===true? ' on': ''}`}>
                                <button><span>ㄱ</span></button>
                            </li>
                            <li onClick={onClickBtn3} className={`class more${state.ㄴ===true? ' on': ''}`}>
                                <button><span>ㄴ</span></button>
                            </li>
                            <li onClick={onClickBtn4} className={`class more${state.ㄷ===true? ' on': ''}`}>
                                <button><span>ㄷ</span></button>
                            </li>
                            <li onClick={onClickBtn5} className={`class more${state.ㄸ===true? ' on': ''}`}>
                                <button><span>ㄸ</span></button>
                            </li>
                            <li onClick={onClickBtn6} className={`class more${state.ㄹ===true? ' on': ''}`}>
                                <button><span>ㄹ</span></button>
                            </li>
                            <li onClick={onClickBtn7} className={`class more${state.ㅁ===true? ' on': ''}`}>
                                <button><span>ㅁ</span></button>
                            </li>
                            <li onClick={onClickBtn8} className={`class more${state.ㅂ===true? ' on': ''}`}>
                                <button><span>ㅂ</span></button>
                            </li>
                            <li onClick={onClickBtn9} className={`class more${state.ㅃ===true? ' on': ''}`}>
                                <button><span>ㅃ</span></button>
                            </li>
                            <li onClick={onClickBtn10} className={`class more${state.ㅅ===true? ' on': ''}`}>
                                <button><span>ㅅ</span></button>
                            </li>
                            <li onClick={onClickBtn11} className={`class more${state.ㅆ===true? ' on': ''}`}>
                                <button><span>ㅆ</span></button>
                            </li>
                            <li onClick={onClickBtn12} className={`class more${state.ㅇ===true? ' on': ''}`}>
                                <button><span>ㅇ</span></button>
                            </li>
                            <li onClick={onClickBtn13} className={`class more${state.ㅈ===true? ' on': ''}`}>
                                <button><span>ㅈ</span></button>
                            </li>
                            <li onClick={onClickBtn14} className={`class more${state.ㅊ===true? ' on': ''}`}>
                                <button><span>ㅊ</span></button>
                            </li>
                            <li onClick={onClickBtn15} className={`class more${state.ㅋ===true? ' on': ''}`}>
                                <button><span>ㅋ</span></button>
                            </li>
                            <li onClick={onClickBtn16} className={`class more${state.ㅌ===true? ' on': ''}`}>
                                <button><span>ㅌ</span></button>
                            </li>
                            <li onClick={onClickBtn17} className={`class more${state.ㅍ===true? ' on': ''}`}>
                                <button><span>ㅍ</span></button>
                            </li>
                            <li onClick={onClickBtn18} className={`class more${state.ㅎ===true? ' on': ''}`}>
                                <button><span>ㅎ</span></button>
                            </li>
                            <li onClick={onClickBtn19} className={`class more${state.기타===true? ' on': ''}`}>
                                <button><span>기타</span></button>
                            </li>
                        </ul>
                    </div>
                    <div className="category">
                        <div className="class-title">
                            <h4>카테고리</h4>
                        </div>
                        <ul className="class-list">
                            <li onClick={onClickBtn20} className={`class${state.전체2===true? ' on': ''}`}>
                                <button><span>전체</span></button>
                            </li>
                            <li onClick={onClickBtn21} className={`class more${state.닭가슴살===true? ' on': ''}`}>
                                <button><span>닭가슴살</span></button>
                            </li>
                            <li onClick={onClickBtn22} className={`class more${state.샐러드===true? ' on': ''}`}>
                                <button><span>샐러드</span></button>
                            </li>
                            <li onClick={onClickBtn23} className={`class more${state.도시락===true? ' on': ''}`}>
                                <button><span>도시락</span></button>
                            </li>
                            <li onClick={onClickBtn24} className={`class more${state.소고기===true? ' on': ''}`}>
                                <button><span>소고기/연어</span></button>
                            </li>
                            <li onClick={onClickBtn25} className={`class more${state.간식===true? ' on': ''}`}>
                                <button><span>건강/간식</span></button>
                            </li>
                            <li onClick={onClickBtn26} className={`class more${state.음료===true? ' on': ''}`}>
                                <button><span>과일/음료</span></button>
                            </li>
                            <li onClick={onClickBtn27} className={`class more${state.간편식===true? ' on': ''}`}>
                                <button><span>간편식</span></button>
                            </li>
                        </ul>
                        <i>|</i>
                        <ul className="class-list">
                            <li onClick={onClickBtn28} className={`class${state.인기순===true? ' on': ''}`}>
                                <button><span>인기순</span></button>
                            </li>
                            <li onClick={onClickBtn29} className={`class more${state.판매량순===true? ' on': ''}`}>
                                <button><span>판매량순</span></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}