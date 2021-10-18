import React,{useState} from "react";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import './EditorFinal.css'
import Chatbot from "../Chatbot/Chatbot";
import {Controlled as ControlledEditor}   from 'react-codemirror2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCompressAlt , faExpandAlt} from '@fortawesome/free-solid-svg-icons'
const Editor = (props) => {
  const{
    language,
    displayName,
    value,
    onChange
  } = props

  const [open,setOpen] = useState(true);  

  function handleChange(editor,data,value){
    onChange(value);
  }
  
  return (
      <div className={`Main_Editor_container  ${open? '' : 'collapsed'}`} >
      <div className="Main_Editor_title">
        {displayName}
        <button
          onClick={()=>setOpen(prev=>!prev)}
          type="button"
          className="expand-collapse-btn"
        >
          <FontAwesomeIcon  icon={open?faCompressAlt:faExpandAlt} className="icon" />
        </button>
      </div>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping:true,
          lint:true,
          mode:language,
          lineNumbers:true,
          theme:'material',
        }}
        
      />
    </div>
  );
};

export default Editor;

