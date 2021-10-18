import React, { useState, useEffect } from "react";
import "./Video.css";
import Comments from "../Comments/Comments";
import SignUpPage from "../Nav/SignUpPage/SignUpPage";

const Video = (props) => {
  return (
    <video
      src={props.src}
      id="video-content"
      class="display-none"
      controls
    ></video>
  );
};

export default Video;
