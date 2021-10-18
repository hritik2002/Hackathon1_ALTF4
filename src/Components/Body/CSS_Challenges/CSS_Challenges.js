import React from "react";
import { useHistory } from "react-router";
import "./CSS_Challenges.css";
import svg2 from '../../../svg2.svg'

const CSS_Challenges = ()=>{
    const history = useHistory()

    const handleClick = ()=>{
        history.push("/css_challenges/1")
    }
    return (
        <div className="CSS_Challenges_wrapper" >
            <div className="CSS_Challenges_wrapper_content">
                <div className="CSS_Challenges_left">
                    <div className="CSS_Challenges_left_title">CSS Challenge</div>
                    <div className="CSS_Challenges_left_desc">Our aim is to make developer's fall in love with css.
                        This challenge will boost your confidence in css . 
                        Will make you familiar with tricky topics in css .
                    </div>
                    <button className="CSS_Challenges_left_btn" onClick={handleClick} >
                        Explore <span>&#10148;</span>
                    </button>
                </div>
                <div className="CSS_Challenges_right">
                    <img src={svg2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CSS_Challenges ;