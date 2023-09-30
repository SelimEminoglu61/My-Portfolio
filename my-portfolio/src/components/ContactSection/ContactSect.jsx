import "./styleContactSect.css";
import "../../assets/css/style.css";
import Form from "../../views/Form/Form";

function ContactSect() {
  return (
    <div className="container">
      <div className="contactDiv">
        <div className="midTitleDiv">
          <h3>Contact Me</h3>
        </div>
        <ul className="infoList">
          <li>
            <img src="./src/assets/icons/whatsapp.png" alt="icon" />
            <p>+90545 532 81 11</p>
          </li>
          <li>
            <img src="./src/assets/icons/gmail.png" alt="icon" />
            <p>selim.eminoglu.9257@gmail.com</p>
          </li>
          <li>
            <img src="./src/assets/icons/linkedin.png" alt="icon" />
            <a
              href="https://www.linkedin.com/in/selim-eminoglu/"
              target="_blank"
            >
              Selim Eminoğlu
            </a>
          </li>
          <li>
            <img src="./src/assets/icons/github.png" alt="icon" />
            <a href="https://github.com/SelimEminoglu61" target="_blank">
              SelimEminoglu61
            </a>
          </li>
        </ul>
        <Form />
      </div>
    </div>
  );
}

export default ContactSect;
