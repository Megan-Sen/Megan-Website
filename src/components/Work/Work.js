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
            imageRef.current.src = secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src = primaryImg;
          }}
          src={primaryImg}
          alt=""
          ref={imageRef}
        />
    </>
  );
}   //Work compmonent
   

    export default Work;