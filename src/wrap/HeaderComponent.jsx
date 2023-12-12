import React from "react";
import './scss/Header.scss';
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../reducer/signIn";



export default  function HeaderComponent(){

    const CategoryList = React.useRef(); 
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const row3 = React.useRef(); 

    
    const [state, setState] = React.useState({
        Searchbox : false,
        CategoryBar : false,      
        cnt: 0,
        isFixed: false,
        OrangeImage1: false,
        OrangeImage2: false,
        OrangeImage3: false,
        OrangeImage4: false,
        OrangeImage5: false,
        OrangeImage6: false,
        OrangeImage7: false,
        OrangeImage8: false,
        OrangeImage9: false,
        OrangeImage10: false,
        OrangeImage11: false,
        OrangeImage12: false,
        OrangeImage13: false,
        OrangeImage14: false,
        OrangeImage15: false,
        OrangeImage16: false,
        OrangeImage17: false,
        OrangeImage18: false,
        OrangeImage19: false,
        OrangeImage20: false,
        OrangeImage21: false,
        OrangeImage22: false,
        OrangeImage23: false,
    });
        
    const mainSlide=()=>{
        CategoryList.current.style.transition = `all 0.6s ease-in-out`;
        CategoryList.current.style.transform = `translateX(${-93*state.cnt}px)`;
    }

    const onClickNext=(e)=>{
        e.preventDefault();
        if(state.cnt>=11){
            setState({
                ...state,
                cnt: 11
            });
        }
        else {
            setState({
                ...state,
                cnt: state.cnt+1
            })
        }      
    }

    const onClickPrev=(e)=>{
        e.preventDefault();

        if(state.cnt<=0){
            setState({
                ...state,
                cnt: 0
            });
        }
        else{
            setState({
                ...state,
                cnt: state.cnt-1
            })
        }       
    }
    
    React.useEffect(()=>{        
        mainSlide();
    },[state.cnt]); 


    React.useEffect(()=>{

        let row3Top = row3.current.offsetTop+42;
        window.addEventListener('scroll', function(){
            if(window.scrollY>=row3Top){
                setState({
                    ...state,
                    isFixed: true
                });
            }
            else {
                setState({
                    ...state,
                    isFixed: false
                });
            }
        });
    },[]);


    const onClickSearch=()=>{    
        setState({
            ...state,
            Searchbox : true
        })
    }    
    const onClickSearchClose=()=>{    
        setState({
            ...state,
            Searchbox : false
        })
    }    

    const onMouseEnterCategory=()=>{
        setState({
            ...state,
            CategoryBar : true
        })
    }

    const onMouseLeaveCategory=()=>{
        setState({
            ...state,
            CategoryBar : false
        })
    }
    
    const onMouseEnter1=()=>{
        setState({
            ...state,
            OrangeImage1: true,            
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave1=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter2=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: true,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave2=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false

        })
    }
    const onMouseEnter3=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: true,            
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave3=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter4=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,            
            OrangeImage4: true,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave4=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false

        })
    }
    const onMouseEnter5=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,            
            OrangeImage5: true,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave5=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter6=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: true,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave6=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter7=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: true,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave7=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter8=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: true,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave8=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter9=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: true,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave9=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter10=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: true,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave10=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter11=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: true,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave11=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter12=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: true,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave12=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter13=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,            
            OrangeImage13: true,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave13=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter14=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: true,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave14=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter15=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: true,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave15=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter16=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: true,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave16=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter17=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: true,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave17=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter18=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: true,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave18=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter19=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,        
            OrangeImage19: true,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave19=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter20=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: true,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onMouseLeave20=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter21=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: true,
            OrangeImage22: false,
            OrangeImage23: false            
        })
    }

    const onMouseLeave21=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter22=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: true,
            OrangeImage23: false
        })
    }

    const onMouseLeave22=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }
    const onMouseEnter23=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: true
        })
    }

    const onMouseLeave23=()=>{
        setState({
            ...state,
            OrangeImage1: false,
            OrangeImage2: false,
            OrangeImage3: false,
            OrangeImage4: false,
            OrangeImage5: false,
            OrangeImage6: false,
            OrangeImage7: false,
            OrangeImage8: false,
            OrangeImage9: false,
            OrangeImage10: false,
            OrangeImage11: false,
            OrangeImage12: false,
            OrangeImage13: false,
            OrangeImage14: false,
            OrangeImage15: false,
            OrangeImage16: false,
            OrangeImage17: false,
            OrangeImage18: false,
            OrangeImage19: false,
            OrangeImage20: false,
            OrangeImage21: false,
            OrangeImage22: false,
            OrangeImage23: false
        })
    }

    const onClickLogout=(e)=>{
        e.preventDefault();

        dispatch(signIn(null));
        localStorage.removeItem('RANKING_SIGNIN_DATA');
        navigate('/index');
    }
    
    return(
        <>
            <header id="header">
                <div className="row1 row">
                    <div className="container">
                        <div className="content">
                            <aside id="aside">
                               { 
                                selector.signIn.로그인정보 === null && (
                                        <>
                                            <Link to="/login">로그인</Link>
                                            <i>|</i>                            
                                            <Link to="/signupAgree">회원가입</Link>
                                            <i>|</i>
                                            <a href="!#">주문조회</a>
                                            <i>|</i>
                                            <a href="!#">고객센터</a>
                                            <i>|</i>
                                            <Link to="/adminLogin">관리자</Link>
                                        </>
                                    )
                                }
                               { 
                                selector.signIn.로그인정보 !== null && (
                                        <>
                                            <span><em>{selector.signIn.로그인정보.구분}</em> <strong>{selector.signIn.로그인정보.이름} 님</strong></span>
                                            <i>|</i>
                                            <a href="!#" onClick={onClickLogout}>로그아웃</a>
                                            <i>|</i>                            
                                            <a href="!#">내정보</a>
                                            <i>|</i>
                                            <a href="!#">주문조회</a>
                                            <i>|</i>
                                            <a href="!#">고객센터</a>
                                        </>
                                    )
                                }
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="row2 row" >
                    <div className="container">
                        <div className="content">
                            <div className="left" onClick={onClickSearchClose}>
                                <Link to="index"><img src="./images/intro/header/logo.png" alt="" /></Link>
                            </div>
                            <div className="center" onClick={onClickSearch}>
                                <input className={state.Searchbox?"on":" "} type="text" name="search" id="search" placeholder="검색어를 입력해주세요"  />                                
                                <button><img src="./images/intro/header/ico_header_search.svg" alt="" /></button>

                                <div className={`search-box ${state.Searchbox?"on": " "}`}>
                                    <div className="tit-area"><h2>인기검색어</h2></div>
                                    <div className="rank-area">
                                        <ul className="list">
                                            <li><a href="!#"><em>1</em><span>랭커 닭가슴살</span><span className="rank num1">-</span></a></li>
                                            <li><a href="!#"><em>2</em><span>볶음밥</span><span className="rank num2">▲1</span></a></li>
                                            <li><a href="!#"><em>3</em><span>스팀 닭가슴살</span><span className="rank num3">-</span></a></li>
                                            <li><a href="!#"><em>4</em><span>닭가슴살 스테이크</span><span className="rank num4">▲1</span></a></li>
                                            <li><a href="!#"><em>5</em><span>주먹밥</span><span className="rank num5">▲1</span></a></li>
                                            <li><a href="!#"><em>6</em><span>잇메이트 닭가슴살</span><span className="rank num6">▲1</span></a></li>
                                            <li><a href="!#"><em>7</em><span>고구마</span><span className="rank num7">-</span></a></li>
                                            <li><a href="!#"><em>8</em><span>도시락</span><span className="rank num8">▼1</span></a></li>
                                            <li><a href="!#"><em>9</em><span>소스 닭가슴살</span><span className="rank num9">new</span></a></li>
                                            <li><a href="!#"><em>10</em><span>저염 닭가슴살</span><span className="rank num10">new</span></a></li>                                            
                                        </ul>                                        
                                    </div>
                                    <div className="search-bottom">
                                        <div className="tit2-area"><h3>최근검색어</h3></div>
                                        <div className="no-area">최근검색어가 없습니다.</div>
                                        <div className="last-search"></div>
                                    </div>
                                </div>                                    
                            </div>
                            <div className="right" onClick={onClickSearchClose}>
                                <span>
                                    <a href="!#"><img src="./images/intro/header/top-util-pedometer.png" alt="" /></a>
                                    <a href="!#"><img src="./images/intro/header/coupon.png" alt="" /></a>
                                    <a href="!#"><img src="./images/intro/header/mypage.png" alt="" /></a>
                                    <a href="!#"><img src="./images/intro/header/cart.png" alt="" /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  ref={row3}  className={`row3 row${state.isFixed?' fixed':''}`}>
                    <div className="container">
                        <div className="content">
                            <div className="left" onMouseEnter={onMouseEnterCategory} >
                                <div>
                                    <img src="./images/intro/header/icon_3bar.svg" alt="" />
                                    <span>카테고리</span>                                    
                                    <a href="!#">|</a>
                                </div>
                            </div>   
                            <div className={`category-box ${state.CategoryBar?"on": " "}`} onMouseLeave={onMouseLeaveCategory}>
                                <div className="category-main" >
                                    <div  className="category">
                                        <div className="prev-btn" onClick={onClickPrev}>
                                            <i className="material-icons">keyboard_arrow_left</i>
                                        </div>                                                                                                           
                                        <ul className="category-list">
                                            <li  ref={CategoryList}>
                                                <a href="!#" onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                                                    <img src={`./images/intro/header/${state.OrangeImage1?'IMG1681JRj889432369.png':'IMG1681vTX889434740.png'}`} alt="" />
                                                    <span>신상품</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                                                    <img src={`./images/intro/header/${state.OrangeImage2?'IMG1681yJO889439135.png':'IMG1681LUS889441680.png'}`} alt="" />
                                                    <span>선물하기</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                                                    <img src={`./images/intro/header/${state.OrangeImage3?'IMG1681Qyk889445812.png':'IMG1681jTe889448225.png'}`} alt="" />
                                                    <span>1팩담기</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
                                                    <img src={`./images/intro/header/${state.OrangeImage4?'IMG1681McH889452417.png':'IMG1681BrA889455241.png'}`} alt="" />
                                                    <span>닭가슴살</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>
                                                    <img src={`./images/intro/header/${state.OrangeImage5?'IMG1681FEM889459714.png':'IMG1681XUc889462220.png'}`} alt="" />
                                                    <span>즉석 간편식</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter6} onMouseLeave={onMouseLeave6}>
                                                    <img src={`./images/intro/header/${state.OrangeImage6?'IMG1681vIq889467416.png':'IMG1681YfV889470176.png'}`} alt="" />
                                                    <span>도시락·볶음밥</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter7} onMouseLeave={onMouseLeave7}>
                                                    <img src={`./images/intro/header/${state.OrangeImage7?'IMG1681qfN889474262.png':'IMG1681BnV889477044.png'}`} alt="" />
                                                    <span>소고기</span>
                                                </a>
                                           
                                                <a href="!#" onMouseEnter={onMouseEnter8} onMouseLeave={onMouseLeave8}>
                                                    <img src={`./images/intro/header/${state.OrangeImage8?'IMG1681wPo889482037.png':'IMG1681Ltx889486099.png'}`} alt="" />
                                                    <span>돼지·오리고기</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter9} onMouseLeave={onMouseLeave9}>
                                                    <img src={`./images/intro/header/${state.OrangeImage9?'IMG1681Jqv889490229.png':'IMG1681otu889494215.png'}`} alt="" />
                                                    <span>닭안심살</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter10} onMouseLeave={onMouseLeave10}>
                                                    <img src={`./images/intro/header/${state.OrangeImage10?'IMG1681aSD889498981.png':'IMG1681NCw889501665.png'}`} alt="" />
                                                    <span>샐러드·과일</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter11} onMouseLeave={onMouseLeave11}>
                                                    <img src={`./images/intro/header/${state.OrangeImage11?'IMG1681Tyg889506699.png':'IMG1681vep889509449.png'}`} alt="" />
                                                    <span>베이커리·치즈</span>
                                                </a>
                                           
                                                <a href="!#" onMouseEnter={onMouseEnter12} onMouseLeave={onMouseLeave12}>
                                                    <img src={`./images/intro/header/${state.OrangeImage12?'IMG1681feh889515583.png':'IMG1681pXp889519792.png'}`} alt="" />
                                                    <span>과자·간식·떡</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter13} onMouseLeave={onMouseLeave13}>
                                                    <img src={`./images/intro/header/${state.OrangeImage13?'IMG1681HWu889524917.png':'IMG1681ids889528045.png'}`} alt="" />
                                                    <span>음료·차·프로틴</span>
                                                </a>
                                           
                                                <a href="!#" onMouseEnter={onMouseEnter14} onMouseLeave={onMouseLeave14}>
                                                    <img src={`./images/intro/header/${state.OrangeImage14?'IMG1681hmI889532816.png':'IMG1681XZP889537154.png'}`} alt="" />
                                                    <span>비건식품</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter15} onMouseLeave={onMouseLeave15}>
                                                    <img src={`./images/intro/header/${state.OrangeImage15?'IMG1681MJm889542106.png':'IMG1681hzb889544938.png'}`} alt="" />
                                                    <span>계란·난백·콩</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter16} onMouseLeave={onMouseLeave16}>
                                                    <img src={`./images/intro/header/${state.OrangeImage1?'IMG1681edU889550509.png':'IMG1681UDu889554452.png'}`} alt="" />
                                                    <span>수산·해산</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter17} onMouseLeave={onMouseLeave17}>
                                                    <img src={`./images/intro/header/${state.OrangeImage17?'IMG1681AoL889573370.png':'IMG1681Axg889577037.png'}`} alt="" />
                                                    <span>견과·고구마·감자</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter18} onMouseLeave={onMouseLeave18}>
                                                    <img src={`./images/intro/header/${state.OrangeImage18?'IMG1681IOI889594133.png':'IMG1681lPu889599938.png'}`} alt="" />
                                                    <span>건강식품</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter19} onMouseLeave={onMouseLeave19}>
                                                    <img src={`./images/intro/header/${state.OrangeImage19?'IMG1681CZO889616380.png':'IMG1681zGu889621856.png'}`} alt="" />
                                                    <span>반찬·밀키트·안주</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter20} onMouseLeave={onMouseLeave20}>
                                                    <img src={`./images/intro/header/${state.OrangeImage20?'IMG1681ogz889638470.png':'IMG1681eKp889642083.png'}`} alt="" />
                                                    <span>소스·오일</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter21} onMouseLeave={onMouseLeave21}>
                                                    <img src={`./images/intro/header/${state.OrangeImage21?'IMG1681RYq889654893.png':'IMG1681owA889658576.png'}`} alt="" />
                                                    <span>식단·패키지</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter22} onMouseLeave={onMouseLeave22}>
                                                    <img src={`./images/intro/header/${state.OrangeImage22?'IMG1681Gcb889703739.png':'IMG1681yfH889707332.png'}`} alt="" />
                                                    <span>펫푸드</span>
                                                </a>
                                            
                                                <a href="!#" onMouseEnter={onMouseEnter23} onMouseLeave={onMouseLeave23}>
                                                    <img src={`./images/intro/header/${state.OrangeImage23?'IMG1681hdw889723418.png':'IMG1681nHD889727339.png'}`} alt="" />
                                                    <span>운동·생활용품</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="next-btn" onClick={onClickNext}>
                                            <i className="material-icons">keyboard_arrow_right</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`sec-box ${state.CategoryBar?"on":""}`} onMouseLeave={onMouseLeaveCategory}>
                                {
                                state.OrangeImage1 && (
                                <ul>
                                    <li>
                                        <span>전체</span>
                                    </li>                                    
                                </ul>
                                )
                                }                                
                                {
                                state.OrangeImage2 && (
                                <ul>
                                    <li>
                                        <span>전체</span>
                                    </li>
                                    <li>
                                        <span>테마별</span>
                                    </li>
                                    <li>
                                        <span>가격대별</span>
                                    </li>
                                    <li>
                                        <span>카테고리</span>
                                    </li>                                    
                                </ul>
                                )
                                }                                
                                {
                                state.OrangeImage3 && (
                                <ul>
                                    <li>
                                        <span>전체</span>
                                    </li>                                    
                                </ul>
                                )
                                }                                
                                {
                                state.OrangeImage4 && (
                                <ul>
                                    <li>
                                        <span>전체</span>
                                    </li>
                                    <li>                                        
                                        <span>프로</span>
                                    </li>
                                    <li>
                                        <span>스테이크</span>
                                    </li>
                                    <li>
                                        <span>스팀·소프트</span>
                                    </li>
                                    <li>
                                        <span>소스닭가슴살</span>
                                    </li>
                                    <li>
                                        <span>볼·큐브</span>
                                    </li>
                                    <li>
                                        <span>슬라이스</span>
                                    </li>
                                    <li>
                                        <span>훈제</span>
                                    </li>
                                    <li>
                                        <span>냉장·실온보관</span>
                                    </li>
                                    <li>
                                        <span>저염·염분무첨가</span>
                                    </li>
                                    <li>
                                        <span>크리스피</span>
                                    </li>
                                    <li>
                                        <span>소시지·햄</span>
                                    </li>
                                    <li>
                                        <span>생 닭가슴살</span>
                                    </li>
                                    <li>
                                        <span>핫바·어묵바</span>
                                    </li>
                                    <li>
                                        <span>육포</span>
                                    </li>
                                    <li>
                                        <span>스낵·칩</span>
                                    </li>
                                </ul>
                                )
                                }                                
                                {
                                state.OrangeImage5 && (
                                <ul>
                                    <li>
                                        <span>전체</span>
                                    </li>
                                    <li>
                                        <span>브리또</span>
                                    </li>
                                    <li>
                                        <span>핫도그</span>
                                    </li>
                                    <li>
                                        <span>만두·딤섬</span>
                                    </li>
                                    <li>
                                        <span>떡볶이·튀김·순대</span>
                                    </li>
                                    <li>
                                        <span>치킨</span>
                                    </li>
                                    <li>
                                        <span>피자·탕수육</span>
                                    </li>
                                    <li>
                                        <span>라면·쌀국수</span>
                                    </li>
                                    <li>
                                        <span>곤약면·파스타</span>
                                    </li>
                                    <li>
                                        <span>즉석밥·곤약밥</span>
                                    </li>
                                    <li>
                                        <span>삼계탕</span>
                                    </li>
                                    <li>
                                        <span>죽·스프</span>
                                    </li>
                                </ul>
                                )
                                }                                
                                {
                                    state.OrangeImage6 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>다이어트 도시락</span>
                                        </li>
                                        <li>
                                            <span>더담은 도시락</span>
                                        </li>
                                        <li>
                                            <span>간편 도시락</span>
                                        </li>
                                        <li>
                                            <span>비건 도시락</span>
                                        </li>
                                        <li>
                                            <span>볶음밥</span>
                                        </li>
                                        <li>
                                            <span>덮밥·컵밥</span>
                                        </li>
                                        <li>
                                            <span>주먹밥·김밥</span>
                                        </li>
                                        <li>
                                            <span>즉석밥·곤약밥</span>
                                        </li>
                                        <li>
                                            <span>간편 죽</span>
                                        </li>
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage7 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>설도·홍두꺠살</span>
                                        </li>
                                        <li>
                                            <span>스테이크·볼</span>
                                        </li>
                                        <li>
                                            <span>국거리·조리용</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage8 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>돼지고기</span>
                                        </li>
                                        <li>
                                            <span>오리고기</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage9 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>소프트</span>
                                        </li>
                                        <li>
                                            <span>생 안심</span>
                                        </li>
                                        <li>
                                            <span>구이·탕수육</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage10 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>알뜰샐러드</span>
                                        </li>
                                        <li>
                                            <span>토핑샐러드</span>
                                        </li>
                                        <li>
                                            <span>과일</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage11 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>베이커리</span>
                                        </li>
                                        <li>
                                            <span>햄버거</span>
                                        </li>
                                        <li>
                                            <span>치즈</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage12 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>과자·쿠키</span>
                                        </li>
                                        <li>
                                            <span>프로틴 스낵</span>
                                        </li>
                                        <li>
                                            <span>시리얼·바</span>
                                        </li>
                                        <li>
                                            <span>초콜릿</span>
                                        </li>
                                        <li>
                                            <span>젤리·쫀드기</span>
                                        </li>
                                        <li>
                                            <span>아이스크림</span>
                                        </li>
                                        <li>
                                            <span>떡</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage13 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>제로음료</span>
                                        </li>
                                        <li>
                                            <span>우유·두유·요거트</span>
                                        </li>
                                        <li>
                                            <span>물·탄산수</span>
                                        </li>
                                        <li>
                                            <span>프로틴 쉐이크</span>
                                        </li>
                                        <li>
                                            <span>프로틴 음료</span>
                                        </li>
                                        <li>
                                            <span>보충제·부스터</span>
                                        </li>
                                        <li>
                                            <span>커피·차</span>
                                        </li>
                                        <li>
                                            <span>클렌즈·주스</span>
                                        </li>
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage14 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>도시락</span>
                                        </li>
                                        <li>
                                            <span>콩고기</span>
                                        </li>
                                        <li>
                                            <span>콩·두부</span>
                                        </li>
                                        <li>
                                            <span>비건만두</span>
                                        </li>
                                        <li>
                                            <span>빵·스택</span>
                                        </li>
                                        <li>
                                            <span>샐러드</span>
                                        </li>
                                        <li>
                                            <span>음료·두유</span>
                                        </li>
                                        <li>
                                            <span>과일</span>
                                        </li>
                                        <li>
                                            <span>떡볶이</span>
                                        </li>
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage15 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>구운·훈제란</span>
                                        </li>
                                        <li>
                                            <span>반숙란</span>
                                        </li>
                                        <li>
                                            <span>난백·흰자</span>
                                        </li>
                                        <li>
                                            <span>콩·두부</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage16 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>생선구이</span>
                                        </li>
                                        <li>
                                            <span>연어·참치</span>
                                        </li>
                                        <li>
                                            <span>오징어·문어</span>
                                        </li>
                                        <li>
                                            <span>어묵·맛살</span>
                                        </li>
                                        <li>
                                            <span>스테이크</span>
                                        </li>
                                        <li>
                                            <span>갑각류·해조류</span>
                                        </li>
                                        <li>
                                            <span>황태포·쥐포</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage17 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>견과·옥수수</span>
                                        </li>
                                        <li>
                                            <span>고구마·감자</span>
                                        </li>
                                        <li>
                                            <span>단호박</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage18 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>영양제·비타민</span>
                                        </li>
                                        <li>
                                            <span>흑마늘·꿀·홍삼</span>
                                        </li>
                                        <li>
                                            <span>다이어트 보조제</span>
                                        </li>
                                        <li>
                                            <span>콜라겐</span>
                                        </li>
                                        <li>
                                            <span>과일·건강즙</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage19 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>햄·소시지</span>
                                        </li>
                                        <li>
                                            <span>잡채</span>
                                        </li>
                                        <li>
                                            <span>카레·짜장·짬뽕</span>
                                        </li>
                                        <li>
                                            <span>건강반찬</span>
                                        </li>
                                        <li>
                                            <span>국·탕·찌개</span>
                                        </li>
                                        <li>
                                            <span>참치</span>
                                        </li>
                                        <li>
                                            <span>건강 안주</span>
                                        </li>
                                        <li>
                                            <span>밀키트</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage20 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>소스·드레싱</span>
                                        </li>
                                        <li>
                                            <span>과일청</span>
                                        </li>
                                        <li>
                                            <span>잼·스프레드</span>
                                        </li>
                                        <li>
                                            <span>오일</span>
                                        </li>
                                        <li>
                                            <span>분말·시즈닝</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage21 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>식단</span>
                                        </li>
                                        <li>
                                            <span>맛보기·패키지</span>
                                        </li>
                                        <li>
                                            <span>선물세트</span>
                                        </li>
                                        <li>
                                            <span>골라담기</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage22 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>닭가슴살</span>
                                        </li>
                                        <li>
                                            <span>동결건조사료</span>
                                        </li>
                                        <li>
                                            <span>영양식품</span>
                                        </li>
                                        <li>
                                            <span>간식</span>
                                        </li>
                                        <li>
                                            <span>우유/두유</span>
                                        </li>                                        
                                    </ul>
                                    )
                                }
                                {
                                    state.OrangeImage23 && (
                                    <ul>
                                        <li>
                                            <span>전체</span>
                                        </li>
                                        <li>
                                            <span>스트랩·장갑</span>
                                        </li>
                                        <li>
                                            <span>보호대·밴드</span>
                                        </li>
                                        <li>
                                            <span>보틀·쉐이커</span>
                                        </li>
                                        <li>
                                            <span>홈트레이닝</span>
                                        </li>
                                        <li>
                                            <span>스포츠웨어</span>
                                        </li>
                                        <li>
                                            <span>데일리웨어</span>
                                        </li>
                                        <li>
                                            <span>굿즈</span>
                                        </li>
                                        <li>
                                            <span>홈·리빙용품</span>
                                        </li>
                                    </ul>
                                    )
                                }
                            </div>
                            <div className="center">
                                <nav> 
                                    <Link to="/sub1">랭킹</Link>
                                    <Link to="/sub2">이달의 특가</Link>
                                    <Link to="/sub3">혜택정리</Link>
                                    <Link to="/sub4">1팩 담기</Link>
                                    <Link to="/sub5">브랜드관</Link>
                                    <Link to="/sub6">이벤트</Link>
                                </nav>
                            </div>
                            <div className="right">
                                <Link to="/sub7"><img src="./images/intro/header/IMG1648CEL614146730.png" alt="" /></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>                
            </header>
            <Outlet/>
        </>
    )
}