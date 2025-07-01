import { useEffect } from "react";
import "./styleAboutSect.css";
import "../../assets/css/style.css";

function AboutSect() {
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("loading");
            observer.unobserve(img);
          }
        });
      });

      images.forEach((img) => {
        observer.observe(img);
      });
    } else {
      images.forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("loading");
      });
    }
  }, []);
  return (
    <div className="container">
      <div className="aboutDiv" id="about">
        <div className="midTitleDiv">
          <h3>About Me</h3>
        </div>
        <div className="aboutDetail">
          <div className="aboutİmg">
            <img
              src="/images/pp-cv.webp"
              alt="image"
              data-src="/images/pp-cv.webp"
              loading="lazy"
            />
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

        <div className="skillTitle">
          <h3>Skills</h3>
        </div>
        <ul className="skillList">
          <li>
            <img
              src="/icons/html-5.png"
              alt="icon"
              data-src="/icons/html-5.png"
              loading="lazy"
            />
            <h4>HTML</h4>
          </li>
          <li>
            <img
              src="/icons/css-3.png"
              alt="icon"
              data-src="/icons/css-3.png"
              loading="lazy"
            />
            <h4>CSS</h4>
          </li>
          <li>
            <img
              src="/icons/js.png"
              alt="icon"
              data-src="/icons/js.png"
              loading="lazy"
            />
            <h4>Javascript</h4>
          </li>
          <li>
            <img
              src="/icons/physics.png"
              alt="icon"
              data-src="/icons/physics.png"
              loading="lazy"
            />
            <h4>React</h4>
          </li>
          <li>
            <img
              src="/icons/python.png"
              alt="icon"
              data-src="/icons/python.png"
              loading="lazy"
            />
            <h4>Python</h4>
          </li>
          <li>
            <img
              src="/icons/sass.png"
              alt="icon"
              data-src="/icons/sass.png"
              loading="lazy"
            />
            <h4>SASS</h4>
          </li>
          <li>
            <img
              src="/icons/bootstrap.png"
              alt="icon"
              data-src="/icons/bootstrap.png"
              loading="lazy"
            />
            <h4>Bootstrap</h4>
          </li>
          <li>
            <img
              src="/icons/structure.png"
              alt="icon"
              data-src="/icons/structure.png"
              loading="lazy"
            />
            <h4>React Native</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSect;
