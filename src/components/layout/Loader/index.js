import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-circle">
          <div className="loader-circle-inner"></div>
        </div>
        <h2 className="loader-title">Venkat Pantham</h2>
        <p className="loader-subtitle">Portfolio</p>
      </div>
    </div>
  );
};

export default Loader;
