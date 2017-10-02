import React, { Component } from 'react';
import products from './product-list.data';
import { NavLink } from 'react-router-dom';

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null,
        }    
    }

    componentDidMount() {
        this.updateProduct(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
       this.updateProduct(nextProps.match.params.id);
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
                <section className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 className="display-3">{this.state.product && this.state.product.title}</h2>
                        <p className="lead">
                            {this.state.product && this.state.product.description}
                        </p>
                    </div>
                </section>
                <section className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/" exact activeClass="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink to="/products" exact activeClass="active">
                                Products
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item active">
                            {this.state.product && this.state.product.title}
                        </li>
                    </ol>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div style={{width:'100%', height: '400px', backgroundColor: '#333', float: 'left', marginRight: '20px', marginBottom: '20px'}}></div>
                            
                                <strong>
                                    <h3>$199.00 <small className="text-muted">each</small></h3>
                                </strong>
                                <em>11 left in stock</em>
                            
                        </div>
                        <div className="col-sm-7">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dui quis sem fringilla, sit amet tempor massa maximus. Sed sit amet iaculis enim. Proin facilisis egestas ante, eget aliquet massa placerat id. Vestibulum et ante vitae dolor hendrerit fermentum. Sed porttitor pretium finibus. Duis vehicula quis erat vel posuere. Aliquam quis pellentesque lorem. Vestibulum ac est vitae lacus tempus lacinia ut eget ante. Donec porttitor, sapien et commodo tincidunt, neque justo venenatis ex, molestie tincidunt nibh elit ac leo. In scelerisque tellus nec risus lacinia, id tincidunt enim ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tincidunt ornare nunc, vel vulputate augue sodales in. Morbi luctus ultricies nibh id laoreet. Proin dignissim erat libero, et suscipit lacus blandit et. Praesent lacinia turpis quis felis bibendum, quis dapibus lectus iaculis. Curabitur rhoncus, risus sed feugiat finibus, nunc risus vulputate erat, in interdum risus ex in dui.
                            </p>
                            <p>
                                Vivamus consectetur commodo nulla ut blandit. Nullam pharetra accumsan facilisis. Pellentesque molestie lacus ut lacus vulputate, in fringilla lectus rhoncus. Donec sit amet diam et nisi rutrum feugiat et nec sem. Phasellus tincidunt tincidunt condimentum. Vestibulum vitae sodales velit.
                            </p>
                            <p>
                                Maecenas ultrices est est, vel egestas ante placerat a. Donec a mattis erat. Fusce ac ligula vulputate libero suscipit varius nec at odio. Duis pellentesque felis sit amet nunc mattis, sit amet tempor est iaculis. Integer sollicitudin ut erat sit amet efficitur. Maecenas id viverra lectus. Duis mollis, mi ut porttitor lobortis, dolor tortor fringilla risus, sed viverra odio dolor sit amet urna. Nam accumsan id mi non porttitor.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProductDetails;