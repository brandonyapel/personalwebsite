import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Home from './Components/Component_Home.js';
import Resume from './Components/Component_Resume.js';
import Blog from './Components/Component_Blog.js';
import BlogArticle from './Components/Component-BlogArticle.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Blog" component={BlogArticle} />
        <Route path="/BlogArticle" component={BlogArticle} />
      </BrowserRouter>
    );
  }
}

export default App;
