import React, { useRef, useState } from "react";
import "./Download.css";
import download_video from "../../videos/heroVideo.mp4";
import BarCode from "../Reusables/BarCode/BarCode";
import { CgPlayPauseR } from "react-icons/cg";
import { LuPlaySquare } from "react-icons/lu";

const Download = () => {
  const [playStatus, setPlayStatus] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (playStatus) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayStatus(!playStatus);
  };
  return (
    <div className="download_container">
      <div className="download">
        <video className="download_video" autoPlay loop muted ref={videoRef}>
          <source src={download_video} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="download_txt_div">
          <h2 className="download_txt">
            Download Cash App to
            <br /> get started
          </h2>
          <BarCode bar_code="bar-code-Backgrd" />
        </div>
        <div onClick={handlePlayPause} className="pause">
          {playStatus ? (
            <CgPlayPauseR className="pause_play" />
          ) : (
            <LuPlaySquare className="pause_play" />
          )}
        </div>
      </div>

      <div>
        <h3 className="explore">
          Explore
          <br />
          More
        </h3>
        <div className="image-container">
          <div className="img-1">
            <img
              src="https://images.ctfassets.net/jwea2w833xe7/5IHRp3FJFUfMR75OnnOFbx/7372362d9b0bf2f0dc3c9e6ed143e95f/taxes.webp"
              width="532"
              height="730"
              alt=""
            />
          </div>
          <div className="img-2">
            <img
              src="https://images.ctfassets.net/jwea2w833xe7/3sZtIvIKErgyqTNGtGRPSX/d37faf74bac8c421ec5e33a23d457ca5/families.webp"
              width="532"
              height="730"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
