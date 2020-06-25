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
import ScrollToTop from './Utility/ScrollToTop'


// need to make 3 seperate sites. mobile/normal/xxl 

function App() {
  return (
      <Router>
        <Navi />
        <ScrollToTop />
        <HomePage />
        <About />
        <ProjectsContainer />
      </Router>
  );
}



// {/* <Router>
//         <Navi/>
//         <ScrollToTop /> 
//         <Switch>
//           <Route path="/portfolio" exact component={HomePage}/>
//           <Route path="/portfolio/projects" exact component={ProjectsContainer}/>
//           <Route path="/portfolio/about" exact component={About} />
//         </Switch>
//       </Router> */}

export default App;
