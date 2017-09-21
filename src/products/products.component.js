import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import ProductDetails from './product-details.component';
import products from './product-list.data';

class ProductsComponent extends Component {
    render() {
        return (
            <div>
                <h2>Welcome To Our Products Page!</h2>
                Here's our list:
                <ol>
                {products && products.map((product)=>
                    <li key={product.id}>
                        <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
                    </li>
                )}
                </ol>
                <Route path={`/products/:id`} component={ProductDetails} />
            </div>
        );
    }
}

export default ProductsComponent;