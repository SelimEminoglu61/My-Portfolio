import { useState } from "react";
import { Link } from "react-router";
import "./styleHeader.css";

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
            <Link to="/">
              {/* 
            <img
                src="../../assets/icons/home.png"
                alt="hamMenuİcon"
                width={20}
                height={20}
              />
 
            */}
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
      )}
    </div>
  );
}

export default Header;
