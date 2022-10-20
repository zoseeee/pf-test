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
    content: "YouTube",
  },
  {
    id: 1,
    content: "Spotify",
  },
  {
    id: 2,
    content: "2022 PORTFOLIO",
  },
];

const Project = () => {
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
        {DB.map((slide) => (
          <SwiperSlide className="swiper_items">
            <div className="slide-content">
              <figure className="left-box">
                <img
                  src={process.env.PUBLIC_URL + "/assets/image/MAC.png"}
                  alt=""
                />
              </figure>
              <div className="right-box">
                <h3>{slide.content}</h3>
                <p>힌스의 메인페이지를 리디자인하였습니다.</p>
                <ul>
                  <li>
                    <span>TYPE</span>
                    <p>개인페이지</p>
                  </li>
                  <li>
                    <span>WORK</span>
                    <p>개인작업 100%</p>
                  </li>
                  <li>
                    <span>TOOLS</span>
                    <p>HTML5 CSS JavaScript Figma</p>
                  </li>
                  <li>
                    <span>FONT</span>
                    <p>Noto Sans KR</p>
                  </li>
                  <li>
                    <span>COLOR</span>
                    <p>개인페이지</p>
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

export default Project;
