import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const DB = [
  {
    id: 1,
    content: "2022 BIFF",
    info: "2022 부산국제영화제의 메인페이지를 리디자인하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 2,
    content: "HINCE",
    info: "HINCE 메인페이지를 리디자인하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 3,
    content: "JASENG",
    info: "자생한방병원의 메인페이지를 리디자인하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 4,
    content: "KIZANIA",
    info: "키자니아의 메인페이지를 리디자인하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 5,
    content: "JAKOMO",
    info: "자코모의 메인페이지를 리디자인하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 6,
    content: "GOPIZZA",
    info: "GOPIZZA의 메인페이지를 리디자인하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
  },
];

const Project02 = () => {
  SwiperCore.use([Navigation]);

  return (
    <section className="Project" id="project">
      <header className="project-title">
        <h2>MY PROJECT</h2>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/portfolio-2022"
            >
              <span>REACT</span>
              01
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project02"
            >
              <span>JavaScript</span>
              02
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project03"
            >
              <span>TOY</span>
              03
            </NavLink>
          </li>
        </ul>
      </header>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="project-swiper"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {DB.map((slide, idx) => (
          <SwiperSlide className="swiper_items">
            <div className="slide-content">
              <figure className="left-box">
              <img
                  src={process.env.PUBLIC_URL + "/assets/image/project02_draft0" + (idx + 1) + ".png"}
                  alt=""
                />
              </figure>
              <div className="right-box">
                <h3>{slide.content}</h3>
                <p>{slide.info}</p>
                <ul>
                  <li>
                    <span>TYPE</span>
                    <p>{slide.type}</p>
                  </li>
                  <li>
                    <span>WORK</span>
                    <p>{slide.work}</p>
                  </li>
                  <li>
                    <span>TOOLS</span>
                    <p>{slide.tools}</p>
                  </li>
                  <li>
                    <span>FONT</span>
                    <p>{slide.font}</p>
                  </li>
                  <li>
                    <span>COLOR</span>
                    <p>{slide.color}</p>
                  </li>
                </ul>
                <div>
                  <button>WebPage</button>
                  <button>StyleGuide</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project02;
