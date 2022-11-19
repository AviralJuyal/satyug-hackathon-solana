import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
// import "../../assets/css/Setu.css";
import chat from "../../assets/images/calll-1.png";
import stone from "../../assets/images/stone.png";
import Image from 'next/future/image';
import { useRouter } from 'next/router';
// import after_video from "../../assets/video/afterSetu.mp4";
import full_Setu_pic from '../../assets/images/setu_full_pic.jpg';
import { Fireworks } from '@fireworks-js/react'

const Setu = () => {
  const background_video = "https://res.cloudinary.com/dde6glimb/video/upload/v1665922517/setuvid_gtxhp9.mp4";
  const [Goalposition, setGoalPosition] = useState({ x: 0, y: 0 });
  const [Stoneposition, setStonePosition] = useState({ x: 0, y: 0 });
  const [Complete, SetComplete] = useState(false);
  const Goal = useRef();
  const stony = useRef();
  const trackPos = () => {
    const GoalX = Goal.current.getBoundingClientRect().left;
    const GoalY = Goal.current.getBoundingClientRect().top;
    const StoneX = stony.current.getBoundingClientRect().left;
    const StoneY = stony.current.getBoundingClientRect().top;
    setGoalPosition({ x: Math.round(GoalX), y: Math.round(GoalY) });
    setStonePosition({ x: Math.round(StoneX), y: Math.round(StoneY) });
  };
  const CheckCollide = (GoalX, GoalY, StoneX, StoneY) => {
    if (
      (StoneX >= GoalX - 20 || StoneX <= GoalX + 20) &&
      // StoneY === GoalY &&
      !(StoneY <= GoalY - 20 || StoneY >= GoalY + 20) &&
      StoneX !== 0
    ) {
      SetComplete(true);
    }
  };
  const navigate = useRouter().push;

  if(Complete){
    setTimeout(()=>{navigate("/ram-setu/contact")}, 5000)
  }

  useEffect(() => {
    if (Complete === false) {
      CheckCollide(
        Goalposition.x,
        Goalposition.y,
        Stoneposition.x,
        Stoneposition.y
      );
    }
  }, [Goalposition, Stoneposition, Complete]);

  const [isDragging, setDragging] = useState(false);
  return (
    <div className="App">
    <video autoPlay muted loop id="myBGVideo">
      <source src="https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4" type=""></source>
    </video>
    <div className="imgContainer">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="BackgroundVideoContainer"
        src={
          // Complete === false ? 
          background_video
          //  : after_video
          }
      ></video>
      <Image src={full_Setu_pic} className="BackgroundVideoContainer full_pic"  alt="full pic" />
      {Complete === false ? (
        <Draggable
          onDrag={() => {
            if (Complete === false) {
              trackPos();
            }
            setDragging(true);
          }}
          onStop={() => {
            setDragging(false);
          }}
        >
          <div className="stone"  ref={stony}>
          <Image
            src={stone}
            alt="stone"
            className={"stone" + (isDragging ? " " : " highlight")}
          /></div>
        </Draggable>
      ) : null}
      {Complete === false ? (
        <div className="Goal" ref={Goal}></div>
      ) : // <img src={stone} alt="fixed-stone" className="stone-fixed" />
      null}
      <div className="chatContainer">
        {Complete === false ? (
          <Image src={chat} alt="chat" className="chat" />
        ) : // <img src={chat2} alt="chat" className="chat" />
        null}
      </div>
      {Complete ? 
        <Fireworks
        
        options={{ opacity: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          maxWidth:'500px',
          position:'fixed',
          zIndex: 5,

        
        }}
      />
       : null}
    </div>
    </div>
  );
};

export default Setu;
