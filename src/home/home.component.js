import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Highlight from 'react-highlight';
import hljs from 'highlight.js';


class HomeComponent extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">A React Router Example</h1>
                        <p className="lead">
                            This is an example of a website leveraging React Router Version 4!.
                    </p>
                        <a className="btn btn-primary btn-lg"
                            href="https://reacttraining.com/react-router/web/guides/philosophy"
                            role="button"
                            target="_blank"
                        >
                            Open React Router Docs
                    </a>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Router Setup</h2>
                            <p>To get started with the React Router, first install the router.</p>
                            <p>
                                <code>
                                    npm install --save react-router-dom
                                </code>
                            </p>
                            <p>Next, import the <code>BrowserRouter</code> and wrap your app's content with it.</p>
                            <p>
                                <Highlight className="Javascript">
                                    {`import { BrowserRouter as Router } from 'react-router-dom;`}
                                </Highlight>
                            </p>
                            <Highlight className='Javascript'>
{`class App extends Component {
  render() {
    return (
      <Router>
        <p>Welcome!</p>
      </Router>
    );
  }
}`}
                            </Highlight>
                            <h2>Creating Basic Routes</h2>
                            <p>
                                Create components for your initial static pages. Then, add them as <code>&lt;Route /&gt;</code>s nested within your <code>&lt;Router&gt;</code>. Add a <code>path</code> attribute to designate a url for each route. Keep in mind that they'll match in the order of top to bottom. Toss in an <code>exact</code> attribute to force an <em>exact</em> match.
                            </p>
                            <Highlight className='Javascript'>
{`class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/about" component={AboutComponent} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/products/:id?" component={ProductsComponent} />
            </Switch>
      </Router>
    );
  }
}`}
                            </Highlight>
                            <div className="card">
                                <h3 className="card-header">Route Parameters</h3>
                                <div className="card-body">
                                    
                                <p>
                                    The colon in the <code>/products/:id?</code> route definition is a <em>route parameter</em>. A URL with anything in a dynamic segment of a URL will match and that text will be available in the <code>params</code> of the loaded component. The question mark (<code>?</code>) designates that segment as optional so it will match <code>/products</code> as well.
                                </p>
                                <p>
                                    The following route will match <code>/products/1</code>, <code>/products/sales</code>, or even <code>/products</code> and display <code>ProductsComponent</code>.
                                </p>
                                <Highlight className='Javascript'>
    {`<Route path="/products/:id?" component={ProductsComponent} />`}
                                </Highlight>
                                </div>
                            </div>

                            <h2>NavLinks</h2>
                            <p>
                                To link within the routes of your React application, use a <code>NavLink</code> component.
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeComponent;