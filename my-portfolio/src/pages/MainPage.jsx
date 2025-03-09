import Header from "../components/Header/Header";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import TitleSect from "../components/TitleSection/TitleSect";
import "../assets/css/style.css";
function MainPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <TitleSect /> <BottomArrow /> <AboutSect />
    </div>
  );
}

export default MainPage;
