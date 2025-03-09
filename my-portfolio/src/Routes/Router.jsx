import { useRoutes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ExpPage from "../pages/ExpPage";
import ContactPage from "../pages/ContactPage";

const Router = () => {
  const routes = useRoutes([
    { path: "/", Element: <MainPage /> },
    { path: "/about", Element: <AboutPage /> },
    { path: "/contact", Element: <ContactPage /> },
    { path: "/experience", Element: <ExpPage /> },
  ]);
  return routes;
};

export default Router;
