import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavBrand from './nav-brand.component';
import MobileNavToggler from './nav-toggler.component';

class TopNavbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <NavBrand text="React Router Example" />                

                <MobileNavToggler />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClass="active">
                            Home <small>(Basics)</small>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products" activeClass="active">
                            Products <small>(Route Parameters)</small>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClass="active">
                            About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClass="active">
                            Contact Us <small>(Nested Routes)</small>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopNavbar;