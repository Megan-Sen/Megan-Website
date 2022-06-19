import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
// import hero from "./collage.jpg";


export default function Home() {
  return (
    <>
      <div id="home-main">
        <div className="js1"></div>
        <div className="js2"></div>
        <div className="js3"></div>
        <div className="js4"></div>
        <div className="js5"></div>
        <div className="js6"></div>
      </div>
      <div className="fixed-footer">
        <Footer />
      </div>
    </>
  );
}
