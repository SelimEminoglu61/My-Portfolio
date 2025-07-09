import Form from "../../views/Form/Form";
import "./styleContactSect.css";
import "../../assets/css/style.css";

function ContactSect() {
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
