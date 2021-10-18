import React,{useState} from "react";
import Explore_Section from "./Explore_Section";
import explore_courses from '../../../explore_courses_pink.svg'
import editorsvg from '../../../editor_svg_pink.svg'
import notes from '../../../notes_svg_pink.svg'
import chatBotsvg from '../../../chat_bot_svg_pink.svg'
import CSS_Challenges from "../CSS_Challenges/CSS_Challenges";
import Explore_Courses_carousel from "../Carousel/Explore_Courses_carousel";

import "./Main_area.css";

const Main_area = () => {

    const [data1 , setData1] = useState([
        {
            title:"Detailed Courses",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaeratlaudantium possimus quis iure eum accusantium illo providentexpedita quos",
            img_src:explore_courses,
            flexD:"row",
            alignItems:"flex-start",
            id:"0"
        },
        {
            title:"Online Editor",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaeratlaudantium possimus quis iure eum accusantium illo providentexpedita quos",
            img_src:editorsvg,
            flexD:"row-reverse",
            alignItems:"flex-end !important",
            id:"1"
        }
    ])
    const [data2 , setData2] = useState([
        {
            title:"Notes & Quizes",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaeratlaudantium possimus quis iure eum accusantium illo providentexpedita quos",
            img_src:notes,
            flexD:"row",
            alignItems:"flex-start !important",
            id:"2"
        },
        {
            title:"Smart Support via ChatBot",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaeratlaudantium possimus quis iure eum accusantium illo providentexpedita quos",
            img_src:chatBotsvg,
            flexD:"row-reverse",
            alignItems:"flex-end",
            id:"3"
        },
    ])

  return (
    <div className="Main_area_wrapper" >  
    <CSS_Challenges />
    <Explore_Courses_carousel />
      {data1.map(val=>(
          <Explore_Section title={val.title} desc={val.desc} img_src={val.img_src}
          flexD={val.flexD} key={val.id}
          />
          ))}   
      {data2.map(val=>(
          <Explore_Section title={val.title} desc={val.desc} img_src={val.img_src}
            flexD={val.flexD} key={val.id}
          />
      ))}   
    </div>
  );
};

export default Main_area;
