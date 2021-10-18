import React from "react";
import { Link  } from "react-router-dom";
import "./FooterChild.css"


const FooterChild = ({title , array_of_child})=>{
    
    return(
        <div  className="FooterChild_wrapper" >
            <div className="title">
                {title} 
            </div>
            <div className="bottom">
                {array_of_child.map((val,i)=>(
                    <a target="_blank" href="https://www.linkedin.com/in/hritik-sharma-05677b200/" placeholder={val.name} >{val.name}</a>
                ))}
            </div>
        </div>
    )
}

export default FooterChild ;