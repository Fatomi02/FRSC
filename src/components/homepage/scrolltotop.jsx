import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;

    // Check if the user is near the bottom of the page (within 100px)
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          style={{
            position: "fixed",
            bottom: "70px",
            right: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#201E43",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={handleScrollToTop}
        >
          Scroll to Top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
