
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Articles from "./components/Articles/Articles";
import ArticlesInfo from "./components/Articles/ArticlesInfo/ArticlesInfo";
import Blogs from "./components/Articles/Blogs";
import ProjectInfo from "./components/Blogs/ProjectInfo";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home/Home/Home";
import NotFound from "./components/Home/Home/NotFound/NotFound";
import Navbar from "./components/Home/Nabvar/Navbar";
import Projects from "./components/Home/Projects/Projects";
import MediumBlog1 from "./components/MediumBlog/MediumBlog1";
import MediumBlog2 from "./components/MediumBlog/MediumBlog2";
import MediumBlog3 from "./components/MediumBlog/MediumBlog3";
import MediumBlog4 from "./components/MediumBlog/MediumBlog4";

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
        {/* <Route path="/projects">
          <ProjectInfo/>
        </Route> */}
        <Route path="/projects/:id">
          <ProjectInfo/>
        </Route>
        <Route path="/projects">
          <Navbar/>
          <Projects/>
        </Route>
        <Route exact path="/blogs/:id">
          <ArticlesInfo></ArticlesInfo>
        </Route>
        <Route path="/blogs">
          <Navbar/>
          <Blogs/>
        </Route>
        
        <Route path="/blog/1">
          <MediumBlog1/>
        </Route>
        <Route path="/blog/2">
          <MediumBlog2/>
        </Route>
        <Route path="/blog/3">
          <MediumBlog3/>
        </Route>
        <Route path = "/blog/4">
          <MediumBlog4/>
        </Route>
        <Route path ="/contacts">
          <Contacts/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
