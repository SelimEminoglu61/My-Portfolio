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
        <nav className="burgerList" aria-label="Ana Menü">
          <ul aria-hidden={!isOpenMenu}>
            <li>
              <Link to="/">
                <img src={homePng} alt="" width={20} height={20} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src={userPng} alt="" width={20} height={20} />
                About
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <img src={breifcasePng} alt="" width={20} height={20} />
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img src={telephonePng} alt="" width={20} height={20} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
