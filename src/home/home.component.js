import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomeComponent extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">The Kitchen Gadget Shop</h1>
                    <p className="lead">
                        This is an example of a website leveraging React Router Version 4!.
                    </p>
                    <NavLink className="btn btn-primary btn-lg" to="/products" role="button">
                        View Products
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default HomeComponent;