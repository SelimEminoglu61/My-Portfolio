import BottomArrow from "../components/BottomArrow/BottomArrow";
import ContactSect from "../components/ContactSection/ContactSect";
import Header from "../components/Header/Header";

import "../assets/css/style.css";
function Page() {
  return (
    <div className="background">
      {" "}
      <Header /> <TitleSect /> <BottomArrow /> <AboutSect /> <BottomArrow />{" "}
      <ExperienceSect /> <BottomArrow /> <ContactSect />{" "}
    </div>
  );
}
export default Page;
