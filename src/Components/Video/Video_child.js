import React, { useState } from "react";
import "./Video_child.css";
import notes from "../../notes.pdf";
import Video from "./Video";
import Notes from "./Notes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faStickyNote,
  faInfoCircle,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";

const Video_child = () => {
  // function checkQuiz() {
  //     var ansOp = document.getElementById('quiz-content').getElementsByTagName('li');
  //     var correct = 0;
  //     for(let i = 0; i < 15; i++){
  //         if(ansOp[i].className){
  //             if(!ansOp[i].id){
  //                 ansOp[i].classList.add("wrong-option");
  //             }
  //             else correct++;
  //         }
  //         if(ansOp[i].id){
  //             ansOp[i].classList.add("correct-option");
  //         }
  //     }
  // }

  // var prev = null;
  // var prevName = null;
  // function selectedCategory() {
  //     if (prev != null) {
  //         prev.classList.toggle('selected-category');
  //     }
  //     prev = this;
  //     var name = this.className;
  //     this.classList.toggle('selected-category');
  //     if (prevName != null) {
  //         document.getElementById(`${prevName}-content`).classList.toggle('display-none');
  //     }
  //     document.getElementById(`${name}-content`).classList.toggle('display-none');
  //     prevName = name;
  // }

  // const topics = document.getElementsByClassName("topicname");
  // const video = document.getElementsByClassName("video")
  // const notes = document.getElementsByClassName("notes")
  // const quiz = document.getElementsByClassName("quiz")

  // var flags = [];
  // for (let i = 0; i < topics.length; i++) {
  //     flags[i] = false;
  // }
  // for (let i = 0; i < topics.length; i++) {
  //     topics[i].addEventListener('click', function () {
  //         document.getElementById("placeHolder").style.display = "none";
  //         const top = document.getElementsByClassName("topicname")[i];
  //         if (flags[i]) {
  //             const ele = document.getElementsByClassName("options")[i];
  //             ele.classList.remove("enable-options");
  //             ele.classList.add("disable-options");
  //             top.querySelector('i').innerText = "expand_more";
  //             flags[i] = false;
  //         }
  //         else {
  //             const ele = document.getElementsByClassName("options")[i];
  //             ele.classList.remove("disable-options");
  //             ele.classList.add("enable-options");
  //             top.querySelector('i').innerText = "expand_less";
  //             flags[i] = true;
  //         }
  //         top.classList.toggle("selected-topic");
  //     })
  //     video[i].addEventListener('click', selectedCategory)
  //     notes[i].addEventListener('click', selectedCategory)
  //     quiz[i].addEventListener('click', selectedCategory)
  // }

  // // Quiz
  // var arrflag = []
  // var num = document.getElementById('quiz-content').getElementsByTagName('li');
  // for (let i = 0; i < num.length; i++) {
  //     arrflag[i] = false;
  //     num[i].addEventListener('click', function () {
  //         if (!arrflag[i]) {
  //             arrflag[i] = true;
  //             num[i].classList.toggle('option-selected');
  //             var j, k;
  //             if (i % 3 == 0) {
  //                 j = i + 1; k = i + 2
  //             }
  //             else if (i % 3 == 1) {
  //                 j = i - 1 ;k = i + 1;
  //             }
  //             else {
  //                 j = i - 2; k = i - 1;
  //             }
  //             if (arrflag[j]) {
  //                 arrflag[j] = false;
  //                 num[j].classList.toggle('option-selected');
  //             }
  //             if (arrflag[k]) {
  //                 arrflag[k] = false;
  //                 num[k].classList.toggle('option-selected');
  //             }
  //         }
  //     })
  // }
  const handleExpand = (i) => {
    const arr = [...content];
    arr[i].active = !arr[i].active;
    setContent(arr);
  };

  const [activity, setActivity] = useState({
    video: true,
    notes: false,
  });

  const [content, setContent] = useState([
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
    {
      topic: "HTML",
      topicname: "1. Introduction",
      active: false,
      id: "0",
    },
    {
      topic: "HTML",
      topicname: "2. Basic Tags",
      active: false,
      id: "2",
    },
  ]);
  const handleVideo = () => {
    setActivity({
      video: true,
      notes: false,
    });
  };
  const handleNotes = () => {
    setActivity({
      video: false,
      notes: true,
    });
  };
  const handleQuiz = () => {
    setActivity({
      video: false,
      notes: false,
    });
  };

  return (
      <div className="video_child_wrapper" >
    <div class="container">
      <div class="playlist">
        <div class="playlist-scroll">
          <div id="topic">HTML</div>
          {content.map((val, i) => (
            <div class="subtopics" key={val.id}>
              <div class="topicname" onClick={() => handleExpand(i)}>
                <span>{val.topicname}</span>
                <div className="topicname_icon">
                  <FontAwesomeIcon
                    icon={val.active ? faChevronUp : faChevronDown}
                  />
                </div>
              </div>
              <div
                class="options"
                style={
                  val.active
                    ? {
                        display: "flex",
                        transition: "all 0.5s ease",
                      }
                    : {
                        transition: "all 0.5s ease",
                        display: "none",
                      }
                }
              >
                <div class="topicname_video" onClick={handleVideo}>
                  <span>Video</span>
                  <div className="topic_name_icon">
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </div>
                </div>
                <div class="topicname_notes" onClick={handleNotes}>
                  <span>Notes</span>
                  <div className="topic_name_icon">
                    <FontAwesomeIcon icon={faStickyNote} />
                  </div>
                </div>
                <div class="topicname_quiz" onClick={handleQuiz}>
                  <span>Quiz</span>
                  <div className="topic_name_icon">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="Video_content">
        {activity.video ? (
          <Video src="" />
        ) : activity.notes ? (
          <Notes src={notes} />
        ) : (
          <div></div>
        )}
        {/* <div id="placeHolder">
          Select a topic to get started!&#128515;
          <br />
          <img src="placeholderSvg.svg" alt="" />
        </div>
        <video
          src="sample.mp4"
          id="video-content"
          class="display-none"
          controls
        ></video>

        <div id="notes-content" class="display-none">
          <embed
            src="notes.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>

        <div id="quiz-content" class="display-none">
          <div id="ques1" class="quiz-question">
            <div>1. What is the full form of HTML?</div>
            <ul class="quiz-options" id="op1">
              <li>Hyperlink Text Markup Language</li>
              <li id="correct1">Hypertext Markup Language</li>
              <li>Hyper and Tags Markup Language</li>
            </ul>
          </div>
          <div id="ques2" class="quiz-question">
            <div>2. What is the full form of CSS?</div>
            <ul class="quiz-options" id="op2">
              <li>Computer Style Spreadsheets</li>
              <li id="correct2">Cascading Style Sheets</li>
              <li>Customization Style Sheets</li>
            </ul>
          </div>
          <div id="ques3" class="quiz-question">
            <div>3. How to resize a background image using CSS3?</div>
            <ul class="quiz-options" id="op3">
              <li id="correct3">background-size: 80px 60px;</li>
              <li>bg-dimension: 80px 60px;</li>
              <li>background-proportion: 80px 60px;</li>
            </ul>
          </div>
          <div id="ques4" class="quiz-question">
            <div>4. How can you create rounded corners in CSS3?</div>
            <ul class="quiz-options" id="op4">
              <li>border-effect: round-corner</li>
              <li id="correct4">border-radius: 30px</li>
              <li>border[round]: 30px</li>
            </ul>
          </div>
          <div id="ques5" class="quiz-question">
            <div>5. Inside which HTML element do we put the JavaScript?</div>
            <ul class="quiz-options" id="op5">
              <li id="correct5">&ltscript&gt</li>
              <li>&ltjavascript&gt</li>
              <li>&ltjs&gt</li>
            </ul>
          </div>
          <button type="submit" id="quiz-submit" onclick="checkQuiz()">
            Submit
          </button>
        </div> */}
      </div>
      
    </div>
    <div className="Comments_cont">
        <Comments />
      </div>
    </div>
  );
};

export default Video_child;
