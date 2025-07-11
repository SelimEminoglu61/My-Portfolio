import { useEffect, useState } from "react";

import "./styleFooter.css";
import "../../assets/css/style.css";

import instaPng from "/icons/instagram.webp";
import twitPng from "/icons/twitter.webp";
import facePng from "/icons/facebook.webp";
import githubPng from "/icons/github_small.webp";
import linkedPng from "/icons/linkedin_small.webp";
import wpPng from "/icons/whatsapp_small.webp";

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
                  <img
                    src={instaPng}
                    alt="MyİnstaAdress"
                    loading="lazy"
                    aria-label="instagram"
                  />
                  <a
                    href="https://www.instagram.com/selimeminoglu/"
                    target="_blank"
                  >
                    İnstagram
                  </a>
                </li>
                <li>
                  <img
                    src={twitPng}
                    alt="MyTwitAdress"
                    loading="lazy"
                    aria-label="twitter"
                  />
                  <a href="https://x.com/SelimEminolu3" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <img
                    src={facePng}
                    alt="MyFaceAdress"
                    loading="lazy"
                    aria-label="facebook"
                  />
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
                  <img
                    src={githubPng}
                    alt="MyGitAdress"
                    loading="lazy"
                    aria-label="github"
                  />
                  <a href="https://github.com/SelimEminoglu61" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <img
                    src={linkedPng}
                    alt="MyLinkAdress"
                    loading="lazy"
                    aria-label="linkedin"
                  />
                  <a
                    href="https://www.linkedin.com/in/selim-eminoglu/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <img
                    src={wpPng}
                    alt="MyWpAdress"
                    loading="lazy"
                    aria-label="whatsapp"
                  />
                  <a href={`https://wa.me/${myNumber}`} target="_blank">
                    {myNumberError != "" ? (
                      <p>Not Found Number</p>
                    ) : (
                      <p>Whatsapp</p>
                    )}
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
