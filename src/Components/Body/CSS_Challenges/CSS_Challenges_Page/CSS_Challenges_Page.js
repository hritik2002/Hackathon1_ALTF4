import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./CSS_Challenges_Page.css";
import svg4 from "../../../../svg4.svg";
import Editor from "../../../Editor/Editor";
import useLocalStorage from "../../../../hooks/useLocalStorage";

const CSS_Challenges_Page = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [srcDoc, setSrcDoc] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
            <html>
              <body>${html}</body>
              <style>${css}</style>
            </html>
          `
      );
    }, 250);
  });

  const [index, setIndex] = useState(0);

  const handleClick=()=>{
      setIndex((index+1)%6)
  }
  const challenges = [
    {
      width: "60%",
      height: "60%",
      background: "orange",
      borderRadius: 0,
    },
    {
      width: "50%",
      height: "50%",
      background: "orange",
      borderRadius: "50%",
    },
    {
      width: "60%",
      height: "60%",
      background: "orange",
      borderRadius: 0,
      clipPath: ` polygon(50% 0%, 0% 100%, 100% 100%)`,
    },
    {
      width: "40%",
      height: "60%",
      background: "orange",
      borderRadius: "0%",
      clipPath: `polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)`,
    },
    {
      width: "40%",
      height: "60%",
      background: "orange",
      borderRadius: "0%",
      clipPath: `polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)`,
    },
    {
      width: "40%",
      height: "60%",
      background: "orange",
      borderRadius: "0%",
      clipPath: `polygon(0 0, 100% 0, 100% 48%, 53% 76%, 0 49%)`,
    },
  ];

  return (
    <>
      {id >= 1 && id <= 21 ? (
        <div className="CSS_Challenges_Page_wrapper">
              <div className="CSS_Challenges_Page_top">
                  <button onClick={handleClick} >Generate next challenge &#10148;</button>
              </div>
              <hr className="seperator" />
          <div className="CSS_Challenges_Page_content">
            <div className="CSS_Challenges_Page_left">
              <Editor
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
              />
              <Editor
                language="css"
                displayName="CSS"
                value={css}
                onChange={setCss}
              />
            </div>
            <div className="CSS_Challenges_Page_right">
              <div className="CSS_Challenges_Page_right_first">
                <iframe
                  srcDoc={srcDoc}
                  title="output"
                  sandbox="allow-scripts"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="CSS_Challenges_Page_right_second">
                <div
                  className="CSS_Challenges_Page_right_second_content"
                  style={challenges[index]}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alertmessage">Page Not Found !</div>
      )}
    </>
  );
};

export default CSS_Challenges_Page;
