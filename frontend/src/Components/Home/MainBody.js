import React from "react";
import Questions from "./Questions";
import Body from "./IndexBody";

function MainBody(props) {
  return (
    <>
      <div className="main-sec about-us-section parallax">{props.children}</div>
      <Body />
      <Questions />
    </>
  );
}

export default MainBody;
