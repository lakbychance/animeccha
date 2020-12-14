import React from "react";
import { Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { Anime, Montage } from "./components";
import Home from "./Home/Home";

function App() {
  return (
    <div className='appContainer' data-color-mode='light'>
    <Router>
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/anime/:anime" component={Anime} />
      <Route exact path="/anime/:anime/:montage" component={Montage} />
      <Redirect path="/" to="/home"></Redirect>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
