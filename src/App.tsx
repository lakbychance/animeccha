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
import { Montage } from "./components";
import Home from "./containers/Home/Home";
import { assetPath } from "./config/constants";
import { useLocalStorageState } from "./hooks";
import clsx from "clsx";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [mode, setMode] = useLocalStorageState("mode", "dark");

  useEffect(() => {
    const appContainer = document.querySelector(".appContainer");
    appContainer?.setAttribute("data-color-mode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    const appContainer = document.querySelector(".appContainer");
    const nextMode = mode === "light" ? "dark" : "light";
    appContainer?.setAttribute("data-color-mode", nextMode);
    setMode(nextMode);
  };

  return (
    <div className="appContainer" data-color-mode="light">
      {!location.pathname.includes("home") && (
        <img
          alt="Back Button"
          className={clsx("backBtn", mode === "dark" && "backBtnDark")}
          src={`${assetPath}/backBtn.svg`}
          onClick={() => history.goBack()}
        ></img>
      )}
      {location.pathname.includes("home") && (
        <img
          className={clsx(
            "colorModeToggle",
            mode === "dark" && "colorModeDark"
          )}
          height="25px"
          width="25px"
          onClick={toggleColorMode}
          src={`${assetPath}/yin-yang.svg`}
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
