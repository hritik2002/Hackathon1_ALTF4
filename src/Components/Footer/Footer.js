import React from "react";
import FooterChild from './FooterChild'
import "./Footer.css"
import footersvg from '../../footersvg.svg'

const Footer = ()=>{
    return (
        <div className="Footer_wrapper" >
            <img src={footersvg} alt="" className="Footer_wrapper_svg" />
            <div className="Footer_wrapper_content">
                <div className="logo_header">
                    ALT-F4
                    <div className="desc">
                        One stop , learn full stack.
                        <br />
                        Hands on projects.
                        <br />
                        Premium video lectures.
                        <br />
                        Daily CSS challenges.
                    </div>
                </div>
                <FooterChild title={"Team"} array_of_child=
                    {[{name:"Arihant",linkdn_id:"https://www.linkedin.com/in/arihant-tonage-9198561b0/"},
                    {name:"Darshan",linkdn_id:"https://www.linkedin.com/in/darshan-tailor-493708217/"},
                    {name:"Hritik",linkdn_id:"https://www.linkedin.com/in/hritik-sharma-05677b200/"},
                    {name:"Rashid",linkdn_id:"https://www.linkedin.com/in/rashid-aziz-68a208200/"}
                    ,"Darshan","Hritik","Rashid"]} />
            </div>
        </div>
    )
}

export default Footer