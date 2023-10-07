import "./styleAboutSect.css";
import "../../assets/css/style.css";

function AboutSect() {
  return (
    <div className="container">
      <div className="aboutDiv" id="about">
        <div className="midTitleDiv">
          <h3>About Me</h3>
        </div>
        <div className="aboutDetail">
          <div className="aboutİmg">
            <img src="./src/assets/images/pp-cv.png" alt="image" />
          </div>
          <div className="aboutText">
            <p>
              When i was on first class at university,i met with
              software.Firstly, i learned how to code for basic problems and
              process of solve problems.My first language what learn how to code
              to me is C.After, i wanted to learn more and looked for this. I
              learned Python with videos and solve problems.On my school life, i
              can tried to use C++ and with it i learned Object Oriented
              Programming.I took AI and Image Processing lessons.I made
              gradueated projects about image processing.With interns what i
              worked on different places grow up to me.After my last bootcamp, i
              decided to work as front end developer.
            </p>
          </div>
        </div>
        <div className="projectDiv">
          <p>
            Later, my projects will be added.For now, you can visit to my github
            account and look at all my projects.When they added, "Projects" area
            will be added on this page.{" "}
          </p>
          <a href="https://github.com/SelimEminoglu61" target="_blank">
            <img src="./src/assets/icons/github.png" alt="icon" />
            Go To My Github Account
            <img src="./src/assets/icons/right-arrow.png" alt="icon" />
          </a>
        </div>
        <div className="skillTitle">
          <h3>Skills</h3>
        </div>
        <ul className="skillList">
          <li>
            <img src="./src/assets/icons/html-5.png" alt="icon" />
            <h4>HTML</h4>
          </li>
          <li>
            <img src="./src/assets/icons/css-3.png" alt="icon" />
            <h4>CSS</h4>
          </li>
          <li>
            <img src="./src/assets/icons/js.png" alt="icon" />
            <h4>Javascript</h4>
          </li>
          <li>
            <img src="./src/assets/icons/physics.png" alt="icon" />
            <h4>React</h4>
          </li>
          <li>
            <img src="./src/assets/icons/python.png" alt="icon" />
            <h4>Python</h4>
          </li>
          <li>
            <img src="./src/assets/icons/sass.png" alt="icon" />
            <h4>SASS</h4>
          </li>
          <li>
            <img src="./src/assets/icons/bootstrap.png" alt="icon" />
            <h4>Bootstrap</h4>
          </li>
          <li>
            <img src="./src/assets/icons/structure.png" alt="icon" />
            <h4>React Native</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSect;
