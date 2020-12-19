import React from "react";
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";
import { Anime } from "./containers";
import { Montage } from "./components";
import Home from "./containers/Home/Home";

import backBtn from "./assets/backBtn.svg";

function App() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="appContainer">
      {!location.pathname.includes("home") && (
        <img
          alt="Back Button"
          className="backBtn"
          src={backBtn}
          onClick={() => history.goBack()}
        ></img>
      )}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/anime/:anime" component={Anime} />
        <Route exact path="/anime/:anime/:montage" component={Montage} />
        <Redirect path="/" to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
