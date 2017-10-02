import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavBrand from './nav-brand.component';
import MobileNavToggler from './nav-toggler.component';

import products from '../products/product-list.data';

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
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/products" onClick={e => e.preventDefault()} className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/products" exact>Browse</NavLink>
                            <hr />
                            {products.map(product => (
                                <NavLink key={product.id} className="dropdown-item" to={`/products/${product.id}`}>{product.title}</NavLink>
                                ))
                            }
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClass="active">
                            Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopNavbar;