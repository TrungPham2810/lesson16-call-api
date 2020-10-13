import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest} from './../../actions/index';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }


    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        })
        return result;
    }
    showProducts = (products) => {
        var result = <tr><td></td></tr>;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                
                    />
                )
            })
        }
        return result;
    }
    render() {
        var { products } = this.props;
    console.log(products);

        return (
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mb-10">
                    <Link to="/product/add" className="btn btn-large btn-block btn-info">Add Product</Link>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
