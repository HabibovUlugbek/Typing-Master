import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";

import './App.css';

class App extends Component {

  render() { 
    return( 
      <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/start" component={Main} />
          </div>
      </Router>
          
     );
  }
}
 
export default App ;