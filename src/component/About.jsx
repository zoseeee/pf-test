import React from "react";

const About = () => {
  return (
    <section className="About" id="about">
      <div className="inner">
        <div className="left-box">
          <div className="about-title-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/image/test_anti01.png"}
              alt=""
            />
          </div>
          <p className="anti">
            : anti(반대) + fragile(부서지기 쉬운)의 합성어로, 시련을 맞을수록
            더욱 단단해진다.
          </p>
          {/* <p className="beyond">“To infinity and beyond!”</p> */}
          <p className="name">
            안녕하세요?
            <br />
            실패를 원동력으로 성장하는🚀 프론트엔드 개발자 이정은입니다?
          </p>
        </div>
        <div className="spaceman">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/about.png"}
            alt=""
          />
        </div>
      </div>
      <div className="earth">
        <img src={process.env.PUBLIC_URL + "/assets/image/earth.png"} alt="" />
      </div>
      <div className="toil">
        <img src={process.env.PUBLIC_URL + "/assets/image/toil.png"} alt="" />
      </div>
    </section>
  );
};

export default About;
