import "./styleShortİnfo.css";
import "../../assets/css/style.css";
import { useState, useEffect } from "react";

function ShortİnfoSection() {
  const [myProjects, setMyProjects] = useState([]);
  const [sortType, setSortType] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/myprojects");
        const data = await response.json();

        if (sortType == "0") {
          setMyProjects(data.data);
        } else if (sortType == "1") {
          const takeArr = data.data;
          console.log(takeArr);
          const lastDate = [];
          const bigDate = Date.parse(takeArr[1].updated_at);
          const firstDate = Date.parse(takeArr[0].updated_at);
          let indexDate = 0;

          for (let i = 0; i <= takeArr.length; i++) {
            for (let i = 0; i < takeArr.length; i++) {
              if (firstDate > Date.parse(takeArr[i].updated_at)) {
                bigDate == firstDate;
              } else {
                firstDate == Date.parse(takeArr[i].updated_at);
              }

              if (firstDate > bigDate) {
                indexDate = takeArr.findIndex(
                  (item) => item.updated_at == firstDate
                );
                lastDate.push(...takeArr.splice(indexDate, 1));
              } else {
                indexDate = takeArr.findIndex(
                  (item) => item.updated_at == bigDate
                );
                lastDate.push(...takeArr.splice(indexDate, 1));
              }
            }
          }

          setMyProjects(lastDate);
        }
      } catch (err) {
        console.log("hata", err);
      }
    };

    fetchData();
  }, [sortType]);

  function handleSelect(event) {
    setSortType(event.target.value);
  }

  return (
    <div className="backgrDiv">
      <div className="midTitleDiv">
        <h3>My Projects</h3>
      </div>
      <div className="sortDiv">
        <p>
          Sort:{" "}
          <select className="sortSelect" onChange={handleSelect}>
            <option value="0">Default</option>
            <option value="1">Update Time</option>
            <option value="2">Alphabetic</option>
            <option value="3">Score</option>
          </select>
        </p>
      </div>
      <div className="myProjectsDiv">
        {myProjects.map((projects, i) => {
          return (
            <div key={i} className="projectsLine">
              <div className="projectİnfo">
                <h3>{projects.name.toUpperCase()}</h3>
                <p>{projects.description}</p>
                <p>Last Update: {projects.updated_at.slice(0, 10)}</p>
                <p>
                  Want to see more{" "}
                  <a href={projects.html_url} target="_blank">
                    click
                  </a>{" "}
                  here.
                </p>
              </div>
              <div className="projectNumber">
                <p>Forks: {projects.forks}</p>
                <p>Watchers: {projects.watchers}</p>
                <p>İssues: {projects.open_issues}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShortİnfoSection;
