import React from "react";
import { Link } from "react-scroll/modules";
import 'animate.css';

const Home = () => {
  return (
    <section className="Home animate__fadeIn" id="home">
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
      <Link to="about" smooth="true" duration={1000}>
        <button>버튼</button>
      </Link>
    </section>
  );
};

export default Home;
