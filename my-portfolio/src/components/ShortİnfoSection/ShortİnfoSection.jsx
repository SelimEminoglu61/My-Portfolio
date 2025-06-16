import "./styleShortİnfo.css";
import "../../assets/css/style.css";
import { useState } from "react";

function ShortİnfoSection() {
  const [myProjects, setMyProjects] = useState([]);

  fetch("https://api.github.com/repos/SelimEminoglu61")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="backgrDiv">
      <div className="midTitleDiv">
        <h3>My Projects</h3>
      </div>
      <div className="myProjectsDiv">projeler</div>
    </div>
  );
}

export default ShortİnfoSection;
