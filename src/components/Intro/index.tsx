import React from "react";
import { Parallax } from "react-scroll-parallax";
import bg from "../../assets/intro.jpeg";
import "./style.css"

const Intro = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Transparent to Solid Nav
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Another Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="image">
        <h1 className="heading">Main Heading</h1>
        <p>
          <button className="btn btn-large">Big Button</button>
        </p>
      </div>
      <div className="about">
        <h2>Main Description</h2>
        <p>
          Roll on the floor purring your whiskers off intrigued by the shower
          burrow under covers, and play time, rub face on everything, intently
          sniff hand, or pelt around the house and up and down stairs chasing
          phantoms. Attack feet. Damn that dog shake treat bag under the bed
          drink water out of the faucet for lick butt love to play with owner's
          hair tie. Swat at dog give attitude.
        </p>
      </div>
    </div>
  );
};

export default Intro;
