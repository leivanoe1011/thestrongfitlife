import React from "react";
import Questions from "./Questions";

function MainBody(props) {
  return (
    <>
      <div className="main-sec about-us-section parallax">{props.children}</div>
      <Questions />
    </>
  );
}

export default MainBody;
