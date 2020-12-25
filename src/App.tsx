import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { Anime } from "./containers";
import { Footer, Montage } from "./components";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="appContainer" data-color-mode="light">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/anime/:anime" component={Anime} />
        <Route exact path="/anime/:anime/:montage" component={Montage} />
        <Redirect path="/" to="/home"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
