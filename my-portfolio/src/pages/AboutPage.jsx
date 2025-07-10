import React, { lazy, Suspense } from "react";

import Header from "../components/Header/Header";
import BottomArrow from "../components/BottomArrow/BottomArrow";
import AboutSect from "../components/AboutSection/AboutSect";

const Footer = lazy(() => import("../components/Footer/Footer"));

import "../assets/css/style.css";
function AboutPage() {
  return (
    <div className="background">
      {" "}
      <Header /> <BottomArrow /> <AboutSect /> <BottomArrow />
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default AboutPage;
