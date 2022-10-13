import React from "react";

const MainVisual = () => {
  return (
    <div className="MainVisual" id="home">
      <div className="title-box">
        <div className="year">
          <img src={process.env.PUBLIC_URL + "/assets/image/2022.svg"} alt="" />
        </div>
        <div className="title-img">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/pf-title.svg"}
            alt=""
          />
        </div>
        <span className="name">LEE JEONG EUN</span>
      </div>
    </div>
  );
};

export default MainVisual;
