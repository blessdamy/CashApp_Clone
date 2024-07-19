import React from "react";
import "./PreLoader.css";
import { FaDollarSign } from "react-icons/fa";

const PreLoader = () => {
  return (
    <div className="pre">
      <div>
        <FaDollarSign className="preI"/>
      </div>
    </div>
  );
};

export default PreLoader;
