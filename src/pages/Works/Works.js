import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Works.css";
import Footer from "../../components/Footer/Footer";
import Work from "../../components/Work/Work";
 import finalproject from "./fina--project.png";
 import tvshow from "./tv-show.png";
 import cakeshop from "./cake.png";
import bg1 from "./bg1.png";
import bg2 from "./bg2.png";
import bg3 from "./bg3.png";
import hover1 from "./bg4.png";
import hover2 from "./bg5.png";
import hover3 from "./bg6.png";

const worksImages = [
  { img: bg1, img2: finalproject, url: "#", title:"Website for SensetionalLife", date:"February 2022"},
  { img: bg2, img2: tvshow, url: "https://tv-show-project-cyf.netlify.app", title:"TV SHOW",date:"October 2021" },
  { img: bg3, img2: cakeshop, url: "https://cakeshop-website.netlify.app", title:"Website for Cake Shop", date:"June 2021" },
];


export default function Works() {
  return (
    <>
      <div className="works-conteiner">
        {/* <div>
          <Work primaryImg={bg1} secondaryImg={hover1} alt="" />
          &nbsp; &nbsp; &nbsp;
          <Work primaryImg={bg2} secondaryImg={hover2} alt="" />
          &nbsp; &nbsp; &nbsp;
          <Work primaryImg={bg3} secondaryImg={hover3} alt="" />
        </div> */}

        
          {worksImages.map((work, index) => (
            <div className="work-container">
              <a href={work.url}>
                <Work
                  primaryImg={work.img}
                  secondaryImg={work.img2}
                  alt=""
                  key={index}
                />
              </a>
              <p className="work-title">{work.title}</p>
              <p className="work-date">{work.date}</p>
            </div>
          ))}
        
      </div>
      <Footer />
    </>
  );
}
