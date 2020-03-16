import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm('Are You Sure?')) { //eslint-disable-line
           this.props.onDelete(id)
            
        }
    }
    render() {
        var {product, index} = this.props;
        var status = product.status ? 'Con Hang' : 'Het Hang';
        var classStatus = product.status ? 'label-warning' : 'label-danger';
        return (
            <tr>
            <td>{index++}</td>
        <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`label ${classStatus}`}>
                    {status}
                </span>
            </td>
            <td>

                {/* <button type="button" className="btn btn-info mr-10" >Edit</button> */}
                <Link to={`/product/edit/${product.id}`} className="btn btn-info mr-10">
                    Edit
                </Link>
                <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>


            </td>
            </tr>
          );
    }
 
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (id) => {
            dispatch(actions.actDeleteProductRequest(id))
        }
    }
}

export default connect(null, mapDispatchToProps) (ProductItem);
