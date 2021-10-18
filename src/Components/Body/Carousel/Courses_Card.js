import React from "react";
import "./Courses_Card.css";

const Courses_Card = ({props}) => {
  return (
    <div class="cell">
      <div className="image">
        <img src={props.img_src} />
      </div>
      <div class="cellHeading">{props.heading}</div>
      <div class="cellText">
        {props.desc}
      </div>
      <a >
        <button class="startCourseBtn">Start Course</button>
      </a>
    </div>
  );
};

export default Courses_Card;
