import React, { useState } from "react";
import "./Hero.css";
import hero_video from "../../videos/heroVideo.mp4";
import BarCode from "../Reusables/BarCode/BarCode";
import { Link } from "react-scroll";
import { CgPlayPauseR } from "react-icons/cg";


const Hero = () => {
  const [navCount, setNavCount] = useState(0);
  

  return (
    <div className="hero">
      <nav className="navigation-dots_container">
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <div
            onClick={() => setNavCount(0)}
            className={`navigation-dots ${
              navCount === 0 ? "navigation-dots_active" : "inActive"
            }`}
          ></div>
        </Link>

        <Link to="pay" smooth={true} offset={0} duration={500}>
          <div
            onClick={() => setNavCount(1)}
            className={`navigation-dots ${
              navCount === 1 ? "navigation-dots_active" : "inActive"
            }`}
          ></div>
        </Link>
        <Link to="save" smooth={true} offset={0} duration={500}>
          <div
            onClick={() => setNavCount(2)}
            className={`navigation-dots ${
              navCount === 2 ? "navigation-dots_active" : "inActive"
            }`}
          ></div>
        </Link>
        <Link to="bank" smooth={true} offset={0} duration={500}>
          <div
            onClick={() => setNavCount(3)}
            className={`navigation-dots ${
              navCount === 3 ? "navigation-dots_active" : "inActive"
            }`}
          ></div>
        </Link>
        <Link to="believe" smooth={true} offset={0} duration={500}>
          <div
            onClick={() => setNavCount(4)}
            className={`navigation-dots ${
              navCount === 4 ? "navigation-dots_active" : "inActive"
            }`}
          ></div>
        </Link>
        <Link to="slide" smooth={true} offset={0} duration={500}>
          <div
            onClick={() => setNavCount(5)}
            className={`navigation-dots ${
              navCount === 5 ? "navigation-dots_active" : "inActive"
            }`}
          ></div>
        </Link>
      </nav>
      <div className="pause"><CgPlayPauseR className="pause_play"/></div>
      <video className="hero_background" autoPlay loop muted>
        <source src={hero_video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="hero_text_div">
        <h1 className="hero_text heading-2">
          <span>Do More</span>
          <span>With Your</span>
          <span>
            Money
            <BarCode bar_code="bar-code-noBackgrd" />
          </span>
        </h1>
        <div className="hero_txt-2-div">
          <h2 className="hero_txt-2">
            Send and spend, bank*, and buy stocks or bitcoin**
          </h2>
        </div>
        <div className="hero_paragraph_div">
          <p className="hero_paragraph heading_paragraph">
            Cash App is a financial services platform, not a bank. Banking
            services are provided by Cash
            <br /> App’s bank partner(s). Prepaid debit cards issued by Sutton
            Bank. Brokerage services by
            <br /> Cash App Investing LLC, member FINRA/SIPC, subsidiary of
            Block, Inc. Bitcoin services
            <br /> provided by Block, Inc, formerly known as Square, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
