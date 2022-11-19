import classes from "../assets/cssModules/satyug.module.css";
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import satyugLogo from "../assets/images/satyugLogo.png";
import React, { useRef, useState, useEffect } from "react";
import {
  useWindowWidth,
} from '@react-hook/window-size'

const Dhyana = () => {
  const [VideoOn, SetVideoOn] = useState(false);
  const [v,setv] =useState( "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4");

 
  let screenWidth = useWindowWidth();
  console.log(screenWidth);
  useEffect(() => {
    const t =
  screenWidth > 600
      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4"
      : "https://res.cloudinary.com/dde6glimb/video/upload/v1666419775/M-1_-_Compressed_with_FlexClip_dpfv1b.mp4";
  // let v = "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4";

  setv(t);
  }, [v,screenWidth]);
  
  // const navigate = useNavigate();
  const router = useRouter()
  const refVid = useRef();
  return (
    <>
      <div className="App">
        <div className="text-center clickToEnter" id="clickText">
          <div className={classes.linkHome}>
            <div
              className={classes.clickEnterText}
              onClick={() => {
                refVid.current.play();
                document.getElementById("clickText").style.display = "none";
                SetVideoOn(true);
              }}
            >
              Click to Enter{" "}
            </div>
            &nbsp;
            <div
              className={classes.clickEnterText}
              onClick={() => {
                router.push("/about");
              }}
            >
              About Us
            </div>
          </div>
          <Image src={satyugLogo} height="200" width='200' alt="Satyug Logo" className={classes.imageLogo} />
        </div>
        <div className={classes.container}>
          <video
            src={v}
            className={classes.vidStyles}
            playsInline
            onEnded={() => router.push("/navigator")}
            ref={refVid}
          />
        </div>
        {VideoOn && (
          <button
            className="SkipButtonUniversal"
            onClick={() => router.push("/navigator")}
          >
            <div className="SkipButtonUniversalContainer">
              Skip
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-skip-forward"
                viewBox="0 0 16 16"
              >
                <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

export default Dhyana;

