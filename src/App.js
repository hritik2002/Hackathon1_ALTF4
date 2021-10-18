import React, { useState , useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditorFinal from "./Components/Editor/EditorFinal";
import Projects from "./Components/Projects/Projects";
import Roadmap from "./Components/Roadmap/Roadmap";
import Home from './Components/Home'
import SignUpPage from "./Components/Nav/SignUpPage/SignUpPage";
import firebase from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import 'firebase/compat/firestore';
import Comments from './Components/Comments/Comments'
import Video from './Components/Video/Video'
import Footer from "./Components/Footer/Footer";
import CSS_Challenges from "./Components/Body/CSS_Challenges/CSS_Challenges";
import CSS_Challenges_Page from "./Components/Body/CSS_Challenges/CSS_Challenges_Page/CSS_Challenges_Page";
import Main_area from "./Components/Body/First/Main_area";
import Video_child from "./Components/Video/Video_child";



const App=()=> {
  console.log(window.location.href)

  return (
    <main>
      <BrowserRouter>
        <Home />
        <Switch>
            {/* <Route path="/" component={Home} exact /> */}
            <Route exact path="/EditorFinal" component={EditorFinal} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Roadmap" component={Roadmap} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={SignUpPage} />
            <Route exact path="/tutorial" component={Video_child} />
            <Route exact path="/css_challenges/:id" component={CSS_Challenges_Page} />
            <Route exact path="/" component={Main_area} />
        </Switch>
        <Footer />
        </BrowserRouter>

    </main>
)
}

export default App;


