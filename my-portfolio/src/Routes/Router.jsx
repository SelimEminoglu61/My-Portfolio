import { useRoutes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import MainPage from "../pages/MainPage";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ExpPage = lazy(() => import("../pages/ExpPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

import "../assets/css/style.css";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    {
      path: "/about",
      element: (
        <Suspense classname="fallback">
          <AboutPage />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense classname="fallback">
          <ContactPage />
        </Suspense>
      ),
    },
    {
      path: "/experience",
      element: (
        <Suspense classname="fallback">
          <ExpPage />
        </Suspense>
      ),
    },
  ]);
  return routes;
};

export default Router;
