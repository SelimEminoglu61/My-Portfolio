import Header from "../components/Header/Header";
import ExperienceSect from "../components/ExperienceSection/ExperienceSect";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import Footer from "../components/Footer/Footer";
import "../assets/css/style.css";
function ExpPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <ExperienceSect />
      <BottomArrow /> <Footer />
    </div>
  );
}

export default ExpPage;
