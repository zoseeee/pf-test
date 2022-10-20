import React from "react";
import { Link } from "react-scroll/modules";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header className="Header">
      <div className="hd_wrapper">
        <button onClick={() => toggleMenu()}>
          <div className={isOpen ? "on" : ""}></div>
          <div className={isOpen ? "on" : ""}></div>
          <div className={isOpen ? "on" : ""}></div>
        </button>
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
      <ul className={isOpen ? "show-menu" : "hide-menu"}>
        <li>
          <Link
            to="home"
            smooth="true"
            duration={1000}
            onClick={() => toggleMenu(false)}
          >
            <h2>home</h2>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth="true"
            duration={1000}
            onClick={() => toggleMenu(false)}
          >
            <h2>about</h2>
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth="true"
            duration={1000}
            onClick={() => toggleMenu(false)}
          >
            <h2>project</h2>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
