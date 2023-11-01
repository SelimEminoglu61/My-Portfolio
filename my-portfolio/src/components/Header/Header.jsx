import { useState } from "react";
import { Link } from "react-scroll";
import "./styleHeader.css";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function isOpenHamMenu() {
    if (isOpenMenu == false) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  }

  return (
    <div className="headerDiv">
      <div>
        <h1 className="bigTitle">Selim.Dev</h1>
      </div>
      <div className="navbar">
        <ul className="navbarList">
          <Link
            href="#"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li>Home</li>
          </Link>
          <Link
            href="#"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
          >
            <li>About</li>
          </Link>
          <Link
            href="#"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
          >
            <li>Experience</li>
          </Link>
          <Link
            href="#"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="hamMenu" onClick={() => isOpenHamMenu()}>
        <img src="/icons/menu.png" alt="icon" />
      </div>
      {isOpenMenu && (
        <div className="burgerList">
          <ul>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <li>Home</li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              <li>About</li>
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              <li>Experience</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
