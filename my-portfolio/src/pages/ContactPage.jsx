import BottomArrow from "../components/BottomArrow/BottomArrow";
import ContactSect from "../components/ContactSection/ContactSect";
import Header from "../components/Header/Header";

const Footer = lazy(() => import("../components/Footer/Footer"));

import "../assets/css/style.css";
function ContactPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <ContactSect /> <BottomArrow />
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default ContactPage;
