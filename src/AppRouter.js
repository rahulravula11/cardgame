import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./views/home/homescreen.react";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
