import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import TopNavbar from './nav/top-navbar.component';

import HomeComponent from './home/home.component';
import ContactComponent from './contact/contact.component';
import ProductsComponent from './products/products.component';
import ProductDetailsComponent from './products/product-details.component'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="router-container">
          <TopNavbar id="top-navbar"/> 
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/products" exact component={ProductsComponent} />
              <Route path="/products/:id?" component={ProductDetailsComponent} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
