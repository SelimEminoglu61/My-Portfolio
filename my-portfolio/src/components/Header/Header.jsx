import { Link } from "react-scroll";
import "./styleHeader.css";

function Header() {
  return (
    <div className="headerDiv">
      <div>
        <h1 className="bigTitle">Selim.Dev</h1>
      </div>
      <div className="navbar">
        <ul className="navbarList">
          <Link to="home" spy={true} smooth={true} duration={500} offset={-70}>
            <li>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} offset={-90}>
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
    </div>
  );
}

export default Header;
