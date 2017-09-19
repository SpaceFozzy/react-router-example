import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Banana Slicer',
    description: 'This brilliant kitchen gadget will slice your bananas.'
  },
  {
    id: 2,
    title: 'Avacado Scooper',
    description: 'This brilliant kitchen gadget will scoop your avacados.'
  },
  {
    id: 3,
    title: 'Orange Peeler',
    description: 'This brilliant kitchen gadget will peel your oranges.'
  }
];

class ProductsComponent extends Component {
    render() {
        const url = this.props.match.url;
        return (
            <div>
                <h2>Welcome To Our Products Page!</h2>
                Here's our list:
                <ol>
                {products && products.map((product)=>
                    <li key={product.id}>
                        <NavLink to={`${url}/${product.id}`}>{product.title}</NavLink>
                    </li>
                )}
                </ol>
            </div>
        );
    }
}

export default ProductsComponent;