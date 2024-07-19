import React from "react";
import "./Button.css";

const Button = ({ btn_className = "" }) => {
  return (
    <>
      <button type="button" className={`button ${btn_className}`}>
        Log in
      </button>
    </>
  );
};

export default Button;
