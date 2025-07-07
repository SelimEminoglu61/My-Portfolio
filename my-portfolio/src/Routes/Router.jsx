import { useRoutes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ExpPage from "../pages/ExpPage";
import ContactPage from "../pages/ContactPage";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/experience", element: <ExpPage /> },
  ]);
  return routes;
};

export default Router;
