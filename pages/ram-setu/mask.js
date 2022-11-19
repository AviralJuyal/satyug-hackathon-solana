import React from "react";
// import "../../assets/css/Mask.css";
import Image from 'next/image';

const Mask = () => {
  return (
    <div className="d-flex ">
      <div className=" d-flex mask"></div>
      <Image
        src={require("../../assets/images/hanuman.png")}
        className="hanuman d-flex align-items-center"
        alt="Hanuman img"
      />
    </div>
  );
};

export default Mask;
