import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import products from './product-list.data';

class ProductsComponent extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Welcome To Our Products page!</h1>
                        <p className="lead">
                            Select a product to view its details.
                        </p>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                    {products && products.map(product =>
                        <div className="col-md-4">
                            <div className="card" key={product.id}>
                                <div style={{width:'100%', height: '200px', backgroundColor: '#333'}}></div>
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                    <NavLink to={`/products/${product.id}`} activeStyle={{ fontWeight: 'bold', color: 'green' }}>
                                        Details
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </section>
            </div>
        );
    }
}

export default ProductsComponent;