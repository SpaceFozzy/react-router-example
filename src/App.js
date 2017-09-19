import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'; 
import Nav from './nav/nav.component';
import AboutComponent from './about/about.component';
import ContactComponent from './contact/contact.component'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>A React Router Example</h2>

          <Nav />          

          <Route path="/about" component={AboutComponent}/>
          <Route path="/contact" component={ContactComponent}/>

        </div>
      </Router>
    );
  }
}

export default App;
