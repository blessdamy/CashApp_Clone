import React from "react";
import "./Save.css";
import Button from "../Reusables/Button/Button";

const Save = () => {
  return (
    <div className="save" id="save">
      <div className="save_txt_div">
        <h1 className="save_txt heading-2">
          <span>SAVE ON</span>
          <span>Everyday</span>
          <span>Spending</span>
        </h1>

        <div className="save_txt-2-container">
          <div className="save_txt-2-div">
            <div className="save_btn_div">
              <Button btn_className="save_btn" />
            </div>
            <div>
              <h2 className="save_txt-2">
                Get exclusive discounts with Cash
                <br /> App Pay and the Cash App Card
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <figure className="combined_images">
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/4JXTiMn8DtfCYCkWF1O2Lo/2c7850f30a09cc2fe9fdc7933cd8c191/spend_desktop_layer_01.webp"
            alt=""
            className="image-1"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/1eRfoUBQ1mHQFy7tXu70BG/1e43ded5c7a9117e7b61e81e7e19e5af/spend_desktop_layer_02.webp"
            alt=""
            className="image-2"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/2X137JOihK3cOkU56EBJnR/0cdc8fc4f86cc6fc7ad2d657da296b98/spend_desktop_layer_03.webp"
            alt=""
            className="image-3"
          />
        </figure>
      </div>
    </div>
  );
};

export default Save;


