import './App.scss';

import React,{useContext} from 'react';
import Posts from './Pages/PostsPage/Posts';
import Post from "./Pages/PostPage/Post";
import {Route,Switch, useLocation} from "react-router";

import { Context } from './Context/Context';

function App() {

  const location=useLocation();

  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route exact path={"/posts"} component={Posts}/>
        <Route path={"/post/:id"} component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
