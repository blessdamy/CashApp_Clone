import React from "react";
import "./Pay.css";
import Button from "../Reusables/Button/Button";

const Pay = () => {
  return (
    <div className="pay" id="pay">
      <div className="images_container">
        <div className="pay_txt_div">
          <h1 className="pay_txt heading-2">
            <span>Pay</span>
            <span>Anyone</span>
            <span>Instantly</span>
          </h1>

          <div className="pay_txt-2-container">
            <div className="pay_txt-2-div">
              <div className="pay_btn_div">
                <Button btn_className="pay_btn" />
              </div>
              <div>
                <h2 className="pay_txt-2">
                  It’s free to send and receive money,
                  <br />
                  stocks, or bitcoin** within Cash App.
                </h2>
              </div>
            </div>
            <div className="pay_paragraph_div">
              <p className="pay_paragraph heading_paragraph">
                Cash App is a financial services platform, not a bank. Banking
                services are provided by Cash App’s bank
                <br /> partner(s). Prepaid debit cards issued by Sutton Bank.
                Brokerage services by Cash App Investing LLC,
                <br /> member FINRA/SIPC, subsidiary of Block, Inc. Bitcoin
                services provided by Block, Inc, formerly known as Square,
                <br /> Inc.
              </p>
            </div>
          </div>
        </div>

        <figure className="combined_images">
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/tNVzSyTyL12aLV0AVJDPa/55824ff57503cee90f7916be5e172705/send_desktop_layer_01.webp"
            alt="aesthetic background"
            className="image-1"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/2x4qXq9goGRMAxzfv2hXgW/fbc8c9b6e9e0a34e82d3369078cd110f/send_desktop_layer_02.webp"
            alt="aesthetic background"
            className="image-2"
          />
        </figure>
      </div>
    </div>
  );
};

export default Pay;
