import { useEffect, useState } from "react";

import "./styleFooter.css";
import "../../assets/css/style.css";

import instaPng from "../../assets/icons/instagram.png";
import twitPng from "../../assets/icons/twitter.png";
import facePng from "../../assets/icons/facebook.png";
import githubPng from "../../assets/icons/github_small.png";
import linkedPng from "../../assets/icons/linkedin_small.png";
import wpPng from "../../assets/icons/whatsapp_small.png";

function Footer() {
  const [myNumber, setMyNumber] = useState("");
  const [myNumberError, setMyNumberError] = useState("");

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-fggu.onrender.com/api/contact"
        );
        const data = await response.json();
        setMyNumber(data);
      } catch (err) {
        setMyNumberError(err);
      }
    };
  }, []);

  return (
    <div className="footerDiv">
      <div className="container">
        <div className="footerİnfoDiv">
          <div className="infoSection">
            <div className="socialMediaDiv">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <img src={instaPng} alt="instaLogo" />
                  <a
                    href="https://www.instagram.com/selimeminoglu/"
                    target="_blank"
                  >
                    İnstagram
                  </a>
                </li>
                <li>
                  <img src={twitPng} alt="twitLogo" />
                  <a href="https://x.com/SelimEminolu3" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <img src={facePng} alt="faceLogo" />
                  <a
                    href="https://www.facebook.com/selim.eminoglu.92?locale=tr_TR"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="businessDiv">
              <h3>Business</h3>
              <ul>
                <li>
                  <img src={githubPng} alt="githubLogo" />
                  <a href="https://github.com/SelimEminoglu61" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <img src={linkedPng} alt="linkedinLogo" />
                  <a
                    href="https://www.linkedin.com/in/selim-eminoglu/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <img src={wpPng} alt="wpLogo" />
                  <a href={`https://wa.me/${myNumber}`} target="_blank">
                    {myNumber != "" ? <p>Not Found Number</p> : <p>Whatsapp</p>}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="madePersonText">
            This page made by <span>Selim Eminoğlu</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
