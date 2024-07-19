import React from "react";
import "./Believe.css";
import Button from "../Reusables/Button/Button";

const Believe = () => {
  return (
    <div className="believe" id="believe">
      <div className="believe_txt_div">
        <h1 className="believe_txt heading-2">
          <span>Believe</span>
          <span>You Can</span>
          <span>Bitcoin</span>
        </h1>

        <div className="believe_txt-2-container">
          <div className="believe_txt-2-div">
            <div className="believe_btn_div">
              <Button btn_className="believe_btn" />
            </div>
            <div>
              <h2 className="believe_txt-2">
                The easy way to buy, sell,
                <br /> send, and receive bitcoin**
              </h2>
            </div>
          </div>

          <div className="believe_paragraph_div">
            <p className="believe_paragraph heading_paragraph">
              Bitcoin services provided by Block, Inc. Trading bitcoin involves
              risk; you may lose money.
              <br /> Cash App Investing, LLC. does not trade bitcoin and Block,
              Inc. is not a member of
              <br /> FINRA or SIPC.
            </p>
          </div>
        </div>
      </div>

      <div>
        <figure className="combined_images">
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/61Ug4d0XOezp3bu1cpNsom/da1688705a97d015fab0268d7fb2d047/bitcoin_desktop_layer_01.webp"
            alt=""
            className="image-1"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/6aazlU0Nr4IkIseqSw6KIe/548ee383721a34ebe059e00d30135037/bitcoin_desktop_layer_02.webp"
            alt=""
            className="image-2"
          />
          <img
            loading="eager"
            src="https://images.ctfassets.net/jwea2w833xe7/3cguGUsxMLZ379OOlrvCdn/f7b0c1c8c20970b108b537668d2e28b5/bitcoin_desktop_layer_03.webp"
            alt=""
            className="image-3"
          />
        </figure>
      </div>
    </div>
  );
};

export default Believe;
