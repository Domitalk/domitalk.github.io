import React from 'react';
import './App.css';
import Navi from "./Components/Navi"
import HomePage from './Components/HomePage'
import ProjectsContainer from './Containers/ProjectsContainer.js'
import {
  Switch,
  Route, 
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <div className="Homepage">
      <Navi/>
      <Router>
        <Switch>
          <Route exact path="/home">
            <HomePage/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/projects">
            <ProjectsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
