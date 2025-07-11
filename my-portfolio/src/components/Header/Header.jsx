import { useState } from "react";
import { Link } from "react-router";
import "./styleHeader.css";
import homePng from "/icons/home.webp";
import userPng from "/icons/user.webp";
import telephonePng from "/icons/telephone.webp";
import breifcasePng from "/icons/briefcase.webp";

function Header() {
  const [onClickMenu, setOnClickMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function isOpenHamMenu() {
    if (isOpenMenu == false) {
      setIsOpenMenu(true);
      setOnClickMenu(true);
    } else {
      setIsOpenMenu(false);
      setOnClickMenu(false);
    }
  }

  return (
    <div className="headerDiv">
      <div>
        <h1 className="bigTitle">Selim.Dev</h1>
      </div>
      <div className="navbar">
        <ul className="navbarList">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/experience">
            <li>Experience</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div
        className={onClickMenu ? "hamMenuBlue" : "hamMenu"}
        onClick={() => isOpenHamMenu()}
      ></div>
      {isOpenMenu && (
        <div className="burgerList">
          <ul>
            <li>
              <Link to="/">
                <img
                  src={homePng}
                  alt="hamHomeButton"
                  width={20}
                  height={20}
                  aria-label="home"
                />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img
                  src={userPng}
                  alt="hamUserButton"
                  width={20}
                  height={20}
                  aria-label="about"
                />
                About
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <img
                  src={breifcasePng}
                  alt="hamTelephoneButton"
                  width={20}
                  height={20}
                  aria-label="experience"
                />
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img
                  src={telephonePng}
                  alt="hamBriefcaseButton"
                  width={20}
                  height={20}
                  aria-label="contact"
                />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
