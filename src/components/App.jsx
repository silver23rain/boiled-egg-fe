import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Test } from "./pages";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
