import Router from "./Routes/Router";
import UseThrottle from "./hooks/useThrottle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/style.css";
function App() {
  return (
    <>
      <ToastContainer />
      <UseThrottle />
      <Router />
    </>
  );
}
export default App;
