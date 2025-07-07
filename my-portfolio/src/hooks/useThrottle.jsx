import { useEffect, useState } from "react";
import { throttle } from "../utils/throttle";

import topArrow from "../assets/icons/top-arrow.png";

function useThrottle() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setShowButton(window.scrollY > 300);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showButton ? (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#64ccc5",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={topArrow} alt="topArrow" width={30} />
    </button>
  ) : null;
}

export default useThrottle;
