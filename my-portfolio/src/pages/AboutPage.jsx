import Header from "../components/Header/Header";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import AboutSect from "../components/AboutSection/AboutSect";
import "../assets/css/style.css";
function AboutPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <AboutSect />{" "}
    </div>
  );
}

export default AboutPage;
