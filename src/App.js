
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home/Home";
import NotFound from "./components/Home/Home/NotFound/NotFound";

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
