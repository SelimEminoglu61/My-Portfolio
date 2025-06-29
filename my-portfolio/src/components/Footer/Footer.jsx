import "./styleFooter.css";
import "../../assets/css/style.css";

import instaPng from "../../assets/icons/instagram.png";
import twitPng from "../../assets/icons/twitter.png";
import facePng from "../../assets/icons/facebook.png";
import githubPng from "../../assets/icons/github_small.png";
import linkedPng from "../../assets/icons/linkedin_small.png";
import wpPng from "../../assets/icons/whatsapp_small.png";

function Footer() {
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
                  İnstagram
                </li>
                <li>
                  <img src={twitPng} alt="twitLogo" />
                  Twitter
                </li>
                <li>
                  <img src={facePng} alt="faceLogo" />
                  Facebook
                </li>
              </ul>
            </div>
            <div className="businessDiv">
              <h3>Business</h3>
              <ul>
                <li>
                  <img src={githubPng} alt="githubLogo" />
                  Github
                </li>
                <li>
                  <img src={linkedPng} alt="linkedinLogo" />
                  Linkedin
                </li>
                <li>
                  <img src={wpPng} alt="wpLogo" />
                  Whatsapp
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
