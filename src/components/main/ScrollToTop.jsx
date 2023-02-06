import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div>
          <div
            onClick={scrollToTop}
            className="scroll_up flex fixed justify-center items-center rounded-l-50% bg-primary-100 text-white cursor-pointer hover:--transform-translate-y: -0.25rem;"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <FiArrowUp />
          </div>
        </div>
      )}
    </>
  );
}
