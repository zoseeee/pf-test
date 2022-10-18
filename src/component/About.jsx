import React from "react";
import 'animate.css';

const About = () => {
  return (
    <section className="About" id="about">
      <div className="inner">
        <div className="left-box">
          <div className="about-title-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/image/anti.svg"}
              alt=""
            />
          </div>
          <p>
          : anti(반대) + fragile(부서지기 쉬운)의 합성어로, 시련을 맞을수록 더욱 단단해진다.
          </p>
          <p>
            “To infinity and beyond!” <br />
            무한한 세계로 나아가고 싶은 블라블라라 프론트엔드 개발자 이정은입니다.
          </p>
        </div>
        <div className="spaceman animate__animated animate__swing animate__infinite	infinite">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/about.png"}
            alt=""
          />
        </div>
      </div>
      <div className="earth">
        <img src={process.env.PUBLIC_URL + "/assets/image/earth.png"} alt="" />
      </div>
      <div className="forest">
        <img src={process.env.PUBLIC_URL + "/assets/image/Forest.png"} alt="" />
      </div>
    </section>
  );
};

export default About;
