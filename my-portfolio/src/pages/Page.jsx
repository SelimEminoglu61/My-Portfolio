import BottomArrow from "../components/BottomArrow/BottomArrow";
import ContactSect from "../components/ContactSection/ContactSect";
import ExperienceSect from "../components/ExperienceSection/ExperienceSect";

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
