import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeStyle={{ color: 'green' }} exact activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                        }}>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{ color: 'green' }}  activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                        }}>
                        About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeStyle={{ color: 'green' }}  activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                        }}>
                        Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;