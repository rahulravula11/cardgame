import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen.react"; // Assuming HomeScreen is in the same directory

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        {/* Add other routes here if needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
