import React from "react";

const TopButton = () => {
  const ScrollBackToTop = () => {
    window.scrollTo({top: 0, left :0, behavior: "smooth"})
  };
  return (
    <button
      onClick={() => {ScrollBackToTop}}
      className="topBtn"
      title="Go to top"
    >
      <img src="./assets/arrow.svg" />
    </button>
  );
};

export default TopButton;
