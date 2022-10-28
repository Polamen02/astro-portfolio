import React from "react";

const TopButton = () => {
  const ScrollBackToTop = () => {
    window.scrollTo({top: 0, left :0, behavior: "smooth"})
    console.log("Works?")
  };
  return (
    <button
      onClick={() => console.log("CLICKS!?")}
      className="topBtn"
      title="Go to top"
    >
      <img src="./assets/arrow.svg" />
    </button>
  );
};

export default TopButton;
