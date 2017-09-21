import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Nav from './nav/nav.component';
import AboutComponent from './about/about.component';
import ContactComponent from './contact/contact.component';
import ProductsComponent from './products/products.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>A React Router Example</h1>

          <Nav /> 
            <Switch>
              <Route path="/" exact render={()=><p>Welcome Home!</p>} />
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
