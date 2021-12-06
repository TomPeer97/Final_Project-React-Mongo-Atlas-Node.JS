import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import "../../css/backToTop.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          title="Back to top"
        >
          <BiArrowToTop></BiArrowToTop>
        </button>
      )}
    </>
  );
};

export default BackToTop;
