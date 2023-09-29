import "./styleExperienceSect.css";
import "../../assets/css/style.css";

function ExperienceSect() {
  return (
    <div className="container">
      <div className="experienceDiv">
        <div className="expTitle">
          <h3>Experiences</h3>
        </div>
        <ul className="expList">
          <li>
            <div className="listİmg">
              <img src="./src/assets/images/turkcell-logo.webp" alt="logo" />
            </div>
            <div className="listText">
              <h4>FRONT END DEVELOPER/BOOTCAMP</h4>
              <h5>Turkcell | 06 March 2023 -13 September 2023</h5>
              <ul>
                <li>
                  Receiving training on HTML5, CSS3, SASS, Bootstrap and
                  JavaScript.
                </li>
                <li>
                  Reinforcement of the training received through teamwork and
                  practice.
                </li>
                <li>Carrying out studies based on designs.</li>
                <li>Training on React.</li>
                <li>
                  Receiving training for libraries that can be used for React.
                </li>
                <li>Reinforcement of training with group work.</li>
                <li>
                  Applying the topics learned through practice to problems.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="listText">
              <h4>INTERN</h4>
              <h5>Khenda Teknoloji A.Ş. | 03 October 2022 -05 January 2023</h5>
              <ul>
                <li>Obtaining information about analyzes on the process.</li>
                <li>Labeling and analyzing the video.</li>
                <li>
                  Carrying out studies with video processes for front-end.
                </li>
                <li>
                  Working on YOLOv5 for the artificial intelligence model.
                </li>
                <li>
                  Learning development paths for artificial intelligence models.
                </li>
                <li>
                  Testing and preparing reports for developed applications.
                </li>
              </ul>
            </div>
            <div className="listİmg">
              <img src="./src/assets/images/khenda-logo.jpg" alt="logo" />
            </div>
          </li>
          <li>
            <div className="listİmg">
              <img src="./src/assets/images/arvis-logo.png" alt="logo" />
            </div>
            <div className="listText">
              <h4>ARTIFICIAL INTELLIGENCE R&D INTERN</h4>
              <h5>Arvis Teknoloji A.Ş. | 25 July-02 September 2022</h5>
              <ul>
                <li>
                  Conducting literature and article research in the field of
                  voice recognition.
                </li>
                <li>Gathering information about voice patterns.</li>
                <li>Model trials and tests.</li>
                <li>
                  Creating project presentation files and article compilations.
                </li>
                <li>Realization of project presentation.</li>
                <li>Doing teamwork and group activity.</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="listText">
              <h4>R&D INTERN</h4>
              <h5>
                Eteration Bilgi Teknolojileri A.Ş. | 14 March-29 June 2022
              </h5>
              <ul>
                <li>
                  Conducting article research for the project being worked on.
                </li>
                <li>Preparation of schema for the project.</li>
                <li>
                  Laying the first foundations of the programs used in the
                  project.
                </li>
                <li>Conducting front-end work on the project.</li>
                <li>Learning API components within the project.</li>
                <li>Gaining experience in autonomous driving technology.</li>
              </ul>
            </div>
            <div className="listİmg">
              <img src="./src/assets/images/eteration-logo.jpg" alt="logo" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceSect;
