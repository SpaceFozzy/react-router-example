import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                            href="https://github.com/SpaceFozzy/react-router-example/blob/master/README.md"
                            role="button"
                            target="_blank"
                        >
                            View Repository Readme
                    </a>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col">
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeComponent;