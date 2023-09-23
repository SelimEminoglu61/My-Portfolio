import AboutSect from "../components/AboutSection/AboutSect";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import Header from "../components/Header/Header";
import TitleSect from "../components/TitleSection/TitleSect";
import "./stylePage.css";

function Page() {
  return (
    <div className="background">
      <Header />
      <TitleSect />
      <BottomArrow />
      <AboutSect />
    </div>
  );
}

export default Page;
