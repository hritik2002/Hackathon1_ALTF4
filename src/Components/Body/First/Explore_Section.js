import React, { useState } from "react";
import "./Explore_Section.css";

const Explore_Section = (props) => {
  const { flexD } = props;

  return (
    <div className="Explore_Section_wrapper">
      <div class="Explore_Section_container" style={{flexDirection:flexD}} >
        <div class="Explore_Section_textarea"   >
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <div class="Explore_Section_button">
            <button id="explorebutton">Explore More</button>
          </div>
        </div>
        <div class="Explore_Section_imagearea">
          <img src={props.img_src} alt="editorial pic" />
        </div>
      </div>
    </div>
  );
};

export default Explore_Section;
