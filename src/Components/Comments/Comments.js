import React,{useState,useEffect,useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "@firebase/app-compat";
import {useCollectionData} from "react-firebase-hooks/firestore" ;

import "./Comments.css"

const Comments = (props)=>{


    const dummy = useRef()
    const firestore = firebase.firestore();
  
    const [user] = useAuthState(firebase.auth());
    const messageRef = firestore.collection("comments")
    const query = messageRef.orderBy('createdAt').limit(25);
    const  [messages] = useCollectionData(query) ;
    
    
    const sendMessage = async (e)=>{
      e.preventDefault();
      const {uid , photoURL} = firebase.auth().currentUser ;

    if(dummy.current.value!="")
      await messageRef.add({
        content:dummy.current.value,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })

      dummy.current.scrollIntoView({behavior:"smooth"}) ;
      dummy.current.value = "";


    }
    const [clicked,setClicked] = useState([]) ;
  
     let uid ;
     if(user)
        uid = user.uid ;

    const handleDelete = (i)=>{
        let arr = [...clicked] ;

        arr = arr.map((val,index)=> i==index?!arr[index]:false) ;
        setClicked(arr) ;
    }

    useEffect(()=>{
        if(messages)
            setClicked(Array(messages.length).fill(false));
    },[messages])



    return (
        <div className="parent" >
            {user?(<div className="wrapper">
            <h2>Comments</h2>
            <div className="input_comment">
                <input type="text" placeholder="Comments Here..."  
                    ref={dummy}
                />
            </div>
            <button onClick={sendMessage} >Comment</button>
            <div className="container_of_messages"  >
            {messages&&messages.map((val,i)=>(
                <div  className={`message ${val.uid===uid?`sent`:`recieved`}`} onClick={()=>handleDelete(i)} key={i} >
                    <div className="left">
                        <img src={val.photoURL} alt="" title={val.uid==uid?user.displayName:val.uid} />
                    </div>
                    <div className="right">
                        <p>{val.content}</p>
                        <p>{val.replies}</p>
                    </div>
                    {/* {clicked[i] && uid === val.uid &&<div className="delete">
                            <button className="Cancelbtn"  >Cancel</button>
                            <button className="Deletebtn" >Delete</button>
                        </div>} */}
                </div>
            ))}
        </div>
        </div>):<div></div>}
        </div>
    )
}

export default Comments;