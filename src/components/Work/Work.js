import React, { useRef } from 'react';
// import {Link} from "react-router-dom";
import "./Work.css";

 //Work compmonent
const Work = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <>
        <img
          className="work-card-img"
          onMouseOver={() => {
            imageRef.current.src = primaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src = secondaryImg;
          }}
          src={secondaryImg}
          alt=""
          ref={imageRef}
        />
    </>
  );
}   //Work compmonent
   

    export default Work;