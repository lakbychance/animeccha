import React, { useEffect } from "react";
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";
import { Anime } from "./containers";
import { Footer, Montage } from "./components";
import Home from "./containers/Home/Home";
import { assetPath } from "./config/constants";
import { useLocalStorageState } from "./hooks";
import clsx from "clsx";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [mode, setMode] = useLocalStorageState("mode", "dark");

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
