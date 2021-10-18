import React , {useState} from "react";
import firebase from "@firebase/app-compat";
import { useHistory } from "react-router";
import "./SignUpPage.css"
import { useRef } from "react";
import Googleicon from '../../../googleicon.png'
import svg1 from '../../../svg1.svg'
import { useAuthState } from "react-firebase-hooks/auth";


const SignUpPage = (props)=>{

    const user = firebase.auth().currentUser;

    const emailRef = useRef();
    const passwordRef = useRef();

    // async function signup(e){
    //     e.preventDefault();
    //     try{
    //         const result = await firebase.auth().createUserWithEmailAndPassword()
    //     }
    // }


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password1,setPassword1] = useState("");

    const history = useHistory()
    const [onLogin,setOnLogin] = useState(()=>{

        if(history.location.pathname[1]=='s'){
            return false;
        }else 
            return true;
    });


    const onHandleLoginForm = ()=>{
        setOnLogin(true)
    }
    const onHandleSignUpForm = ()=>{
        setOnLogin(false)
    }

    const googleLogin =  ()=>{
        if(props.location.data){
            props.location.data.googleLogin()
            history.push("/");

        }else
            console.log(props.location)
    }

    async function signUp(e){
        e.preventDefault();
        try{
            const result = await firebase.auth().createUserWithEmailAndPassword(email,password);
            console.log(result);
            history.push("/");
            await result.user.sendEmailVerification(); 
        }catch(err){
            console.log(err);
        }
    }
    async function signIn(e){
        e.preventDefault();
        try{
            const result = await firebase.auth().signInWithEmailAndPassword(email,password);
            console.log(result);
            history.push("/");
            await result.user.sendEmailVerification(); 
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className="parent">
            {user?<div className="alreadysignedIn" >You are signed in</div>:(<div className="signuppage_container">
        <div className="svgs">
            <img src={svg1} id = "devSvg" />
        </div>
        <div className="LoginBox">
            <div className="motto">
                One stop, full stack.
            </div>
            <div className="content">
                <button className="googleSignin" onClick={googleLogin}  >
                    <img src={Googleicon} />
                    <div>Continue with Google</div>
                </button>
                <div className="or">
                    OR
                </div>
                <div className="signuppage_options">
                    <div id="signup_loginbtn" className={onLogin?"active":""} onClick={onHandleLoginForm}>
                        Log in
                    </div>
                    <div id="signup_signupbtn" className={!onLogin?"active":""} onClick={onHandleSignUpForm}>
                        Sign up
                    </div>
                </div>
                
                <div className="entries">
                {onLogin?
                    (<form className="logIn" onSubmit={(e)=>signIn(e)} id="form1" >
                        <input type="email" placeholder="Username" id="user" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={e=>setEmail(e.target.value)} required 
                        />
                        <input type="password" placeholder="Password" id="pass" value={password}
                            onChange={e=>setPassword(e.target.value)} required 
                        />
                        <div className="get_started">Get started now !</div>
                        <button type="submit" className="continue continue_login" onSubmit={(e)=>signIn(e)} form="form1" id="signin_btn" >Continue</button>
                    </form>):

                    (<form className="signUp" id="form2"  onSubmit={e=>signUp(e)}>
                        <input type="email" placeholder="Username" id="userNew"  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                            value={email} onChange={e=>setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password" id="passNew"  required 
                            value={password}  onChange={e=>setPassword(e.target.value)}
                        />
                        <input type="password" placeholder="Confirm Password" id="passCon" required 
                            value={password1}  onChange={e=>setPassword1(e.target.value)}
                        />
                        <button type="submit" className="continue" id="signup_btn"  onSubmit={(e)=>signUp(e)} form="form2" >Continue</button>
                    </form>)
                }
                </div>
            </div>
        </div>
    </div>)}
        </div>
    )
}

export default SignUpPage ;