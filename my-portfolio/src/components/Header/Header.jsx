import "./styleHeader.css";

function Header() {
  return (
    <div className="headerDiv">
      <div>
        <h1 className="bigTitle">Selim.Dev</h1>
      </div>
      <div className="navbar">
        <ul className="navbarList">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
