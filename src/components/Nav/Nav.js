import React from "react";
import { BrowserRouter as Link} from "react-router-dom";
import "./Nav.css";

function Nav(){
    return (
      <>
         <nav> 
        <ul className=""> 
         <li>
                <Link to="/">Home</Link>
              </li> 
         <li>
                <Link to="/about">About
                </Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul> 
        </nav> 
      </>
    );
    }
    export default Nav;