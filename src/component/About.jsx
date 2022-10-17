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
            : anti(반대) + fragile(부서지기 쉬운)의 합성어로, 충격을 받으면
            오히려 더욱 단단해진다는 뜻
          </p>
          <p>
            개인적으로 좋아하는 단어입니다. 실패를 두려워하지 않고 계속 도전하며
            저만의 세계를 넓혀가는 것을 좋아합니다.
          </p>
          <p>
            “To infinity and beyond!” <br />
            무한한 세계로 나아가고 싶은 프론트엔드 개발자 이정은입니다.
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
      <div className="forest">
        <img src={process.env.PUBLIC_URL + "/assets/image/Forest.png"} alt="" />
      </div>
    </section>
  );
};

export default About;
