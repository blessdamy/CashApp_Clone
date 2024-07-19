import React from "react";
import "./Bank.css";
import Button from "../Reusables/Button/Button";

const Bank = () => {
  return (
    <div className="bank" id="bank">
      <div className="bank_txt_div">
        <h1 className="bank_txt heading-2">
          <span>Bank</span>
          <span>The Way</span>
          <span>You Want</span>
        </h1>

        <div className="bank_txt-2-container">
          <div className="bank_txt-2-div">
            <div className="bank_btn_div">
              <Button btn_className="bank_btn" />
            </div>
            <div>
              <h2 className="bank_txt-2">
                A faster, simpler way to
                <br /> bank—without all the fees
              </h2>
            </div>
          </div>

          <div className="bank_paragraph_div">
            <p className="bank_paragraph heading_paragraph">
              Cash App is a financial services platform, not a bank. Banking
              services are provided by Cash App’s bank
              <br />
              partner(s). Prepaid debit cards issued by Sutton Bank.
            </p>
          </div>
        </div>
      </div>

      <div>
        <figure className="combined_images">
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/3xQzbkOMxYsSaVLCIQJeLr/117002d85d92cb72b744116d363a4b2e/bank_desktop_layer_01.webp"
            alt=""
            className="image-1"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/2inoSfPR3ROyR5SWL1VHND/e6fec27f8aba56c7725aa22e8a4c54a8/bank_desktop_layer_02.webp"
            alt=""
            className="image-2"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/29MVRQN52gZ5mzeERWn7fl/6e0905fb853df590526d2d6c8cac7787/bank_desktop_layer_03.webp"
            alt=""
            className="image-3"
          />
        </figure>
      </div>
    </div>
  );
};

export default Bank;
