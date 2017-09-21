import React, { Component } from 'react';
import products from './product-list.data';

class ProductDetails extends Component {
    constructor() {
        super()
        this.state = {
            product: null,
        }
    }
    
    componentWillReceiveProps() {
        const product = products.find((product) => {
            return product.id === +this.props.match.params.id;
        })
        this.setState({ product });
    }
    
    render() {
        return (
            <div>
                <h3>
                    {this.state.product && this.state.product.title}
                </h3>
                {this.state.product && this.state.product.description}
            </div>
        );
    }
}

export default ProductDetails;