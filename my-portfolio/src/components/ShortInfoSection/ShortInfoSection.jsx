import "./styleShortInfo.css";
import "../../assets/css/style.css";
import { useState, useEffect } from "react";

function ShortInfoSection() {
  const [myProjects, setMyProjects] = useState([]);
  const [sortType, setSortType] = useState("1");
  const [errorStatus, setErrorStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://my-portfolio-fggu.onrender.com/api/myprojects"
        );
        const data = await response.json();

        if (sortType == "1") {
          const takeArr = data.data;

          const sorted = [...takeArr].sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
          );

          setMyProjects(sorted);
        } else if (sortType == "2") {
          const takeArr = data.data;

          const sorted = [...takeArr].sort(
            (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
          );

          setMyProjects(sorted);
        } else if (sortType == "3") {
          const takeArr = data.data;

          const sorted = [...takeArr].sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          setMyProjects(sorted);
        } else if (sortType == "4") {
          const takeArr = data.data;

          const sorted = [...takeArr].sort((a, b) =>
            b.name.localeCompare(a.name)
          );

          setMyProjects(sorted);
        } else if (sortType == "5") {
          const takeArr = data.data;

          const sorted = [...takeArr].sort(
            (a, b) =>
              b.forks +
              b.open_issues +
              b.watchers -
              (a.forks + a.open_issues + a.watchers)
          );

          setMyProjects(sorted);
        } else if (sortType == "6") {
          const takeArr = data.data;

          const sorted = [...takeArr].sort(
            (a, b) =>
              a.forks +
              a.open_issues +
              a.watchers -
              (b.forks + b.open_issues + b.watchers)
          );

          setMyProjects(sorted);
        }
      } catch (err) {
        setErrorStatus(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortType]);

  function handleSelect(event) {
    setSortType(event.target.value);
  }

  return (
    <div className="container">
      <div className="backgrDiv">
        <div className="midTitleDiv">
          <h3>My Projects</h3>
        </div>

        <div className="sortDiv">
          <p>
            Sort:{" "}
            <select
              className="sortSelect"
              name="sortSelect"
              onChange={handleSelect}
            >
              <option value="1">Update Time(Close to Far)</option>
              <option value="2">Update Time(Far to Close)</option>
              <option value="3">Alphabetic(A-Z)</option>
              <option value="4">Alphabetic(Z-A)</option>
              <option value="5">Score(High to Low)</option>
              <option value="6">Score(Low to High)</option>
            </select>
          </p>
        </div>
        <div className="myProjectsDiv">
          {loading && (
            <div className="loading">
              <h4>Yükleniyor...</h4>
            </div>
          )}
          {errorStatus != "" ? (
            <div className="errorDiv">
              <p>Error:{errorStatus}</p>
            </div>
          ) : (
            myProjects.map((projects, i) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ShortInfoSection;
