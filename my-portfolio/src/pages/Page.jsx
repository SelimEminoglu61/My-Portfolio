import AboutSect from "../components/AboutSection/AboutSect";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import ContactSect from "../components/ContactSection/ContactSect";
import ExperienceSect from "../components/ExperienceSection/ExperienceSect";
import Header from "../components/Header/Header";
import TitleSect from "../components/TitleSection/TitleSect";
import "./stylePage.css";
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
