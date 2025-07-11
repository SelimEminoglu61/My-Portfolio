import "./styleBottomArrow.css";
import "../../assets/css/style.css";
import downİcon from "/icons/icon-down.webp";

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
          aria-label="arrow-bottom"
        />
      </div>
    </div>
  );
}

export default BottomArrow;
