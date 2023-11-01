import { useEffect } from "react";
import Form from "../../views/Form/Form";
import "./styleContactSect.css";
import "../../assets/css/style.css";

function ContactSect() {
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
      <div className="contactDiv" id="contact">
        <div className="midTitleDiv">
          <h3>Contact Me</h3>
        </div>
        <ul className="infoList">
          <li>
            <img
              src="/icons/whatsapp.png"
              alt="icon"
              data-src="/icons/whatsapp.png"
              loading="lazy"
            />
            <p>+90545 532 81 11</p>
          </li>
          <li>
            <img
              src="/icons/gmail.png"
              alt="icon"
              data-src="/icons/gmail.png"
              loading="lazy"
            />
            <p>selim.eminoglu.9257@gmail.com</p>
          </li>
          <li>
            <img
              src="/icons/linkedin.png"
              alt="icon"
              data-src="/icons/linkedin.png"
              loading="lazy"
            />
            <a
              href="https://www.linkedin.com/in/selim-eminoglu/"
              target="_blank"
            >
              Selim Eminoğlu
            </a>
          </li>
        </ul>
        <Form />
      </div>
    </div>
  );
}

export default ContactSect;
