import React, { useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { Anime } from "./containers";
import { Footer, Montage } from "./components";
import Home from "./containers/Home/Home";
import ColorModeProvider from "./components/ColorModeContext/ColorModeContext";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  return (
    <ColorModeProvider container={appRef.current}>
      <div className="appContainer" data-color-mode="light" ref={appRef}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/anime/:anime" component={Anime} />
          <Route exact path="/anime/:anime/:montage" component={Montage} />
          <Redirect path="/" to="/home"></Redirect>
        </Switch>
        <Footer />
      </div>
    </ColorModeProvider>
  );
}

export default App;
