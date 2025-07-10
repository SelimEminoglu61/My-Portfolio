import React, { lazy, Suspense } from "react";

import Header from "../components/Header/Header";
import ExperienceSect from "../components/ExperienceSection/ExperienceSect";
import BottomArrow from "../components/BottomArrow/BottomArrow";

const Footer = lazy(() => import("../components/Footer/Footer"));

import "../assets/css/style.css";
function ExpPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <ExperienceSect />
      <BottomArrow />
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default ExpPage;
