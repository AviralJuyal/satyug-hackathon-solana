import React, { useEffect,useState, useRef } from "react";
import { useRouter } from "next/router";
// import "../assets/css/TransitionOne.css";
// import image from "../assets/images/image.png";
// import hanuman from "../assets/images/hanuman.png";
// import audIntro from "../assets/audio/audIntro.mp3";
import Image from 'next/future/image'
import initialImage from "../assets/images/initial-image.png";

import { useNavigate } from "react-router-dom";
const TransitionOne = () => {
  const [hide, setHide] = useState('');
  const homeVideo = "https://res.cloudinary.com/dde6glimb/video/upload/v1665922516/intro_gupbp5.mp4";
const homeVideo2 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665922512/renderAfterPlay_zb6lxg.mp4";
  const ref = useRef(null);
  
  const [vidIndex,setVidIndex]=useState(0);
  // const audio = new Audio(audIntro);
  // const start = () => {
  //   audio.play();
  // };
const navigate = useRouter().push;

  useEffect(() => {
    // audio.play();
  }, []);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  function playVideo(e){
    console.log(e.target);
    // e.target.style.display = "none";
    setHide('d-none');
    const videoPlay = ref.current;
    videoPlay.play();
  }

  return (
    <div className="parentDiv">
    
      <Image className={`initialImage ${hide}`} src={initialImage} alt="Front" onClick={(e)=>{
        playVideo(e);
      }}/>

      {/* <video  autoPlay className="homeVideo" id="myVideo"  ref={ref} onEnded={() => setVidIndex((idx) => idx + 1)}>
        <source src={homeVideo} type="video/mp4"/>
      </video>

       <video className="homeVideo2" id="myVideo"  ref={ref} >
        <source src={homeVideo2} type="video/mp4"/>
      </video>   */}

       <video
       className="homeVideo" id="myVideo"
       playsInline
       ref={ref}
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={homeVideo}
        autoPlay
        onEnded={() => setVidIndex((idx) => idx + 1)}
      />
      
      {vidIndex===0?"":
        <video
        className="homeVideo" id="myVideo"
        playsInline
          src={homeVideo2}
          ref={ref}
          autoPlay
          onEnded={()=>{navigate("/ram-setu/setu")}}
        />
      }
 
    </div>
  );
};

export default TransitionOne;
