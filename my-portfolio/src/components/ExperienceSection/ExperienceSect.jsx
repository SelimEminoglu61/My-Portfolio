import { useEffect } from "react";

import listArrow from "/icons/list-arrow.webp";
import arvisLogo from "/images/arvis.webp";
import EterationLogo from "/images/eteration.webp";
import "./styleExperienceSect.css";
import "../../assets/css/style.css";

function ExperienceSect() {
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
      <div className="experienceDiv" id="experience">
        <div className="midTitleDiv">
          <h3>Experiences</h3>
        </div>
        <ul className="expList">
          <li className="normalLi">
            <div className="listİmg">
              <img
                src="/images/turkcell-logo.webp"
                alt="logo"
                data-src="/images/turkcell-logo.webp"
                loading="lazy"
                aria-label="turkcell"
              />
            </div>
            <div className="listText">
              <h4>FRONT END DEVELOPER/BOOTCAMP</h4>
              <h5>
                <a href="https://www.turkcell.com.tr/" target="_blank">
                  Turkcell
                </a>{" "}
                | 06 March 2023 -13 September 2023
              </h5>
              <ul>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Receiving training on HTML5, CSS3, SASS, Bootstrap and
                  JavaScript.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Reinforcement of the training received through teamwork and
                  practice.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Carrying out studies based on designs.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Training on React.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Receiving training for libraries that can be used for React.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Reinforcement of training with group work.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Applying the topics learned through practice to problems.
                </li>
              </ul>
            </div>
          </li>
          <li className="reverseLi">
            <div className="listText">
              <h4>INTERN</h4>
              <h5>
                <a href="https://www.khenda.com/tr" target="_blank">
                  Khenda Teknoloji A.Ş.
                </a>{" "}
                | 03 October 2022 -05 January 2023
              </h5>
              <ul>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Obtaining information about analyzes on the process.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Labeling and analyzing the video.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Carrying out studies with video processes for front-end.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Working on YOLOv5 for the artificial intelligence model.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Learning development paths for artificial intelligence models.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Testing and preparing reports for developed applications.
                </li>
              </ul>
            </div>
            <div className="listİmg">
              <img
                src="/images/khenda-logo.webp"
                alt="logo"
                data-src="/images/khenda-logo.webp"
                loading="lazy"
                aria-label="khenda"
              />
            </div>
          </li>
          <li className="normalLi">
            <div className="listİmg">
              <img
                src={arvisLogo}
                alt="logo"
                data-src={arvisLogo}
                loading="lazy"
                aria-label="arvis"
              />
            </div>
            <div className="listText">
              <h4>ARTIFICIAL INTELLIGENCE R&D INTERN</h4>
              <h5>
                <a href="http://www.arvis.com.tr/" target="_blank">
                  Arvis Teknoloji A.Ş.
                </a>{" "}
                | 25 July-02 September 2022
              </h5>
              <ul>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Conducting literature and article research in the field of
                  voice recognition.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Gathering information about voice patterns.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Model trials and tests.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Creating project presentation files and article compilations.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Realization of project presentation.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Doing teamwork and group activity.
                </li>
              </ul>
            </div>
          </li>
          <li className="reverseLi">
            <div className="listText">
              <h4>R&D INTERN</h4>
              <h5>
                <a href="https://www.eteration.com/tr" target="_blank">
                  Eteration Bilgi Teknolojileri A.Ş.
                </a>{" "}
                | 14 March-29 June 2022
              </h5>
              <ul>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Conducting article research for the project being worked on.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Preparation of schema for the project.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Laying the first foundations of the programs used in the
                  project.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Conducting front-end work on the project.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Learning API components within the project.
                </li>
                <li>
                  <img src={listArrow} alt="listİtem" width={12} />
                  Gaining experience in autonomous driving technology.
                </li>
              </ul>
            </div>
            <div className="listİmg">
              <img
                src={EterationLogo}
                alt="logo"
                data-src={EterationLogo}
                loading="lazy"
                aria-label="eteration"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceSect;
