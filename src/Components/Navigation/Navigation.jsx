import React from "react";
import "./Navigation.css";
import CashAppLogo from "../SVG/CashAppLogo";
import Button from "../Reusables/Button/Button";
import OpenMenuIcon from "../SVG/OpenMenuIcon";

const Navigation = () => {
  return (
    <nav className="container nav">
      <div className="cashApp_logo">
        <CashAppLogo />
      </div>
      <div className="nav_right_side">
        <div>
          <Button />
        </div>
        <div>
          <OpenMenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
