import React from "react";

const Home = () => {
  return (
    
      <div className="Home" id="home">
        <div className="title-box">
          <div className="year">
            <img
              src={process.env.PUBLIC_URL + "/assets/image/2022.svg"}
              alt=""
            />
          </div>
          <div className="title-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/image/pf-title.svg"}
              alt=""
            />
          </div>
          <span className="name">LEE JEONG EUN</span>
        </div>
        <div className="animation-box">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
          <div className="d"></div>
          <div className="e"></div>
          <div className="f"></div>
          <div className="g"></div>
          <div className="h"></div>
          <div className="i"></div>
          <div className="j"></div>
        </div>
        <div className="cloud">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/cloud.png"}
            alt=""
          />
        </div>
      </div>
  );
};

export default Home;
