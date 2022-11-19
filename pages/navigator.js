import { useRouter } from 'next/router';
import React from 'react';
// import { useNavigate } from "react-router-dom";
// import "../assets/css/navigator.css"
const Navigator = () => {
    const navigate = useRouter().push;
    return (
        <div className='navigatorImage'>
            <div className='navigateDarshana' onClick={()=>{navigate("/ram-setu");}}></div>
            <div className='navigateDhyana' onClick={()=>navigate("/dhyana")}></div>   
            <div className='navigateYog' onClick={()=>navigate("/yog")}></div>   
            <div className='navigateKriya' onClick={()=>navigate("/coming-soon")}></div>      
            
        </div>
    );
};

export default Navigator;