import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import EmailComponent from './contact-methods/email.component.js'
import PhoneComponent from './contact-methods/phone.component.js'
import TwitterComponent from './contact-methods/twitter.component.js'

class ContactComponent extends Component {
    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                Contact us by:
                <ul>
                    <li>
                        <NavLink to="/contact/email" exact activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                        }}>Email</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/phone" exact activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                        }}>Phone</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/twitter" exact activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                        }}>Twitter</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/contact/email" component={EmailComponent}/>
                    <Route path="/contact/phone" component={PhoneComponent}/>
                    <Route path="/contact/twitter" component={TwitterComponent}/>
                </Switch>
            </div>
            
        );
    }
}

export default ContactComponent;