import { lazy, Suspense } from "react";

import Header from "../components/Header/Header";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import TitleSect from "../components/TitleSection/TitleSect";

const Shortİnfo = lazy(() =>
  import("../components/ShortİnfoSection/ShortİnfoSection")
);
const Footer = lazy(() => import("../components/Footer/Footer"));

import "../assets/css/style.css";

function MainPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <TitleSect /> <BottomArrow />
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <Shortİnfo />
      </Suspense>
      <BottomArrow />
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default MainPage;
