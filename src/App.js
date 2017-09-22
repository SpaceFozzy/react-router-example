import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'; 

import TopNavbar from './nav/top-navbar.component';

import HomeComponent from './home/home.component';
import AboutComponent from './about/about.component';
import ContactComponent from './contact/contact.component';
import ProductsComponent from './products/products.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="router-container">
          <TopNavbar id="top-navbar"/> 
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/about" component={AboutComponent} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/products/:id?" component={ProductsComponent} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
