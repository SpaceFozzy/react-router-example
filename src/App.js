import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'; 
import SimpleComponent from './simple/simple.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>A React Router Example</h2>

          <nav>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/simple">
                  A Simple Link
                </Link>
              </li>
            </ul>
          </nav>

          <Route path="/simple" component={SimpleComponent}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
