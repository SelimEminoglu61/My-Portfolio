import BottomArrow from "../components/BottomArrow/BottomArrow";
import ContactSect from "../components/ContactSection/ContactSect";
import Header from "../components/Header/Header";
import "../assets/css/style.css";
function ContactPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <ContactSect />{" "}
    </div>
  );
}

export default ContactPage;
