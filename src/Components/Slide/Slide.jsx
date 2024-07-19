import React from "react";
import "./Slide.css";
import Button from "../Reusables/Button/Button";

const Slide = () => {
  return (
    <div className="slide" id="slide">
      <div className="slide_txt_div">
        <h1 className="slide_txt heading-2">
          <span>slide into</span>
          <span>the stock</span>
          <span>Market</span>
        </h1>

        <div className="slide_txt-2-container">
          <div className="slide_txt-2-div">
            <div className="slide_btn_div">
              <Button btn_className="slide_btn" />
            </div>
            <div>
              <h2 className="slide_txt-2">
                Investing** is simple, whether you’re
                <br /> new to it or already have a portfolio
              </h2>
            </div>
          </div>

          <div className="slide_paragraph_div">
            <p className="slide_paragraph heading_paragraph">
              Brokerage services by Cash App Investing LLC, subsidiary of Block,
              Inc., member FINRA/SIPC. Investing involves risk;
              <br /> you may lose money.
            </p>
          </div>
        </div>
      </div>
      <div>
        <figure className="combined_images">
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/6E9Rp3NhTJzMJK9UNaNC0f/885f8da7bf14c8de80343fe30ff05dd0/stocks_desktop_layer_01.webp"
            alt=""
            className="image-1"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/aq2P2631a2H4RZX0NvbYe/e9b8868baa96bf5dd73cddcbfd478f31/stocks_desktop_layer_02.webp"
            alt=""
            className="image-2"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/7oBXwDaMiXkI8aSZ89aeZb/74d42545dbaeeeeb78b87a0c8b5bc2eb/stocks_desktop_layer_03.webp"
            alt=""
            className="image-3"
          />
        </figure>
      </div>
    </div>
  );
};

export default Slide;
