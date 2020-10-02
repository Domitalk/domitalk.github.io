import React from 'react';
import './App.css';
import Navi from "./Components/Navi"
import HomePage from './Components/HomePage'
import ProjectsContainer from './Containers/ProjectsContainer.js'
import About from './Components/About'
import {
  // Switch,
  // Route, 
  BrowserRouter as Router
} from 'react-router-dom'
import ScrollToTop from './Utility/ScrollToTop'

import projectData from './fillData/projectData.js'
import blogData from './fillData/blogData.js'

import Color from './Constants/Color.js'

const appStyle = {
    backgroundColor: Color.one
}

function App() {
  return (
      <Router style={appStyle} >
        <Navi />
        <ScrollToTop />
        <HomePage />
        <About />
        <ProjectsContainer projectData={projectData} header={"Projects"} />
        <ProjectsContainer projectData={blogData} header={"Blogs"}/>
        <div className="empty"/>
      </Router>
  );
}
export default App;
