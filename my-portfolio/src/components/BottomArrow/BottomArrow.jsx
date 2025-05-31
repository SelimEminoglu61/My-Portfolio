import "./styleBottomArrow.css";
import "../../assets/css/style.css";
import downİcon from "../../assets/icons/icon-down.png";

function BottomArrow() {
  return (
    <div className="container">
      <div className="arrowDiv">
        <img
          className="arrowDown"
          src={downİcon}
          alt="icon"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default BottomArrow;
