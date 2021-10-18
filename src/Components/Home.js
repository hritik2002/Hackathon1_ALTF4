import React,{Component} from 'react';
import "./Homestyle.css";
import firebase from '../Firebase';
import NotSignedIn from "./Nav/NotSignedIn";
import SignedIn from "./Nav/SignedIn";
class Home extends Component{

  constructor(){
    super();
    this.state={
      isLogin : false ,
      name : "",
      photo: "",
      count:false,
    }
  }
  
  
  
  onClickLoginBtn=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // /** @type {firebase.auth.OAuthCredential} */
      // var credential = result.credential;
      
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      this.setState({
        ...this.state,count:true
      })
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }
  
  componentDidMount=()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log("User signed");
        console.log(user);
        this.setState({
          isLogin:true,
          name: user.displayName,
          photo: user.photoURL,
        })
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user not signed in");
      }
    });
  }
  
  onLogout = ()=>{
    firebase.auth().signOut().then(function(){
      
    }).catch(function(error){
      
    })
    this.setState({
      isLogin:false,
      name:"",
      photo:""
    })
  }
  
  render(){
    const user = firebase.auth().currentUser ;
    if((this.state.count && this.state.isLogin)  ){
      setTimeout(()=>{
        this.setState({
          ...this.state,count:false
        })
        
      },2000)
    }
    return (
      <div className="HomeNavbar" >
      { this.state.isLogin==false?(
        <NotSignedIn googleLogin={()=>this.onClickLoginBtn()} /> 
        ):<SignedIn LogoutFn={()=>this.onLogout()} Name={this.state.name} Photo={this.state.photo} />}
        {this.state.count&&this.state.isLogin?<div className="welcome_msg" >&#9733; Welcome {user.displayName  } ! </div>:null}
    </div>
    )
  }
}

export default Home;