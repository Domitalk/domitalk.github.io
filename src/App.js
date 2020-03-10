import React from 'react';
import './App.css';
import Navi from "./Components/Navi"
import HomePage from './Components/HomePage'
import ProjectsContainer from './Containers/ProjectsContainer.js'
import About from './Components/About'
import {
  Switch,
  Route, 
  BrowserRouter as Router
} from 'react-router-dom'

// need to make 3 seperate sites. mobile/normal/xxl 

function App() {
  return (
      <Router>
        <Navi/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/projects" exact component={ProjectsContainer}/>
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
  );
}

export default App;
