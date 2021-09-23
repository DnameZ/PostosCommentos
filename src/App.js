import './App.scss';

import React,{useContext} from 'react';
import Posts from './Pages/PostsPage/Posts';
import Post from "./Pages/PostPage/Post";
import {Route,Switch, useLocation} from "react-router";

function App() {

  const location=useLocation();

  const propsmessage="Hello from";

  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route exact path={"/posts"} render={()=><Posts propsmessage={propsmessage}/>}/>
        <Route path={"/post/:id"}  render={()=><Post propsmessage={propsmessage}/>}/>
      </Switch>
    </div>
  );
}

export default App;
