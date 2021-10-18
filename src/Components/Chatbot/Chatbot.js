import React from "react";
import "./Chatbotstyle.css";
import { fasend } from "@fortawesome/fontawesome-svg-core";
const Chatbot = () => {


  function formMessage(msg, pers) {
    if (msg) {
      var span = document.createElement("span");
      span.innerHTML = msg;
      var msgarea;
      if (pers == "user") {
        span.style.backgroundColor = "#a2f1ff";
        span.classList.add("usermessage");
      } else {
        span.style.backgroundColor = "#d6d6d6";
        span.classList.add("botmessage");
      }
      msgarea = document.getElementById("messageArea");
      msgarea.appendChild(span);
      msgarea.scrollTop = msgarea.scrollHeight;
    }
  }

  function botReply(str) {
    if (
      str == "" &&
      document.getElementById("messageArea").getElementsByTagName("span")
        .length == 0
    ) {
      formMessage(
        "Hi! I am ALT - F4 Virtual Assistant. How can I help you? &#128515;",
        "bot"
      );
    } else {
      formMessage("Sorry , Service is unavailable!");
    }
  }

  function sendMessage() {
    var msg = document.getElementById("chattext").value;
    document.getElementById("chattext").value = "";
    formMessage(msg, "user");
  }
  // user will get to enter the input
  function handleChatClick() {
    document.getElementById("chatbox").classList.toggle("show-chatbox");
    document.getElementById("chatbox").classList.toggle("hide-chatbox");
    document.getElementById("containerChat").classList.toggle("show-chats");
    document.getElementById("icon").classList.toggle("change-chaticon-color");
    if (
      document.getElementById("messageArea").getElementsByTagName("span")
        .length == 0
    ) {
      botReply("");
    }
  }

  // handles click event
  const sendClick = () => {
    sendMessage();
    setTimeout(() => {
      if (
        document.getElementById("messageArea").getElementsByTagName("span")
          .length %
          2 !=
        0
      ) {
        botReply("");
      }
    }, 1600);
  };

  // handles keyup event
  function keyup(e) {
    if (e.keyCode == 13) document.getElementById("sendIcon").click();
  }

  return (
    <div className="chatbot">
      <div id="chatbox" className="hide-chatbox">
        <div id="containerChat">
          <div id="messageArea"></div>
          <div className="input-area">
            <input
              id="chattext"
              type="text"
              placeholder="Type your query..."
              maxlength="200"
              autocomplete="off"
              onKeyUp={keyup}
            />
            <i className="material-icons" id="sendIcon" onClick={sendClick}>
              send
            </i>
          </div>
        </div>
      </div>
      <div id="icon" onClick={handleChatClick}>
        <i className="material-icons" id="chatIcon">
          chat
        </i>
      </div>
    </div>
  );
};

export default Chatbot;
