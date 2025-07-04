import Header from "../components/Header/Header";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import TitleSect from "../components/TitleSection/TitleSect";
import ShortİnfoSection from "../components/ShortİnfoSection/ShortİnfoSection";
import Footer from "../components/Footer/Footer";
import "../assets/css/style.css";
function MainPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <TitleSect /> <BottomArrow /> <ShortİnfoSection />
      <BottomArrow /> <Footer />
    </div>
  );
}

export default MainPage;
