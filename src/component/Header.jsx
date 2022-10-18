import React from "react";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <header className="Header">
      <div className="hd_items">
        <button>메뉴버튼</button>
        <nav className="gnb">
          <ul>
            <li>
              <Link to="home" smooth="true" duration={1000}>
                <h2>home</h2>
              </Link>
            </li>
            <li>
              <Link to="about" smooth="true" duration={1000}>
                <h2>about</h2>
              </Link>
            </li>
            <li>
              <Link to="project" smooth="true" duration={1000}>
                <h2>project</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
