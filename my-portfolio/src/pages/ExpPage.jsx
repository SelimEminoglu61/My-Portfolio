import Header from "../components/Header/Header";
import ExperienceSect from "../components/ExperienceSection/ExperienceSect";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import "../assets/css/style.css";
function ExpPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <ExperienceSect />{" "}
    </div>
  );
}

export default ExpPage;
