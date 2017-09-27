import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Highlight from 'react-highlight';

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
                                Create components for your initial static pages, then add them as routes nested within your Router.
                            </p>
                            <Highlight className='Javascript'>
{`class App extends Component {
  render() {
    return (
      <Router>
            <Route path="/" exact component={HomeComponent} />
      </Router>
    );
  }
}`}
                            </Highlight>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeComponent;