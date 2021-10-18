import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Courses_Card from "./Courses_Card";
import "./style.css";
import react_svg from '../../../react_svg_pink.svg'
import html_css_js_svg from "../../../html_css_svg.svg";

const Explore_Courses_carousel = () => {
  const breakPoints = [
    { width: 480, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 968, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const [items, setItems] = useState([
    {
      id: 1,
      img_src: html_css_js_svg,
      heading: "HTML CSS JS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eumassumenda voluptas blanditiis culpa, dolores",
      linkTo: "/tutorial",
    },
    {
      id: 1,
      img_src: react_svg,
      heading: "React",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eumassumenda voluptas blanditiis culpa, dolores",
      linkTo: "/tutorial",
    },
    {
      id: 1,
      img_src: html_css_js_svg,
      heading: "Express JS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eumassumenda voluptas blanditiis culpa, dolores",
      linkTo: "/tutorial",
    },
    {
      id: 1,
      img_src: html_css_js_svg,
      heading: "Node JS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eumassumenda voluptas blanditiis culpa, dolores",
      linkTo: "/tutorial",
    },
    {
      id: 1,
      img_src: html_css_js_svg,
      heading: "Mongo DB",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eumassumenda voluptas blanditiis culpa, dolores",
      linkTo: "/tutorial",
    },
  ]);


  return (
    <div className="Explore_Courses_carousel_wrapper">
      <div className="Explore_Courses_carousel_heading">
        Explore Our Courses
      </div>
      <Carousel breakPoints={breakPoints}   >
        {items.map((item) => (
          <Courses_Card key={item.id} props={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Explore_Courses_carousel;
