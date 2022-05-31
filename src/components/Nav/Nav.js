import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav(){
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/product">
                Product
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
    }
    export default Nav;