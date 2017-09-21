import React, { Component } from 'react';
import products from './product-list.data';

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null,
        }    
    }

    componentDidMount() {
        this.updateProduct(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
       this.updateProduct(nextProps.id);
    }

    updateProduct(id) {
        const product = products.find((product) => {
            return product.id === +id;
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