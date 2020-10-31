
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Articles from "./components/Articles/Articles";
import ProjectInfo from "./components/Blogs/ProjectInfo";
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
        <Route path="/projects/:id">
          <ProjectInfo/>
        </Route>
        <Route path="/projects">
          <ProjectInfo/>
        </Route>
        <Route path="/blogs">
          <Articles/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
