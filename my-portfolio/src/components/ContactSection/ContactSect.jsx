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
        <Form />
      </div>
    </div>
  );
}

export default ContactSect;
