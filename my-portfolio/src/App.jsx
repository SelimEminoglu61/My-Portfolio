import Router from "./Routes/Router";
import UseThrottle from "./hooks/useThrottle";
import "./assets/css/style.css";
function App() {
  return (
    <>
      <UseThrottle />
      <Router />
    </>
  );
}
export default App;
