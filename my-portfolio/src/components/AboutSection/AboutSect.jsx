import { useEffect } from "react";

import ppCV from "../../assets/images/pp-cv.webp";
import RightArrow from "../../assets/icons/right-arrow.png";

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
            <img src={ppCV} alt="image" data-src={ppCV} loading="lazy" />
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
            <div className="downloadBtt">
              <a href="/selim-eminoglu-cv.zip">
                <button>Download My CV</button>
              </a>
            </div>
          </div>
        </div>
        <div className="smallTitle">
          <h3>Education</h3>
        </div>
        <ul className="schoolList">
          <li>
            <img src={RightArrow} alt="rightLogo" />
            <div className="schoolDiv">
              <h3>
                <a href="https://www.marmara.edu.tr/" target="_blank">
                  Marmara Unıversity
                </a>
              </h3>
              <p>Mechatronics Engineering</p>
              <p>GANO: 3.05</p>
              <p>2018-2023</p>
            </div>
          </li>
          <li>
            <img src={RightArrow} alt="rightLogo" />
            <div className="schoolDiv">
              <h3>
                <a href="https://bucaanadolulisesi.meb.k12.tr/" target="_blank">
                  High School Of Buca Anatolia
                </a>
              </h3>
              <p>Average Grade: 88.16</p>
              <p>2014-2018</p>
            </div>
          </li>
        </ul>
        <div className="smallTitle">
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
            <h4>
              <a href="https://tr.wikipedia.org/wiki/HTML" target="_blank">
                HTML
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/css-3.png"
              alt="icon"
              data-src="/icons/css-3.png"
              loading="lazy"
            />
            <h4>
              <a href="https://tr.wikipedia.org/wiki/CSS" target="_blank">
                CSS
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/js.png"
              alt="icon"
              data-src="/icons/js.png"
              loading="lazy"
            />
            <h4>
              <a
                href="https://tr.wikipedia.org/wiki/JavaScript"
                target="_blank"
              >
                Javascript
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/physics.png"
              alt="icon"
              data-src="/icons/physics.png"
              loading="lazy"
            />
            <h4>
              <a href="https://react.dev/" target="_blank">
                React
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/python.png"
              alt="icon"
              data-src="/icons/python.png"
              loading="lazy"
            />
            <h4>
              <a href="https://www.python.org/" target="_blank">
                Python
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/sass.png"
              alt="icon"
              data-src="/icons/sass.png"
              loading="lazy"
            />
            <h4>
              <a href="https://sass-lang.com/" target="_blank">
                SASS
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/bootstrap.png"
              alt="icon"
              data-src="/icons/bootstrap.png"
              loading="lazy"
            />
            <h4>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </a>
            </h4>
          </li>
          <li>
            <img
              src="/icons/structure.png"
              alt="icon"
              data-src="/icons/structure.png"
              loading="lazy"
            />
            <h4>
              <a href="https://reactnative.dev/" target="_blank">
                React Native
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSect;
