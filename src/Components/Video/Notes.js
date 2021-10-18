import React, { useState, useEffect } from "react";
import "./Video.css";
import Comments from "../Comments/Comments";
import SignUpPage from "../Nav/SignUpPage/SignUpPage";

const Notes = (props) => {
  return (
    <div className="Notes_wrapper"  >
      <embed src={props.src} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default Notes;
