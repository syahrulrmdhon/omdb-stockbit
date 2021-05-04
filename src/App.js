import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/Home/HomePage";
import DetailMoviePage from "./containers/DetailMoviePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/detail-movie/:idMovie"} exact component={DetailMoviePage} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
