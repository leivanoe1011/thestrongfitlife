import React from "react";
import Questions from "./Questions";
import Body from "./IndexBody";
import LivePrograms from "./LivePrograms";

function MainBody(props) {
  return (
    <>
      <div className="main-sec about-us-section parallax">{props.children}</div>
      <Body />
      <Questions />
      <LivePrograms />
    </>
  );
}

export default MainBody;
